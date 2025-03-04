import { FastifyInstance } from 'fastify';

export default async function healthRoute(app: FastifyInstance) {
  app.get('/healthz', async () => {
    return {
      status: "ok"
    };
  });
  
}
