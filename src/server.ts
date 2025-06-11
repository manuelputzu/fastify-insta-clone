import Fastify from 'fastify';
import healthRoutes from './modules/health/health.routes.ts';
import postRoutes from "./modules/posts/posts.routes";
import path from 'path';

const app = Fastify();

// Alle Module unter /api registrieren
app.register(healthRoutes, { prefix: '/api' });
app.register(postRoutes, { prefix: '/api' });

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server läuft unter ${address}`);
});

