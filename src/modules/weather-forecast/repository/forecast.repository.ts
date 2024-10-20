import { Inject, Injectable } from "@nestjs/common";
import ForecastModel from "../entities/forecast/forecast.entity";


@Injectable()
export default class ForecastRepository
{
    constructor(
        @Inject("FORECAST_MODEL")
        private readonly forecastModel: typeof ForecastModel
    ) {}

    public async getAllForecastsByGeoLocation(lat: number, lon: number): Promise<ForecastModel[]>
    {
        return await this.forecastModel.findAll({
            where: { lat, lon }
        });
    }
}