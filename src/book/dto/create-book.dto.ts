export class CreateBookDto {
    name: string;
    author: string;
    category: string;
    tag: string[];
    isbns: string[];
    price: number;
}
