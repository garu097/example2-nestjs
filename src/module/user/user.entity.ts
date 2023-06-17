import { ReportsEntity } from './../reports/reports.entity';
import { AfterInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => ReportsEntity, (reports) => reports.user)
    reports: ReportsEntity[];

    @AfterInsert()
    logInsert() {
        console.log("user id was inserted :", this.id)
    }
}