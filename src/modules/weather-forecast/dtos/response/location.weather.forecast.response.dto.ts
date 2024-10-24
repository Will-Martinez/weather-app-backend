import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, IsUUID, IsOptional } from "class-validator";
import { AutoMap } from "@automapper/classes";

export default class LocationWeatherForecastResponseDto {
    @AutoMap()
    @IsUUID()
    @IsOptional()
    @ApiProperty({
        description: "Unique identifier for the location",
        type: String
    })
    uuid: string;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Location name.",
        type: String
    })
    name: string

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "ISO 2 country code",
        type: String
    })
    iso2: string;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Name of the country",
        type: String
    })
    country: string;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "First administrative division (e.g., state, province)",
        type: String
    })
    admin1: string;

    @AutoMap()
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Latitude of the location",
        type: Number
    })
    lat: number;

    @AutoMap()
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Longitude of the location",
        type: Number
    })
    lon: number;

    @AutoMap()
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Altitude above sea level",
        type: Number
    })
    asl: number;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Timezone of the location",
        type: String
    })
    timezone: string;

    @AutoMap()
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Population of the location",
        type: Number
    })
    population: number;

    @AutoMap()
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Distance to the nearest reference point",
        type: Number
    })
    distance: number;

    @AutoMap()
    @IsString()
    @IsOptional()
    @ApiProperty({
        description: "ICAO code (optional)",
        type: String,
        required: false
    })
    icao?: string;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "IATA code",
        type: String
    })
    iata: string;

    @AutoMap()
    @IsNotEmpty()
    @ApiProperty({
        description: "Postcodes for the location",
        type: Object
    })
    postcodes: object;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Feature class for geographical classification",
        type: String
    })
    featureClass: string;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Feature code for geographical classification",
        type: String
    })
    featureCode: string;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "URL related to the location",
        type: String
    })
    url: string;

    @AutoMap()
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Location ID",
        type: Number
    })
    id: number;
}
