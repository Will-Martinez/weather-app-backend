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

@Table({
    tableName: "forecast"
})
export default class ForecastModel extends Model
{
    @PrimaryKey
    @AllowNull(false)
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    uuid!: string;

    @AllowNull(false)
    @Column(DataType.DATE)
    modelrun_updatetime_utc!: Date;

    @AllowNull(true)
    @Column(DataType.STRING)
    name?: string;

    @AllowNull(false)
    @Column(DataType.FLOAT)
    height!: number;

    @AllowNull(true)
    @Column(DataType.STRING)
    timezone_abbrevation: string

    @AllowNull(false)
    @Column(DataType.FLOAT)
    latitude!: number;

    @AllowNull(false)
    @Column(DataType.DATE)
    modelrun_utc: Date;

    @AllowNull(false)
    @Column(DataType.FLOAT)
    longitude!: number;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    utc_timeoffset!: number;

    @AllowNull(false)
    @Column(DataType.FLOAT)
    generation_time_ms!: number;

    @AllowNull(false)
    @Column(DataType.JSON)
    time!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    snowfraction!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    windspeed!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    temperature!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    precipitation_probability!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    convective_precipitation!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    rainspot!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    pictocode!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    felttemperature!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    precipitation!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    isdaylight!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    uvindex!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    relativehumidity!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    sealevelpressure!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    winddirection!: object;
}
