import { Inject, Injectable } from "@nestjs/common";
import LocationModel from "../entities/location/location.entity";
import { v4 as uuidv4 } from "uuid";
import { Op, fn, col, where } from "sequelize";
// const { Op, fn, col, where } = require('sequelize');


@Injectable()
export default class LocationRepository
{
    constructor(
        @Inject("LOCATION_MODEL")
        private readonly locationModel: typeof LocationModel
    ) {}

    public async listAllLocations(): Promise<LocationModel[]>
    {
        try {
            return await this.locationModel.findAll({
                attributes: ["name", "uuid", "country", "admin1", "lat", "lon"]
            })
        } catch (error) {
            throw error;
        }
    }

    public async getLocationByGeolocation(lat: number, lon: number): Promise<LocationModel>
    {
        try {
            return await this.locationModel.findOne({
                where: {
                    [Op.and]: [
                      where(fn('ROUND', col('lat'), 4), fn('ROUND', lat, 4)),
                      where(fn('ROUND', col('lon'), 4), fn('ROUND', lon, 4))
                    ]
                  }
            })
        } catch (error) {
            throw error
        }
    }

    public async getLocationByName(name: string): Promise<LocationModel>
    {
        try {
            return await this.locationModel.findOne({
                where: { name }
            });
        } catch (error) {
            throw error;
        }
    }

    public async createLocationInformation(locationInfos: Partial<LocationModel>): Promise<LocationModel>
    {
        try {
            locationInfos.uuid = uuidv4();
            return await this.locationModel.create(locationInfos);
        } catch (error) {
            throw error;
        }
    }
}