import express, { NextFunction, Request, Response } from "express";
import logger from "./config/logger";
import { HttpError } from "http-errors";
import blogRouter from "./routes/blog";

const app = express();

// middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello, Welcome to blog");
});

app.use("/posts", blogRouter);

/* eslint-disable @typescript-eslint/no-unused-vars */
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        error: [
            {
                type: err.name,
                msg: err.message,
                path: "",
                location: "",
            },
        ],
    });
});

export default app;
