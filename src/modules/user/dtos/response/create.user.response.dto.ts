import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import mongoose from "mongoose";


export default class CreateUserResponseDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "User id created.",
        type: Number
    })
    id?: number

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "User e-mail created.",
        type: String
    })
    email: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "User name created.",
        type: String
    })
    userName: string
}