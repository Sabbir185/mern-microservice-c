import { Request, Response } from "express";
import fs from "fs/promises";
import { numberGen } from "../utils/helper";

type TBlog = {
    title: string;
    content: string;
    id: number;
};

export class BlogController {
    async create(req: Request, res: Response) {
        const { body } = req;
        const filePath = process.cwd() + "/public/blogs.txt";
        const rand = numberGen(10000);
        if (!body?.title || !body?.content) {
            return res.status(404).send();
        }
        const blogTitle = body?.title?.length < 5 || body?.title?.length > 20;
        const blogContent =
            body?.content?.length < 10 || body?.content?.length > 30;
        if (blogTitle || blogContent) {
            return res.status(400).send();
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

    async getPost(req: Request, res: Response) {
        const { id } = req.params;
        const filePath = process.cwd() + "/public/blogs.txt";
        try {
            // read existing blog
            const blogs = await fs.readFile(filePath, "utf-8");
            const data = JSON.parse(blogs);
            const blog = data.find((b: TBlog) => b.id.toString() === id);
            if (!blog) {
                return res.status(404).send();
            }
            return res.status(200).json({ ...blog });
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
        console.log({ id });

        res.status(201).json();
    }
}
