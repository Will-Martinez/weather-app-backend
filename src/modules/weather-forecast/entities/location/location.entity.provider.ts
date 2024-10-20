import LocationModel from "./location.entity";

export const locationEntityProvider = [
    {
        provide: "LOCATION_MODEL",
        useValue: LocationModel
    }
]