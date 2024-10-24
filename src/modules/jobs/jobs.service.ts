import { Injectable } from "@nestjs/common";
import AgendaService from "../agenda/agenda.service";
import { Agenda } from "agenda";
import LogService from "../log/log.service";
import { ConfigService } from "@nestjs/config";
import LocationModel from "../weather-forecast/entities/location/location.entity";
import LocationRepository from "../weather-forecast/repository/location.repository";
import { AxiosResponse } from "axios";
import { lastValueFrom } from "rxjs";
import { HttpService } from "@nestjs/axios";
import ForecastModel from "../weather-forecast/entities/forecast/forecast.entity";
import ForecastRepository from "../weather-forecast/repository/forecast.repository";
import LocationForecastRelationModel from "../weather-forecast/entities/location-forecast-relation/location.forecast.relation.entity";
import LocationForecastRelationRepository from "../weather-forecast/repository/location.forecast.relation.repository";


@Injectable()
export default class JobsService {

    private agenda: Agenda;

    constructor(
        private readonly agendaService: AgendaService,
        private readonly logService: LogService,
        private readonly configService: ConfigService,
        private readonly locationRepository: LocationRepository,
        private readonly forecastRepository: ForecastRepository,
        private readonly locationForecastRelationRepository: LocationForecastRelationRepository,
        private readonly httpService: HttpService
    ) { }

    public async startAutomatedWeatherForecastFetcher(): Promise<void> {
        try {
            this.logService.log(
                JobsService.name,
                "Starting automated weather forcast job"
            );

            const jobName: string = "Automated weather forecast fetcher";

            this.agenda = this.agendaService.getCurrentAgendaInstance();

            this.agenda.define("Automated weather forecast fetcher", async (job) => {
                await this.readLocationsFromDatabaseAndUpdateWeatherForecast();
            });

            await this.agenda.every("5 minutes", jobName);
        } catch (error) {
            this.logService.error(
                JobsService.name,
                error.message,
                null
            );
            return
        }
    }

    private async readLocationsFromDatabaseAndUpdateWeatherForecast(): Promise<void> {
        const meteoBlueApi: string = this.configService.get("METEO_BLUE_API_FORECAST_INFORMATION");
        const meteoBlueApiKey: string = this.configService.get("METEO_BLUE_API_KEY");

        const locations: LocationModel[] = await this.locationRepository.listAllLocations();
        if (!locations || locations.length == 0) {
            this.logService.log(
                JobsService.name,
                `No location found in database, waiting 5 minutes to search again.`
            );
            return;
        }

        this.logService.log(
            JobsService.name,
            `Found ${locations.length} locations, updating weather forecast.`
        );

        for (const location of locations as LocationModel[]) {
            const url: string = `${meteoBlueApi}/packages/basic-1h?lat=${location.lat}&lon=${location.lon}&apikey=${meteoBlueApiKey}`;
            const response: AxiosResponse = await lastValueFrom(
                this.httpService.get(url, {})
            );

            response.data.metadata.name = location.name;

            const flatResponse: any = await this.flattenResponse(response);
            flatResponse.name = location.name;
            const newWeatherForecast: ForecastModel = await this.forecastRepository.createWeatherForecast(flatResponse);

            const isLocationForecastRelationExists: LocationForecastRelationModel = await this.locationForecastRelationRepository.getLocationForecastRelationById(
                location.uuid,
                newWeatherForecast.uuid
            );

            if (isLocationForecastRelationExists && isLocationForecastRelationExists != undefined) {
                this.logService.log(
                    JobsService.name,
                    "A new relation between location and forecast will not be created. Relation already exists"
                );
                return
            }
    
            await this.locationForecastRelationRepository.createLocationForecastRelation(
                location.uuid,
                newWeatherForecast.uuid
            );
    
            this.logService.log(
                JobsService.name,
                `New weather forecast and relation create for location ${location.name}`
            );
            return;
        }
    }

    private async flattenResponse(response: AxiosResponse) {
        try {
            if (!response || !response.data) {
                throw new Error('Invalid response');
            }

            const flattenedResponse = {};
            const seenObjects = new WeakSet();

            function flatten(obj, parentKey = '') {
                if (seenObjects.has(obj)) {
                    return;
                }

                seenObjects.add(obj);

                for (let key in obj) {
                    if (key === 'units') {
                        continue;
                    }

                    if (Array.isArray(obj[key])) {
                        flattenedResponse[key] = obj[key];
                    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                        flatten(obj[key], `${key}`);
                    } else {
                        flattenedResponse[key] = obj[key];
                    }
                }
            }

            flatten(response.data);
            return flattenedResponse;
        } catch (error) {
            this.logService.error(
                JobsService.name,
                error.message,
                null
            );
            return;
        }
    }
}