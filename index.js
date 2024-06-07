import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//db
import _db from './_db.js';

//types
import { typeDefs } from './schema.js';

const resolvers = {
    Query: {
        games(){
            return _db.games
        },
        reviews (){
            return _db.reviews
        },
        authors (){
            return _db.authors
        }
    }
}
// server setup

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen:{ port: 4000}
})

console.log(`Server ready at port `,4000)