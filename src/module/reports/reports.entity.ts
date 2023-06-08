import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'reports' })
export class ReportsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;
}