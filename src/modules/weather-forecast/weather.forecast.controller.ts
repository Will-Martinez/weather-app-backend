import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import WeatherForeCastService from "./weather.forecast.service";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import LocationWeatherForecastRequestDto from "./dtos/request/location.weather.forecast.request.dto";
import GeolocationWeatherForecastRequestDto from "./dtos/request/geolocation.weather.forecast.request.dto";
import LocationWeatherForecastResponseDto from "./dtos/response/location.weather.forecast.response.dto";
import GeolocationWeatherForecastResponseDto from "./dtos/response/geolocation.weather.forecast.response.dto";

@ApiTags("Weather Forecast")
@Controller("/api/v1/weather-forecast")
export default class WeatherForeCastController
{
    constructor (
        private readonly wheatherForecastService: WeatherForeCastService
    ) {}

    @ApiBody({ type: LocationWeatherForecastRequestDto })
    @ApiResponse({
        description: "Search weather forecast by location name.",
        type: LocationWeatherForecastResponseDto
    })
    @Post("/search-by-location")
    public async searchLocationWeather(
        @Body() locationWeatherForecastRequestDto: LocationWeatherForecastRequestDto
    )
    {
        return await this.wheatherForecastService.fetchLocationWeatherForecast(
            locationWeatherForecastRequestDto
        );
    }

    @Get("/location-weather-relation/:locationId/:forecastId")
    public async getLocationForecastRelation(
        @Param("locationId") locationId: string,
        @Param("forecastId") forecastId: string
    )
    {
        return await this.wheatherForecastService.getLocationWeatherRelation(locationId, forecastId);
    }
}