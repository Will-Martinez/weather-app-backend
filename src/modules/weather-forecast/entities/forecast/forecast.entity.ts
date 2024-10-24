import { 
    Table, 
    Model, 
    Column, 
    DataType,
    PrimaryKey, 
    AutoIncrement,
    AllowNull,
    Default
 } from "sequelize-typescript";
 import { AutoMap } from "@automapper/classes";

@Table({
    tableName: "forecast"
})
export default class ForecastModel extends Model
{
    @AutoMap()
    @PrimaryKey
    @AllowNull(false)
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    uuid!: string;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.DATE)
    modelrun_updatetime_utc!: Date;

    @AutoMap()
    @AllowNull(true)
    @Column(DataType.STRING)
    name?: string;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.FLOAT)
    height!: number;

    @AutoMap()
    @AllowNull(true)
    @Column(DataType.STRING)
    timezone_abbrevation: string

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.FLOAT)
    latitude!: number;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.DATE)
    modelrun_utc: Date;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.FLOAT)
    longitude!: number;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.INTEGER)
    utc_timeoffset!: number;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.FLOAT)
    generation_time_ms!: number;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.JSON)
    time!: object;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.JSON)
    snowfraction!: object;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.JSON)
    windspeed!: object;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.JSON)
    temperature!: object;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.JSON)
    precipitation_probability!: object;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.JSON)
    convective_precipitation!: object;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.JSON)
    rainspot!: object;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.JSON)
    pictocode!: object;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.JSON)
    felttemperature!: object;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.JSON)
    precipitation!: object;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.JSON)
    isdaylight!: object;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.JSON)
    uvindex!: object;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.JSON)
    relativehumidity!: object;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.JSON)
    sealevelpressure!: object;

    @AutoMap()
    @AllowNull(false)
    @Column(DataType.JSON)
    winddirection!: object;
}
