import ForecastModel from "./forecast.entity";

export const forecastEntityProvider = [
    {
        provide: "FORECAST_MODEL",
        useValue: ForecastModel
    }
];