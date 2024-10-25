import { AutoMap } from "@automapper/classes";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import LocationWeatherForecastResponseDto from "./location.weather.forecast.response.dto";
import GeolocationWeatherForecastResponseDto from "./geolocation.weather.forecast.response.dto";


export default class LocationWeatherForecastRelationResponseDto
{
    @ValidateNested()
    @AutoMap()
    @Type(() => LocationWeatherForecastResponseDto)
    location: LocationWeatherForecastResponseDto

    @ValidateNested()
    @AutoMap()
    @Type(() => GeolocationWeatherForecastResponseDto)
    forecast: GeolocationWeatherForecastResponseDto
}