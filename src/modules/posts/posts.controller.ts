import { FastifyRequest, FastifyReply } from "fastify";
import { getAllPosts } from "./posts.service";

export async function fetchPosts(req: FastifyRequest, reply: FastifyReply) {
  const posts = await getAllPosts();
  return reply.send(posts);
}

