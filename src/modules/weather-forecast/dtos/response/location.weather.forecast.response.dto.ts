import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, IsUUID, IsOptional } from "class-validator";

export default class LocationWeatherForecastResponseDto {
    @IsUUID()
    @IsOptional()
    @ApiProperty({
        description: "Unique identifier for the location",
        type: String
    })
    uuid: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Location name.",
        type: String
    })
    name: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "ISO 2 country code",
        type: String
    })
    iso2: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Name of the country",
        type: String
    })
    country: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "First administrative division (e.g., state, province)",
        type: String
    })
    admin1: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Latitude of the location",
        type: Number
    })
    lat: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Longitude of the location",
        type: Number
    })
    lon: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Altitude above sea level",
        type: Number
    })
    asl: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Timezone of the location",
        type: String
    })
    timezone: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Population of the location",
        type: Number
    })
    population: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Distance to the nearest reference point",
        type: Number
    })
    distance: number;

    @IsString()
    @IsOptional()
    @ApiProperty({
        description: "ICAO code (optional)",
        type: String,
        required: false
    })
    icao?: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "IATA code",
        type: String
    })
    iata: string;

    @IsNotEmpty()
    @ApiProperty({
        description: "Postcodes for the location",
        type: Object
    })
    postcodes: object;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Feature class for geographical classification",
        type: String
    })
    featureClass: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Feature code for geographical classification",
        type: String
    })
    featureCode: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "URL related to the location",
        type: String
    })
    url: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Location ID",
        type: Number
    })
    id: number;
}
