import { Injectable } from "@nestjs/common";
import { Agenda } from "agenda";
import LogService from "../log/log.service";

@Injectable()
export default class AgendaService {

    private agenda: Agenda;

    constructor(
        private readonly logService: LogService,
    ) {}

    public startAgendaJobs(): void
    {
        this.createAgendaInstance();
    }

    public getCurrentAgendaInstance(): Agenda
    {
        return this.agenda;
    }

    private createAgendaInstance(): void
    {
        try {
            this.logService.log(
                AgendaService.name,
                "Starting agenda jobs...",
                null
            );

            this.agenda = new Agenda({
                db: { address: process.env.MONGO_DB_STRING, collection: "agendaJobs" }
            });

            this.agenda.once("ready", async () => {
                await this.agenda.start();
                this.logService.log(
                    AgendaService.name,
                    "Agenda jobs started!",
                    null
                );
            })
        } catch (error) {
            this.logService.error(
                AgendaService.name,
                "Failed trying to start agenda job",
                error
            );
            throw error;
        }
    }
}