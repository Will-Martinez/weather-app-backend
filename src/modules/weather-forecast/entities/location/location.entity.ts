import { IsNotEmpty, IsString } from "class-validator";
import { 
    Table, 
    Model, 
    Column, 
    DataType, 
    PrimaryKey, 
    AllowNull, 
    Default
} from "sequelize-typescript";
import { AutoMap } from "@automapper/classes";

@Table({
    tableName: "locations"
})
export default class LocationModel extends Model
{
    @PrimaryKey
    @AllowNull(false)
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    @AutoMap()
    uuid!: string;

    @IsString()
    @IsNotEmpty()
    @AllowNull(false)
    @Column(DataType.STRING)
    @AutoMap()
    name: string

    @AllowNull(false)
    @Column(DataType.STRING)
    @AutoMap()
    iso2!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    @AutoMap()
    country!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    @AutoMap()
    admin1!: string;

    @AllowNull(false)
    @Column(DataType.FLOAT)
    @AutoMap()
    lat!: number;

    @AllowNull(false)
    @Column(DataType.FLOAT)
    @AutoMap()
    lon!: number;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    @AutoMap()
    asl!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    @AutoMap()
    timezone!: string;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    @AutoMap()
    population!: number;

    @AllowNull(false)
    @Column(DataType.FLOAT)
    @AutoMap()
    distance!: number;

    @AllowNull(true)
    @Column(DataType.STRING)
    @AutoMap()
    icao?: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    @AutoMap()
    iata!: string;

    @AllowNull(false)
    @Column(DataType.JSON)
    @AutoMap()
    postcodes!: object;

    @AllowNull(false)
    @Column(DataType.STRING)
    @AutoMap()
    featureClass!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    @AutoMap()
    featureCode!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    @AutoMap()
    url!: string;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    @AutoMap()
    id!: number;
}
