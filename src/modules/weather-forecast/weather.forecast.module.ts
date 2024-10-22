import { Module } from "@nestjs/common";
import WeatherForeCastController from "./weather.forecast.controller";
import WeatherForeCastService from "./weather.forecast.service";
import ForecastRepository from "./repository/forecast.repository";
import { HttpModule } from "@nestjs/axios";
import { forecastEntityProvider } from "./entities/forecast/forecast.entity.provider";
import { ConfigService } from "@nestjs/config";
import LogService from "../log/log.service";
import LocationRepository from "./repository/location.repository";
import { locationEntityProvider } from "./entities/location/location.entity.provider";
import ForecastMapper from "./mapper/forecast.mapper";
import LocationForecastRelationRepository from "./repository/location.forecast.relation.repository";
import { locationForecastRelationEntityProvider } from "./entities/location-forecast-relation/location.forecast.relation.entity.provider";


@Module({
    imports: [
        HttpModule
    ],
    controllers: [WeatherForeCastController],
    providers: [
        ConfigService,
        ForecastRepository,
        ForecastMapper,
        LocationRepository,
        LocationForecastRelationRepository,
        LogService,
        WeatherForeCastService,
        ...forecastEntityProvider,
        ...locationEntityProvider,
        ...locationForecastRelationEntityProvider
    ]
})
export default class WeatherForeCastModule {}