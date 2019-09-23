import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { ApolloServer, gql } from 'apollo-server-koa';
import { createConnection } from "typeorm";
import routes from './routes';

const app = new Koa();

/* setup middlewares */
app.use(bodyParser());
app.use(routes.routes()).use(routes.allowedMethods());

/* integrate GraphQL */
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello World~~'
    }
};

const server = new ApolloServer({ typeDefs, resolvers });


server.applyMiddleware({ app });

/**
 * inital tasks exceopt Koa middlewares
 */
async function initialize() {
    try {
        await createConnection();
        console.log('Postgres RDBMS Connection!!');
    } catch (error) {
        console.log(error);
    }
}

initialize();

export default app;
