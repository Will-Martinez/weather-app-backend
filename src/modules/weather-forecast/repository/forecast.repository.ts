import { Inject, Injectable } from "@nestjs/common";
import ForecastModel from "../entities/forecast/forecast.entity";
import { where } from "sequelize";


@Injectable()
export default class ForecastRepository
{
    constructor(
        @Inject("FORECAST_MODEL")
        private readonly forecastModel: typeof ForecastModel
    ) {}

    public async getAllForecastsByLocationName(locationName: string): Promise<ForecastModel>
    {
    return await ForecastModel.findOne({
        where: { name: locationName }
    });
    }

    public async createWeatherForecast(weatherForecast: Partial<ForecastModel>): Promise<ForecastModel>
    {
        return await this.forecastModel.create(weatherForecast);
    }

    public async updateWeatherForecast(uuid: string, newData: ForecastModel)
    {
        return await this.forecastModel.update(newData, {
            where: {
                uuid
            }
        });
    }
}