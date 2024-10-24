import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { AutoMap } from "@automapper/classes";


export default class GeolocationWeatherForecastRequestDto
{
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Latitude",
        type: Number
    })
    @AutoMap()
    lat: number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Longitude",
        type: Number
    })
    @AutoMap()
    lon: number
}