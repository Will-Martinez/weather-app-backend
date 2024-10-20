import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";



export default class LocationWeatherForecastRequestDto
{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Location name",
        type: String
    })
    location: string
}