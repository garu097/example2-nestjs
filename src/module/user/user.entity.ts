import { ReportsEntity } from './../reports/reports.entity';
import { AfterInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from 'src/common/constant/roles.constant';

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

    @Column()
    address: string;

    @Column({ type: "enum", enum: [Role.Admin, Role.Normal], default: Role.Normal })
    role: Role;

    @OneToMany(() => ReportsEntity, (reports) => reports.user)
    reports: ReportsEntity[];

    @AfterInsert()
    logInsert() {
        console.log("user id was inserted :", this.id)
    }
}