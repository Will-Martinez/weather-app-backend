import { Module } from "@nestjs/common";
import WeatherForeCastController from "./weather.forecast.controller";
import WeatherForeCastService from "./weather.forecast.service";
import ForecastRepository from "./repository/forecast.repository";
import { forecastEntityProvider } from "./entities/forecast/forecast.entity.provider";
import { ConfigService } from "@nestjs/config";
import LogService from "../log/log.service";


@Module({
    controllers: [WeatherForeCastController],
    providers: [
        ConfigService,
        ForecastRepository,
        LogService,
        WeatherForeCastService,
        ...forecastEntityProvider
    ]
})
export default class WeatherForeCastModule {}