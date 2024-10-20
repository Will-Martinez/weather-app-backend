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

@Table({
    tableName: "location_weather_forecast"
})
export default class LocationForecastRelationModel extends Model
{
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    id!: number;

    @ForeignKey(() => LocationModel)
    @AllowNull(false)
    @Column(DataType.UUID)
    locationId!: string;

    @ForeignKey(() => ForecastModel)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    forecastId!: number;

    @AllowNull(true)
    @Column(DataType.DATE)
    createdAt?: Date;

    @AllowNull(true)
    @Column(DataType.DATE)
    updatedAt?: Date;

    @BelongsTo(() => LocationModel)
    location!: LocationModel;

    @BelongsTo(() => ForecastModel)
    forecast!: ForecastModel;
}
