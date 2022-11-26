import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  //inject book repository
  constructor(
    @InjectRepository(Book) 
    private bookRepository: Repository<Book>
  ){}

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    const book = new Book();
    book.name = createBookDto.name;
    book.author = createBookDto.author;
    book.category = createBookDto.category;
    book.tag = createBookDto.tag;
    book.isbns = createBookDto.isbns;
    book.price = createBookDto.price;
    return await this.bookRepository.save(book);
  }

  async getAllBook(){
    const book = await this.bookRepository.find();
    return book;
  }

  async getBookByCategory(category: string){
    const book = await this.bookRepository.find({where: {category}});
    return book;
  }

  async getBookByTag(tag: string){
    const book = await this.bookRepository.find({where: {tag}});
    return book;
  }

  async getBookByAuthor(author: string){
    const book = await this.bookRepository.find({where: {author}});
    return book;
  }

  async getBookByIsbn(isbn: string){
    const book = await this.bookRepository.find({where: {isbns: isbn}});
    return book;
  }

  async getBookById(id: string){
    const book = await this.bookRepository.findOne({where: {id: id}});
    return book;
  }

  async updateBookById(id: string, updateBookDto: UpdateBookDto) {
    const book = await this.bookRepository.findOne({ where: {id: id}});
    book.name = updateBookDto.name;
    book.author = updateBookDto.author;
    book.category = updateBookDto.category;
    book.tag = updateBookDto.tag;
    book.isbns = updateBookDto.isbns;
    book.price = updateBookDto.price;
    // book.updatedAt = updateBookDto.updatedAt;
    return this.bookRepository.save(book);
  }

  async deleteBookById(id: string) {
    const book = await this.bookRepository.findOne({ where: {id: id}});
    return this.bookRepository.save(book);
  }
}
