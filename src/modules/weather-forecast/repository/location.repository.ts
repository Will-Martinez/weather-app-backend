import { Inject, Injectable } from "@nestjs/common";
import LocationModel from "../entities/location/location.entity";


@Injectable()
export default class LocationRepository
{
    constructor(
        @Inject("LOCATION_MODEL")
        private readonly locationModel: typeof LocationModel
    ) {}

    public async getLocationByName(name: string): Promise<LocationModel>
    {
        return await this.locationModel.findOne({
            where: { name }
        });
    }
}