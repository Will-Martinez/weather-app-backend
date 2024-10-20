import { 
    Table, 
    Model, 
    Column, 
    DataType, 
    PrimaryKey, 
    AllowNull, 
    Default
} from "sequelize-typescript";

@Table({
    tableName: "locations"
})
export default class LocationModel extends Model
{
    @PrimaryKey
    @AllowNull(false)
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    uuid!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    iso2!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    country!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    admin1!: string;

    @AllowNull(false)
    @Column(DataType.FLOAT)
    lat!: number;

    @AllowNull(false)
    @Column(DataType.FLOAT)
    lon!: number;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    asl!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    timezone!: string;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    population!: number;

    @AllowNull(false)
    @Column(DataType.FLOAT)
    distance!: number;

    @AllowNull(true)
    @Column(DataType.STRING)
    icao?: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    iata!: string;

    @AllowNull(false)
    @Column(DataType.JSON)
    postcodes!: object;

    @AllowNull(false)
    @Column(DataType.STRING)
    featureClass!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    featureCode!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    url!: string;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    id!: number;
}
