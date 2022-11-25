import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ unique: true })
    name: string;
    
    @Column()
    author: string;

    @Column()
    category: string;

    @Column('simple-array')
    tag: string[];

    @Column('simple-array')
    isbns: string[];

    @Column()
    price: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    //soft delete
    @Column({ default: false })
    isDeleted: boolean;
}


