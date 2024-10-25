export const envConfig = () => ({
    NODE_ENV: process.env.NODE_ENV,
    PORT: parseInt(process.env.PORT, 10) || 3000,
    JWT_SECRET: process.env.JWT_SECRET,
    MONGO_DB_STRING: process.env.MONGO_DB_STRING,
    BACKGROUND_WEATHER_FORECAST_JOB_COOLDOWN: process.env.BACKGROUND_WEATHER_FORECAST_JOB_COOLDOWN,
    AGENDA_JOBS_ENABLED: process.env.AGENDA_JOBS_ENABLED,
    SQL_DIALECT: process.env.SQL_DIALECT,
    SQL_HOST: process.env.SQL_HOST,
    SQL_DB: process.env.SQL_DB,
    SQL_PORT: parseInt(process.env.SQL_PORT, 10) || 3306,
    SQL_USER_NAME: process.env.SQL_USER_NAME,
    SQL_PASSWORD: process.env.SQL_PASSWORD
  });