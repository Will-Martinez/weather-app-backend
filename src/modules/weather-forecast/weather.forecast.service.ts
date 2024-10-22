import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import ForecastRepository from "./repository/forecast.repository";
import { ConfigService } from "@nestjs/config";
import LogService from "../log/log.service";
import LocationWeatherForecastRequestDto from "./dtos/request/location.weather.forecast.request.dto";
import GeolocationWeatherForecastRequestDto from "./dtos/request/geolocation.weather.forecast.request.dto";
import LocationRepository from "./repository/location.repository";
import LocationModel from "./entities/location/location.entity";
import { AxiosResponse } from "axios";
import { lastValueFrom } from "rxjs";
import { HttpService } from "@nestjs/axios";
import LocationWeatherForecastResponseDto from "./dtos/response/location.weather.forecast.response.dto";
// import GeolocationWeatherForecastResponseDto from "./dtos/response/geolocation.weather.forecast.response.dto";
import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/core";
import ForecastModel from "./entities/forecast/forecast.entity";
import LocationForecastRelationModel from "./entities/location-forecast-relation/location.forecast.relation.entity";
import LocationForecastRelationRepository from "./repository/location.forecast.relation.repository";


@Injectable()
export default class WeatherForeCastService {
    constructor(
        /* @InjectMapper()
        private readonly mapper: Mapper, */
        private readonly configService: ConfigService,
        private readonly foreCastRepository: ForecastRepository,
        private readonly locationRepository: LocationRepository,
        private readonly locationForecastRelationRepository: LocationForecastRelationRepository,
        private readonly logService: LogService,
        private readonly httpService: HttpService
    ) { }

    public async fetchLocationWeatherForecast(
        locationWeatherForecastRequestDto: LocationWeatherForecastRequestDto
    ): Promise<ForecastModel> { // o correto seria retornar o dto, mas parece que o mapper não está funcionando da forma que eu gostaria
        try {
            const location: LocationModel = await this.locationRepository.getLocationByName(
                locationWeatherForecastRequestDto.location
            );

            if (!location)
                return await this.handleLocation(locationWeatherForecastRequestDto);

            this.logService.log(
                WeatherForeCastService.name,
                "Location exists in database."
            );

            const weatherForecast: ForecastModel = await this.foreCastRepository.getAllForecastsByLocationName(
                location.name
            );

            if (!weatherForecast || weatherForecast == undefined)
                return await this.handleWeatherForecast(location);

            this.logService.log(
                WeatherForeCastService.name,
                "Weather forecast exists in database",
                null
            );

            return weatherForecast.dataValues;

        } catch (error) {
            this.logService.error(
                WeatherForeCastService.name,
                error.message,
                error
            );
            return
        }
    }

    public async getLocationWeatherRelation(
        locationId: string,
        forecastId: string
    ): Promise<LocationForecastRelationModel> {
        try {
            return await this.locationForecastRelationRepository.getLocationForecastRelationById(locationId, forecastId);
        } catch (error) {
            this.logService.error(
                WeatherForeCastService.name,
                error.message,
                error
            );
            return
        }
    }

    private async handleLocation(
        locationWeatherForecastRequestDto: LocationWeatherForecastRequestDto
    ): Promise<ForecastModel> {
        this.logService.log(
            WeatherForeCastService.name,
            "Location dont exist in database."
        );
        const locationName = locationWeatherForecastRequestDto.location;
        const meteoBlueApi: string = this.configService.get("METEO_BLUE_API_LOCATION_INFORMATION");
        const meteoBlueApiKey: string = this.configService.get("METEO_BLUE_API_KEY");
        const url: string = `${meteoBlueApi}/en/server/search/query3?query=${locationName.toLowerCase()}&apikey=${meteoBlueApiKey}`;

        const response: AxiosResponse = await lastValueFrom(
            this.httpService.get(url, {})
        );

        if (!response.data || response.status == 404) {
            throw new NotFoundException(`Location weather forecast not found by name ${locationWeatherForecastRequestDto.location}`);
        }

        const locationInfosArray: LocationWeatherForecastResponseDto[] = response.data.results;

        const locationResult: LocationWeatherForecastResponseDto | undefined = locationInfosArray.find((location) => {
            return (
                location.name?.toLowerCase() === locationWeatherForecastRequestDto.location.toLowerCase() &&
                location.country?.toLowerCase() === locationWeatherForecastRequestDto.country.toLowerCase() &&
                location.admin1?.toLowerCase() === locationWeatherForecastRequestDto.state.toLowerCase()
            );
        });

        if (!locationResult && locationResult == undefined)
            throw new NotFoundException(
                `Location infos array found but the specific name of ${locationWeatherForecastRequestDto.location.toLowerCase()} was not found.`
            );

        const newLocation: LocationModel = await this.locationRepository.createLocationInformation(locationResult);
        const meteoBlueForecastApi: string = this.configService.get("METEO_BLUE_API_FORECAST_INFORMATION");
        const urlForecast: string = `${meteoBlueForecastApi}/packages/basic-1h?lat=${newLocation.lat}&lon=${newLocation.lon}&apikey=${meteoBlueApiKey}`;
        const responseForecast: AxiosResponse = await lastValueFrom(
            this.httpService.get(urlForecast, {})
        );

        const flatResponse: any = await this.flattenResponse(responseForecast);
        let newWeatherForecast: ForecastModel
        if (!flatResponse && flatResponse == undefined) {
            throw new InternalServerErrorException("flat response error.");
        }

        flatResponse.name = newLocation.name;
        newWeatherForecast = await this.foreCastRepository.createWeatherForecast(flatResponse);

        const isLocationForecastRelationExists: LocationForecastRelationModel = await this.locationForecastRelationRepository.getLocationForecastRelationById(
            newLocation.uuid,
            newWeatherForecast.uuid
        );

        if (isLocationForecastRelationExists && isLocationForecastRelationExists != undefined) {
            this.logService.log(
                WeatherForeCastService.name,
                "A new relation between location and forecast will not be created. Relation already exists"
            );

            this.logService.log(
                WeatherForeCastService.name,
                `New weather forecast and relation create for location ${newLocation.name}`,
            );

            return newWeatherForecast
        }

        await this.locationForecastRelationRepository.createLocationForecastRelation(
            newLocation.uuid,
            newWeatherForecast.uuid
        );

        this.logService.log(
            WeatherForeCastService.name,
            `New weather forecast and relation create for location ${newLocation.name}`,
        );

        return newWeatherForecast
    }

    private async handleWeatherForecast(
        location: LocationModel
    ): Promise<ForecastModel> 
    {
        const meteoBlueApi: string = this.configService.get("METEO_BLUE_API_FORECAST_INFORMATION");
        const meteoBlueApiKey: string = this.configService.get("METEO_BLUE_API_KEY");
        const url: string = `${meteoBlueApi}/packages/basic-1h?lat=${location.lat}&lon=${location.lon}&apikey=${meteoBlueApiKey}`;
        const response: AxiosResponse = await lastValueFrom(
            this.httpService.get(url, {})
        );

        const flatResponse: any = await this.flattenResponse(response.data);
        flatResponse.name = location.name;
        const newWeatherForecast = await this.foreCastRepository.createWeatherForecast(flatResponse);

        const isLocationForecastRelationExists: LocationForecastRelationModel = await this.locationForecastRelationRepository.getLocationForecastRelationById(
            location.uuid,
            newWeatherForecast.uuid
        );

        if (isLocationForecastRelationExists && isLocationForecastRelationExists != undefined) {
            this.logService.log(
                WeatherForeCastService.name,
                "A new relation between location and forecast will not be created. Relation already exists"
            );

            this.logService.log(
                WeatherForeCastService.name,
                `New weather forecast and relation create for location ${location.name}`
            );
            return newWeatherForecast;
        }

        await this.locationForecastRelationRepository.createLocationForecastRelation(
            location.uuid,
            newWeatherForecast.uuid
        );

        this.logService.log(
            WeatherForeCastService.name,
            `New weather forecast and relation create for location ${location.name}`
        );
        return newWeatherForecast;
    }

    private async flattenResponse(response: AxiosResponse) {
        try {
            // Verifica se a resposta é válida
            if (!response || !response.data) {
                throw new Error('Invalid response');
            }

            const flattenedResponse = {};
            const seenObjects = new WeakSet(); // Para evitar referências circulares

            function flatten(obj, parentKey = '') {
                // Verifica se o objeto já foi visto
                if (seenObjects.has(obj)) {
                    return; // Evita loops infinitos
                }

                seenObjects.add(obj);

                for (let key in obj) {
                    if (key === 'units') {
                        continue; // Ignora a chave 'units'
                    }

                    if (Array.isArray(obj[key])) {
                        flattenedResponse[key] = obj[key];
                    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                        flatten(obj[key], `${key}`); // Chama recursivamente
                    } else {
                        flattenedResponse[key] = obj[key];
                    }
                }
            }

            flatten(response.data); // Certifique-se de aplanar response.data, não a resposta inteira
            return flattenedResponse;
        } catch (error) {
            this.logService.error(
                WeatherForeCastService.name,
                error.message,
                null
            );
            return;
        }
    }

}