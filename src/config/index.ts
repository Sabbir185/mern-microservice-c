import { config } from "dotenv";
config();

const { PORT, NODE_ENV, WELCOME_MESSAGE } = process.env;

export const Config = {
    PORT,
    NODE_ENV,
    WELCOME_MESSAGE
};
