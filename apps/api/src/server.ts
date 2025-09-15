import Fastify from "fastify";
import mercurius from "mercurius";

const app = Fastify( {logger: true});

const schema = `
type Query {
    ping: String!
}`;

const resolvers = {
    Query: {
        ping: () => "pong"
    }
};

app.register(mercurius, {
    schema,
    resolvers,
    graphiql: true,
    path: "/graphql",
    ide: true
});

app.get("/", async () => ({ message: "Brickwise API is running" }));
app.get("/healthz", async () => ({ ok: true }));

const port = Number(process.env.PORT ?? 4000);
app.listen({ port, host: "0.0.0.0" }).then(() => {
  app.log.info(`api up on :${port}`);
});