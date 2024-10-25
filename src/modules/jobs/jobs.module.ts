import { Module } from "@nestjs/common";
import JobsService from "./jobs.service";
import AgendaModule from "../agenda/agenda.module";
import AgendaService from "../agenda/agenda.service";
import LogService from "../log/log.service";
import { ConfigService } from "@nestjs/config";
import { HttpModule } from "@nestjs/axios";
import LocationRepository from "../weather-forecast/repository/location.repository";
import ForecastRepository from "../weather-forecast/repository/forecast.repository";
import LocationForecastRelationRepository from "../weather-forecast/repository/location.forecast.relation.repository";
import { locationEntityProvider } from "../weather-forecast/entities/location/location.entity.provider";
import { forecastEntityProvider } from "../weather-forecast/entities/forecast/forecast.entity.provider";
import { locationForecastRelationEntityProvider } from "../weather-forecast/entities/location-forecast-relation/location.forecast.relation.entity.provider";

@Module({
    imports: [
        AgendaModule,
        HttpModule
    ],
    providers: [
        AgendaService,
        ConfigService,
        JobsService,
        LogService,
        LocationRepository,
        ForecastRepository,
        LocationForecastRelationRepository,
        ...locationEntityProvider,
        ...forecastEntityProvider,
        ...locationForecastRelationEntityProvider
    ]
})
export default class JobsModule {}