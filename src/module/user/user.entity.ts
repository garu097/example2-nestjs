import { AfterInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    name: string;

    @AfterInsert()
    logInsert() {
        console.log("user id was inserted :", this.id)
    }
}