import { DataSource } from "typeorm"
import "reflect-metadata"
import { User } from "../entity/Users"
import * as dotenv from "dotenv"

dotenv.config();

export const AppData = new DataSource ({
        type: "mysql",
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_DATABASE,
        synchronize: true,
        entities: [User],
        insecureAuth : true
    })

AppData.initialize()
    .then(() => console.log("connected with db"))
    .catch((err) => console.log(err))