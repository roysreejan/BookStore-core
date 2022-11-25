import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';
import { Book } from './book/entities/book.entity';

dotenv.config();

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Book],
    synchronize: process.env.ENV === 'DEV',
    autoLoadEntities: true,
  }), BookModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
