import Fastify from 'fastify';
import mercurius from 'mercurius';
import healthRoute from './src/routes/health'; // Health check
import graphqlSchema from './src/graphql/graphql'; // Import schema & resolvers

const app = Fastify({ logger: true });

// ✅ Register GraphQL Plugin with External Schema & Resolvers
app.register(mercurius, {
  schema: graphqlSchema.schema,
  resolvers: graphqlSchema.resolvers,
  graphiql: true,
  path: '/graphql'
});

// ✅ Register Health Check Route
app.register(healthRoute);

// Start Server
const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log("🚀 GraphQL running at http://localhost:3000/graphql");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
