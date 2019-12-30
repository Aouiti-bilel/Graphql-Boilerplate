import { gql } from 'apollo-server-express'

//USER SCHEMA
export default gql `
    extend type Query {
         me: User!  @auth
         user(email: String!, password: String!): User! @auth
        }
    extend type Mutation {
        signUp(email: String, username: String!, name: String!, password: String!): UsetInputType!
        signIn(email: String, password: String!): UsetInputType!
        }
     
        type User {
          id: ID!
          email: String!
          username: String!
          name: String!
          createdAt: String
          updatedAt: String
         }
        type UsetInputType {
          user: User!
          token: String!
        }

`