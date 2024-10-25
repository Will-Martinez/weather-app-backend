import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { createMap, forMember, mapFrom, Mapper } from "@automapper/core"; // Import forMember, mapFrom
import { Injectable } from "@nestjs/common";
import ForecastModel from "../entities/forecast/forecast.entity";
import GeolocationWeatherForecastResponseDto from "../dtos/response/geolocation.weather.forecast.response.dto";
import LocationForecastRelationModel from "../entities/location-forecast-relation/location.forecast.relation.entity";
import LocationWeatherForecastRelationResponseDto from "../dtos/response/location.weather.forecast.relation.response.dto";
import LocationModel from "../entities/location/location.entity";
import LocationsDataResponseDto from "../dtos/response/locations.data.response.dto";
import LocationWeatherForecastResponseDto from "../dtos/response/location.weather.forecast.response.dto";

@Injectable()
export default class ForecastMapper extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile() {
        return (mapper) => {
            createMap(mapper, ForecastModel, GeolocationWeatherForecastResponseDto)
            
            createMap(mapper, LocationForecastRelationModel, LocationWeatherForecastRelationResponseDto)

            createMap(mapper, LocationModel, LocationsDataResponseDto)

            createMap(mapper, ForecastModel, LocationWeatherForecastResponseDto)
        };
    }
}
