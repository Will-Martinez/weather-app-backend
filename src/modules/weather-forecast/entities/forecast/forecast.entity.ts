import { 
    Table, 
    Model, 
    Column, 
    DataType,
    PrimaryKey, 
    AutoIncrement,
    AllowNull
 } from "sequelize-typescript";

@Table({
    tableName: "forecast"
})
export default class ForecastModel extends Model
{
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column
    id?: number;

    @AllowNull(false)
    @Column(DataType.DATE)
    modelRunUpdateTimeUtc!: Date;

    @AllowNull(true)
    @Column(DataType.STRING)
    name?: string;

    @AllowNull(false)
    @Column(DataType.FLOAT)
    height!: number;

    @AllowNull(false)
    @Column(DataType.FLOAT)
    latitude!: number;

    @AllowNull(false)
    @Column(DataType.FLOAT)
    longitude!: number;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    utcTimeOffSet!: number;

    @AllowNull(false)
    @Column(DataType.FLOAT)
    generationTimeMs!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    precipitationUnit!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    windSpeedUnit!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    precipitationProbabilityUnit!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    relativeHumidityUnit!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    temperatureUnit!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    timeUnit!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    pressureUnit!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    windDirectionUnit!: string;

    @AllowNull(false)
    @Column(DataType.JSON)
    time!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    snowFraction!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    windSpeed!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    temperature!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    precipitationProbability!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    convectivePrecipitation!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    rainSpot!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    picToCode!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    feltTemperature!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    precipiration!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    isDayLight!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    uvIndex!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    relativeHumidity!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    seaLevelPressure!: object;

    @AllowNull(false)
    @Column(DataType.JSON)
    windDirection!: object;
}
