import mongoose from "mongoose";
import config from './app/config';
import { server } from './app';
import { redisClientFunc } from "./redisClient";

async function main() {
    try {
        const DB_String = config.node_env === 'production' ? config.db_string : config.dev_db_string;
        await mongoose.connect(DB_String as string);
        console.log('Database connected successfully!');

        const PORT = config.node_env === 'production'? config.port : config.dev_port;
        server.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });

        // redis connection
        await redisClientFunc()
    } catch (err) {
        console.log(err);
    };
};

main();

process.on('unhandledRejection', (err: Record<string, unknown>) => {
    console.log(`unhandledRejection is detected , shutting down ...`);
    console.log(err.name, err.message);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});

process.on('uncaughtException', (err: Record<string, unknown>) => {
    console.log(`uncaughtException is detected , shutting down ...`);
    console.log(err.name, err.message);
    process.exit(1);
});