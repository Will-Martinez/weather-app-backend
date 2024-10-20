import { Controller, Post } from "@nestjs/common";
import WeatherForeCastService from "./weather.forecast.service";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import LocationWeatherForecastRequestDto from "./dtos/request/location.weather.forecast.request.dto";
import GeolocationWeatherForecastRequestDto from "./dtos/request/geolocation.weather.forecast.request.dto";

@ApiTags("Weather Forecast")
@Controller("/api/v1/weather-forecast")
export default class WeatherForeCastController
{
    constructor (
        private readonly wheatherForecastService: WeatherForeCastService
    ) {}

    @ApiBody({ type: LocationWeatherForecastRequestDto })
    @Post("/search-by-location")
    public async searchLocationWeather()
    {
        
    }

    @ApiBody({ type:  GeolocationWeatherForecastRequestDto})
    @Post("/search-by-geolocation")
    public async searchGeolocationWeather()
    {
        
    }
}