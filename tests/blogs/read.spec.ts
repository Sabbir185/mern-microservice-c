import request from "supertest";
import app from "../../src/app";

describe("GET /posts/:id", () => {
    describe("Existing Post", () => {
        it("should retun correct title and content", async () => {
            const payload = {
                title: "Test Post",
                content: "This is a test post",
            };
            const response = await request(app)
                .post("/posts/create")
                .send(payload);
            const res = await request(app).get(`/posts/${response?.body?.id}`);
            expect(response.body).toEqual(res.body);
        });
    });

    describe("Non-Existent Post", () => {
        it("should return 404 status code", async () => {
            const id = 12;
            const resonse = await request(app).get(`/posts/${id}`);
            expect(resonse.statusCode).toBe(404);
        });
    });

    describe("Validation Tests", () => {
        it("should not too short or too long", async () => {
            const payload = {
                title: "Test ",
                content:
                    "This is a test post content for the blog title. This is long content more than 30 letters.",
            };
            const response = await request(app)
                .post("/posts/create")
                .send(payload);
            expect(response.statusCode).toBe(400);
        });
    });
});
