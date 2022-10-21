import express from "express"
import { graphqlHTTP } from "express-graphql"
import { UserResolver } from "./resolvers/resolvers"
import { buildSchema } from "type-graphql"

async function main() {

    const schema = await buildSchema({
        resolvers: [UserResolver],
        emitSchemaFile: true
    })


    const app = express()

    app.use("/graphql", graphqlHTTP({
        schema: schema,
        graphiql: true
    }))

    app.listen(4000)
    console.log("connected")

}
main()