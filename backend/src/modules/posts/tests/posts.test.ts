import "../../../core/database/init";
import db from "../../../core/database/client"; // <--- hinzugefügt

// Seed-Daten
db.exec(`
  INSERT INTO posts (imageUrl, caption, authorId)
  VALUES 
    ('https://picsum.photos/200', 'First post!', 1),
    ('https://picsum.photos/300', 'Hello InstaClone!', 1);
`);


import { describe, it, expect } from "bun:test";
import Fastify from "fastify";
import postRoutes from "../posts.routes";

// Integration test
describe("GET /api/posts", () => {
  const app = Fastify();

  // direkt registrieren (kein beforeAll)
  app.register(postRoutes, { prefix: "/api" });

  it("should return an array of posts", async () => {
    // Wait for Fastify to finish setup
    await app.ready();

    const response = await app.inject({
      method: "GET",
      url: "/api/posts"
    });

    expect(response.statusCode).toBe(200);

    const body = JSON.parse(response.body);
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0); // Seeded posts
  });
});

