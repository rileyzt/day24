const request = require("supertest");

const app = require("../app");



describe("GET /api/courses", () => {

  test(
    "Should return courses message",
    async () => {

      const res =await request(app)
          .get("/api/courses");

      expect(res.statusCode)
        .toBe(200);

      expect(res.body.message)
        .toBe(
          "Courses API Working"
        );

    }
  );

});



describe("GET /api/users", () => {

  test(
    "Should return users message",
    async () => {

      const res =
        await request(app)
          .get("/api/users");

      expect(res.statusCode)
        .toBe(200);

      expect(res.body.message)
        .toBe(
          "Users API Working"
        );

    }
  );

});