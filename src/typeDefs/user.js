import { gql } from 'apollo-server-express'

//USER SCHEMA
export default gql `
    extend type Query {
         me: String!
        }
    extend type Mutation {
         user(email: String, passord: String): User
       }
        type User {
        id: ID!
        email: String!
        username: String!
        name: String!
        createdAt: String
        updatedAt: String
        }

`