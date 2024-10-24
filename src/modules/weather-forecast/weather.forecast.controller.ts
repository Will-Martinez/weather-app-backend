import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import WeatherForeCastService from "./weather.forecast.service";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import LocationWeatherForecastRequestDto from "./dtos/request/location.weather.forecast.request.dto";
import GeolocationWeatherForecastRequestDto from "./dtos/request/geolocation.weather.forecast.request.dto";
import LocationWeatherForecastResponseDto from "./dtos/response/location.weather.forecast.response.dto";
import GeolocationWeatherForecastResponseDto from "./dtos/response/geolocation.weather.forecast.response.dto";
import LocationsDataResponseDto from "./dtos/response/locations.data.response.dto";

@ApiTags("Weather Forecast")
@Controller("/api/v1/weather-forecast")
export default class WeatherForeCastController
{
    constructor (
        private readonly wheatherForecastService: WeatherForeCastService
    ) {}

    @ApiBody({ type: LocationWeatherForecastRequestDto })
    @ApiResponse({
        description: "Search or create location and weather forecast by location name.",
        type: LocationWeatherForecastResponseDto
    })
    @Post("/search-or-create-by-location")
    public async searchLocationWeather(
        @Body() locationWeatherForecastRequestDto: LocationWeatherForecastRequestDto
    )
    {
        return await this.wheatherForecastService.fetchLocationWeatherForecast(
            locationWeatherForecastRequestDto
        );
    }

    @ApiBody({ type: GeolocationWeatherForecastRequestDto })
    @ApiResponse({
        description: "Creates new weather forecast for an list of new locations in a geolocation region.",
        type: [LocationWeatherForecastResponseDto]
    })
    @Post("/create-by-geolocation")
    public async searchLocationByGeolocation(
        @Body() geolocationWeatherForecastRequestDto: GeolocationWeatherForecastRequestDto
    )
    {
        return await this.wheatherForecastService.fetchLocationWeatherByGeolocation(geolocationWeatherForecastRequestDto);
    }

    @Get("/location-weather-relation/:locationId/:forecastId")
    public async getLocationForecastRelation(
        @Param("locationId") locationId: string,
        @Param("forecastId") forecastId: string
    )
    {
        return await this.wheatherForecastService.getLocationWeatherRelation(locationId, forecastId);
    }

    @ApiResponse({
        description: "List locations.",
        type: LocationsDataResponseDto
    })
    @Get("/list/locations")
    public async getLocations()
    {
        return await this.wheatherForecastService.listLocations();
    }
}