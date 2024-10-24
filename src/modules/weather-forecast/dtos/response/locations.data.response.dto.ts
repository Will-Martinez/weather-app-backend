import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsUUID } from "class-validator";


export default class LocationsDataResponseDto
{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Location name",
        type: String
    })
    @AutoMap()
    name: string

    @IsUUID()
    @IsNotEmpty()
    @ApiProperty({
        description: "Unique identifier for the location",
        type: String
    })
    @AutoMap()
    uuid: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Country location",
        type: String
    })
    @AutoMap()
    country: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Location state/county/district",
        type: String
    })
    @AutoMap()
    admin1: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Location latitude.",
        type: Number
    })
    @AutoMap()
    lat: number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Location latitude.",
        type: Number
    })
    @AutoMap()
    lon: number
}