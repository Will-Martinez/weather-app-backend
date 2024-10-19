import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class AuthUserResponseDto
{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Access token for api calls.",
        type: String
    })
    access_token: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Refresh token for further use.",
        type: String
    })
    refresh_token: string
}