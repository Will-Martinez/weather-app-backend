import { Inject, Injectable } from "@nestjs/common";
import LocationModel from "../entities/location/location.entity";
import { v4 as uuidv4 } from "uuid";


@Injectable()
export default class LocationRepository
{
    constructor(
        @Inject("LOCATION_MODEL")
        private readonly locationModel: typeof LocationModel
    ) {}

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