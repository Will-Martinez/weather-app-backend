import { Inject, Injectable } from "@nestjs/common";
import LocationForecastRelationModel from "../entities/location-forecast-relation/location.forecast.relation.entity";
import LocationModel from "../entities/location/location.entity";
import ForecastModel from "../entities/forecast/forecast.entity";



@Injectable()
export default class LocationForecastRelationRepository
{
    constructor(
        @Inject("LOCATION_FORECAST_RELATION_MODEL")
        private readonly locationForecastRelationModel: typeof LocationForecastRelationModel
    ) {}

    public async getLocationForecastRelationById(locationId: string, forecastId: string): Promise<LocationForecastRelationModel>
    {
        return await this.locationForecastRelationModel.findOne({
            where: { locationId, forecastId },
            include: [
                { model: LocationModel },
                { model: ForecastModel }
            ]
        });
    }

    public async createLocationForecastRelation(locationId: string, forecastId: string): Promise<LocationForecastRelationModel>
    {
        return await this.locationForecastRelationModel.create({
            locationId,
            forecastId
        })
    }
}