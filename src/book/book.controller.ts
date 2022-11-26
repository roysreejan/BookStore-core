import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async createBook(@Body() createBookDto: CreateBookDto) {
    return await this.bookService.createBook(createBookDto);
  }

  @Get()
  async getAllBook() {
    return await this.bookService.getAllBook();
  }

  @Get('category/:category')
  async getBookByCategory(@Param('category') category: string){
    return await this.bookService.getBookByCategory(category);
  }

  @Get('tag/:tag')
  async getBookByTag(@Param('tag') tag: string){
    return await this.bookService.getBookByTag(tag);
  }

  @Get('author/:author')
  async getBookByAuthor(@Param('author') author: string){
    return await this.bookService.getBookByAuthor(author);
  }

  @Get('isbn/:isbn')
  async getBookByIsbn(@Param('isbn') isbn: string){
    return await this.bookService.getBookByIsbn(isbn);
  }

  @Get(':id')
  async getBookById(@Param('id') id: string){
    return await this.bookService.getBookById(id);
  }

  @Patch(':id')
  async updateBookById(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return await this.bookService.updateBookById(id, updateBookDto);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string) {
    return await this.bookService.deleteBookById(id);
  }
}
