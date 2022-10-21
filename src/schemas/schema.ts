import { buildSchema } from "graphql"

export const schema = buildSchema(`
input UserInput { 
    name: String!
    age: Int!
}
type User {
    id: Int!
    name: String!
    age: Int!
}
type Mutation {
    createUser(input: UserInput): User
    updateUser(id: Int!, input: UserInput): User
}
type Query {
    getUser(id: Int!): User
    getUsers: [User]
    Hello: String!
}
`)