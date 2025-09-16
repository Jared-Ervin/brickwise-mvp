import Fastify from 'fastify';
import mercurius from 'mercurius';
import { typeDefs as schemaSDL } from '@brickwise/gql-schema';
import { resolvers } from './schema';
import cors from '@fastify/cors';

const app = Fastify({ logger: true });

// Enable CORS for local dev (web:5173, admin:5174)
app.register(cors, {
  origin: (origin, cb) => {
    // Allow no-origin (curl/postman) and local dev hosts
    if (!origin) return cb(null, true);
    try {
      const url = new URL(origin);
      const allowed =
        (url.hostname === 'localhost' || url.hostname === '127.0.0.1') &&
        (url.port === '5173' || url.port === '5174');
      cb(null, allowed);
    } catch {
      cb(null, false);
    }
  },
  credentials: false,
});

app.register(mercurius, {
  schema: schemaSDL,
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
