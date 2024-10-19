import { Injectable } from "@nestjs/common";
import AgendaService from "../agenda/agenda.service";
import { Agenda } from "agenda";
import LogService from "../log/log.service";


@Injectable()
export default class JobsService {

    private agenda: Agenda;

    constructor(
        private readonly agendaService: AgendaService,
        private readonly logService: LogService
    ) { }

    public async defineNewJob(jobName: string, coolDown: string, callback: () => void) 
    {
        try {
            console.log("new job required: ", { jobName, coolDown, callback: callback })

            this.agenda = this.agendaService.getCurrentAgendaInstance();

            this.agenda.define(jobName, async (job) => {
                callback();
            });

            await this.agenda.every(coolDown, jobName);

            this.logService.log(
                JobsService.name,
                `A new job was created with name '${jobName}'`
            );
        } catch (error) {
            this.logService.error(
                JobsService.name,
                error.message,
                null
            );
            throw error;
        }
    }
}