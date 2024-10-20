import { Injectable } from "@nestjs/common";
import ForecastRepository from "./repository/forecast.repository";
import { ConfigService } from "@nestjs/config";
import LogService from "../log/log.service";
import LocationWeatherForecastRequestDto from "./dtos/request/location.weather.forecast.request.dto";
import GeolocationWeatherForecastRequestDto from "./dtos/request/geolocation.weather.forecast.request.dto";


@Injectable()
export default class WeatherForeCastService
{
    constructor(
        private readonly foreCastRepository: ForecastRepository,
        private readonly configService: ConfigService,
        private readonly logService: LogService
    ) {}

    public async fetchLocationWeatherForecast(locationWeatherForecastRequestDto: LocationWeatherForecastRequestDto)
    {
        try {
            // need to define an API in order to fetch weather forecast by location name.
        } catch (error) {
            this.logService.error(
                WeatherForeCastService.name,
                error,
                null
            );
            return
        }
    }

    public async fetchGeolocationWeatherForecast(geolocationWeatherForecastRequestDto: GeolocationWeatherForecastRequestDto)
    {
        try {
            // need to define an API in order to fetch weather forecast by geolocation(lat and lon).
        } catch (error) {
            this.logService.error(
                WeatherForeCastService.name,
                error,
                null
            );
            return;
        }
    }
}