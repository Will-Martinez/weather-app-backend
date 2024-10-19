import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";



export default class AuthUserRequestDto
{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "User e-mail",
        type: String
    })
    email: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "User password.",
        type: String
    })
    password: string
}