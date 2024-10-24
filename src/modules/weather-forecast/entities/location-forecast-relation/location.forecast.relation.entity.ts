import { 
    Table, 
    Model, 
    Column, 
    DataType, 
    PrimaryKey, 
    ForeignKey, 
    AllowNull, 
    AutoIncrement, 
    BelongsTo 
} from "sequelize-typescript";
import LocationModel from "../location/location.entity";
import ForecastModel from "../forecast/forecast.entity";
import { AutoMap } from "@automapper/classes";

@Table({
    tableName: "location_weather_forecast"
})
export default class LocationForecastRelationModel extends Model
{
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    @AutoMap()
    id!: number;

    @ForeignKey(() => LocationModel)
    @AllowNull(false)
    @Column(DataType.UUID)
    @AutoMap()
    locationId!: string;

    @ForeignKey(() => ForecastModel)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    @AutoMap()
    forecastId!: number;

    @AllowNull(true)
    @Column(DataType.DATE)
    @AutoMap()
    createdAt?: Date;

    @AllowNull(true)
    @Column(DataType.DATE)
    @AutoMap()
    updatedAt?: Date;

    @BelongsTo(() => LocationModel)
    @AutoMap()
    location!: LocationModel;

    @BelongsTo(() => ForecastModel)
    @AutoMap()
    forecast!: ForecastModel;
}
