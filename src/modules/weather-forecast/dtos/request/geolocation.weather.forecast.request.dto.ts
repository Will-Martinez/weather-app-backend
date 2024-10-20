import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";



export default class GeolocationWeatherForecastRequestDto
{
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Latitude",
        type: String
    })
    lat: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Longitude",
        type: String
    })
    lon: string
}