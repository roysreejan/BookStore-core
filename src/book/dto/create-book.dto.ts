export class CreateBookDto {
    name: string;
    author: string;
    category: string;
    tag: string[];
    isbns: string[];
    price: number;
    cretedAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
}
