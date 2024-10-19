import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from "passport-jwt";
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
    constructor(
        configService: ConfigService
    ) {
        // get token from headers
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get("JWT_SECRET")
        });

        // Get token from cookies
        /* super({
            jwtFromRequest: (req: Request) => {
                if (req && req.cookies)
                    return req.cookies["access_token"];

                return null;
            },
            secretOrKey: configService.get("JWT_SECRET")
        }); */
    }

    public validate (payload: any) {
        return payload;
    }
}