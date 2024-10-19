import { Module } from "@nestjs/common";
import JobsService from "./jobs.service";
import AgendaModule from "../agenda/agenda.module";
import AgendaService from "../agenda/agenda.service";
import LogService from "../log/log.service";

@Module({
    imports: [AgendaModule],
    providers: [
        JobsService,
        AgendaService,
        LogService
    ]
})
export default class JobsModule {}