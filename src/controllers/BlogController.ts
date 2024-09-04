import { Request, Response } from "express";

export class BlogController {
    create(req: Request, res: Response) {
        const { body } = req;
        console.log(body);
        res.status(201).json();
    }

    getPost(req: Request, res: Response) {
        res.status(201).json();
    }
}
