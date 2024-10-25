import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import ApiDocService from './modules/doc/api.doc.service';
import * as cookieParser from "cookie-parser";
import AgendaService from './modules/agenda/agenda.service';
import JobsService from './modules/jobs/jobs.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  configureAppMiddleWares(app);
  startApiDoc(app);
  startAgendaJobs(app);

  app.listen(process.env.PORT);
}

function configureAppMiddleWares(app:INestApplication)
{
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
}

function startApiDoc(app: INestApplication)
{
  const apiDocService: ApiDocService = app.get(ApiDocService);
  apiDocService.setupSwagger(app);
}

function startAgendaJobs(app: INestApplication)
{
  const agendaService: AgendaService = app.get(AgendaService);
  agendaService.startAgendaJobs()

  setTimeout(async () => {
    const jobsService: JobsService = app.get(JobsService);
    jobsService.startAutomatedWeatherForecastFetcher();
  }, 3000);
}

bootstrap();
