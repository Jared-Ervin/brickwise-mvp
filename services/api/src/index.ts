import Fastify from 'fastify';
import mercurius from 'mercurius';
import { typeDefs, resolvers } from './schema';

const app = Fastify({ logger: true });

app.register(mercurius, {
  schema: typeDefs,
  resolvers,
  graphiql: true,
});

const port = Number(process.env.PORT || 4000);
app
  .listen({ port, host: '0.0.0.0' })
  .then(() => app.log.info(`API listening on http://localhost:${port}/graphiql`))
  .catch((err) => {
    app.log.error(err);
    process.exit(1);
  });

