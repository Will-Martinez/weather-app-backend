import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { createMap, forMember, mapFrom, Mapper } from "@automapper/core"; // Import forMember, mapFrom
import { Injectable } from "@nestjs/common";
import ForecastModel from "../entities/forecast/forecast.entity";
import GeolocationWeatherForecastResponseDto from "../dtos/response/geolocation.weather.forecast.response.dto";

@Injectable()
export default class ForecastMapper extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile() {
        return (mapper) => {
            createMap(mapper, ForecastModel, GeolocationWeatherForecastResponseDto)
                .reverse();
        };
    }
}
