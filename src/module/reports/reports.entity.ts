import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../user/user.entity";

@Entity({ name: 'reports' })
export class ReportsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    @Column()
    made: string;

    @Column()
    model: string;

    @Column({default: false})
    approved: boolean;

    @Column()
    year: number;

    @Column()
    lng: number;

    @Column()
    lat: number;

    @Column()
    mileage: number;

   @ManyToOne(() => UserEntity, (user) => user.reports)
   user: UserEntity
}