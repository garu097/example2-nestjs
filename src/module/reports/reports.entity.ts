import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    year: number;

    @Column()
    lng: number;

    @Column()
    lat: number;

    @Column()
    mileage: number;
}