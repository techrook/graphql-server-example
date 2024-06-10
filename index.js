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
        },
        review(_, args){
            return _db.reviews.find((review) => review.id === args.id)
        },
        game(_, args){
            return _db.games.find((game) => game.id === args.id)
        },
        author(_, args){
            return _db.authors.find((author) => author.id === args.id)
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