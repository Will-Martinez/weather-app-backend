import { Module } from "@nestjs/common";
import AgendaService from "./agenda.service";
import LogService from "../log/log.service";


@Module({
    providers: [
        AgendaService,
        LogService
    ],
    exports: [AgendaService]
})
export default class AgendaModule {}