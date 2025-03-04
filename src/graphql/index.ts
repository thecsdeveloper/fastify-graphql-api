import mercurius from 'mercurius';
import { schema } from '../graphql/schema';
import { FastifyInstance } from 'fastify';

export default async function graphqlPlugin(app: FastifyInstance) {
  app.register(mercurius, {
    schema,
    graphiql: true,
    path: '/graphql'
  });
}
