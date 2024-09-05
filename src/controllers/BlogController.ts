import { Request, Response } from "express";
import fs from "fs/promises";
import { numberGen } from "../utils/helper";

export class BlogController {
    async create(req: Request, res: Response) {
        const { body } = req;
        const filePath = process.cwd() + "/public/blogs.txt";
        const rand = numberGen(10000);
        if (!body?.title || !body?.content) {
            return res.status(404).send();
        }
        try {
            let data = [];
            try {
                // read existing blog
                const blogs = await fs.readFile(filePath, "utf-8");
                data = JSON.parse(blogs);
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                }
            }
            data.push({ ...body, id: rand });
            // write
            await fs.writeFile(filePath, JSON.stringify(data, null, 2));
            return res.status(201).json({ ...body, id: rand });
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    getPost(req: Request, res: Response) {
        res.status(201).json();
    }
}
