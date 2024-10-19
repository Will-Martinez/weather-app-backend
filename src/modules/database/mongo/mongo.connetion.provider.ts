import * as mongoose from 'mongoose';

export const mongoConnectionProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<mongoose.Connection> => {
            try {
                const connection: mongoose.Mongoose = await mongoose.connect(process.env.MONGO_DB_STRING);
                return connection.connection;
            } catch (error) {
                console.error("Failed trying to connect database: ", error);
            }
        }
    },
];