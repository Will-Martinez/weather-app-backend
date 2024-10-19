import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export default class SigninUserResponseDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "User access token.",
        type: String
    })
    access_token: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "User refresh token.",
        type: String
    })
    refresh_token: string
}