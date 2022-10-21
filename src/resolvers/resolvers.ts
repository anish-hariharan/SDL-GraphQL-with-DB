import { User } from "../entity/Users"
import { Query, Resolver, Mutation, Arg } from "type-graphql"
import { UserInput } from "../entity/inputUser"
import { AppData } from "../datasource/datasource"


@Resolver(() => User)

export class UserResolver {
    @Query(() => String)
    Hello() {
        return "Hii there"
    }

    @Mutation(() => User)
    async createUser(@Arg("input") input: UserInput): Promise<User>{
        const user = AppData.getRepository(User)
        const data = user.create(input)
        user.save(data)
        return data
    }

    @Query(() => [User])
    async getUsers(): Promise<User[]>{
        const user = AppData.getRepository(User)
        const users = user.find()
        return users
    }

    @Query(() => User)
    async getUser(@Arg('id') id: number){
        const user = AppData.getRepository(User)
        const oneUser = await user.findOne({where:{id}})
        return oneUser
    }
}