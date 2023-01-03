import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumnCannotBeNullableError, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

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

    //isbn is unique
    @Column('simple-array', { unique: true })
    isbns: string[];

    @Column()
    price: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    //soft delete
    @DeleteDateColumn()
    deletedAt: Date;
}


