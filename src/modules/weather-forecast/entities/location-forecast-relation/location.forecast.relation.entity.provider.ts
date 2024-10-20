import LocationForecastRelationModel from "./location.forecast.relation.entity";

export const locationForecastRelationEntityProvider = [
    {
        provide: "LOCATION_FORECAST_RELATION_MODEL",
        useValue: LocationForecastRelationModel
    }
]