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
            this.logger.log(`[${context}] - ${message} - ${obj}`);

        this.logger.log(`[${context}] - ${message}`);
    }

    public error(
        context: string,
        message: string,
        obj: object = null
    ) {
        if (obj)
            this.logger.error(`[${context}] - ${message} - ${obj}`);

        this.logger.error(`[${context}] - ${message}`);
    }
}