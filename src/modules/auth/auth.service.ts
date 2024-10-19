import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Response } from "express";
import AuthDto from "./dtos/auth.dto";


@Injectable()
export default class AuthService {
    constructor(
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService
    ) {}

    public signToken(
        authDto: AuthDto,
        res: Response): { access_token: string, refresh_token: string } {
        const payload = {
            sub: authDto.userId,
            email: authDto.email
        };

        const access_token: string = this.jwtService.sign(
            payload,
            {
                expiresIn: "30m",
                secret: this.configService.get("JWT_SECRET")
            }
        );

        const refresh_token: string = this.jwtService.sign(
            payload,
            {
                expiresIn: "7d",
                secret: this.configService.get("JWT_SECRET")
            }
        );

        res.cookie("access_token", access_token, {
            httpOnly: true,
            secure: true,
            maxAge: 30 * 60 * 1000 // 30m
        });

        res.cookie("refresh_token", refresh_token, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7d
        });

        access_token.toString();
        refresh_token.toString();

        return { access_token, refresh_token };
    }
}