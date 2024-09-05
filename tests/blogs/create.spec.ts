import request from "supertest";
import app from "../../src/app";

describe("POST /posts/create", () => {
    describe("Given all fields", () => {
        it("should return 201 status code", async () => {
            const payload = {
                title: "Test Post",
                content: "This is a test post",
            };
            const response = await request(app)
                .post("/posts/create")
                .send(payload);
            expect(response.statusCode).toBe(201);
        });
        it("should contains an ID", async () => {
            const payload = {
                title: "Test Post",
                content: "This is a test post",
            };
            const response = await request(app)
                .post("/posts/create")
                .send(payload);
            expect(response?.body).toHaveProperty("id");
        });
    });

    describe("Missing fields", () => {
        it("should return 404 status code for missing the title field", async () => {
            const payload = {
                content: "This is a test post content only",
            };
            const response = await request(app)
                .post("/posts/create")
                .send(payload);
            expect(response.statusCode).toBe(404);
        });
        it("should return 404 status code for missing the content field", async () => {
            const payload = {
                title: "Test Post title only",
            };
            const response = await request(app)
                .post("/posts/create")
                .send(payload);
            expect(response.statusCode).toBe(404);
        });
    });
});
