import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"
import { Field, Int, ObjectType } from "type-graphql"

@ObjectType()
@Entity('users-data')
export class User {
    
    @Field()
    @PrimaryGeneratedColumn()
    id!: number 

    @Field()
    @Column({
        nullable: true,
    })
    name!: string

    @Field()
    @Column({
        nullable: true,
    })
    age!: number 
}