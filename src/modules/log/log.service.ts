import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export default class LogService {
    private readonly logger: Logger = new Logger();

    public log(
        context: string,
        message: string,
        obj: object = null
    ) {
        if (obj)
            this.logger.log(message, context, obj);

        this.logger.log(message, context);
    }

    public error(
        context: string,
        message: string,
        obj: object = null
    ) {
        if (obj)
            this.logger.log(message, context, obj);

        this.logger.log(message, context);
    }
}