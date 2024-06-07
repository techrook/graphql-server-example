export const typeDefs = `#graphql
    type Game {
        id:ID!
        title: String!
        platform:[string!]!
    }
    type Review {
        id:ID!
        ratings: Int!
        content: String!
    }
    type Author{
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query {
        reviews:[Review]
        games:[game]
        author: [Author]
    }

`