import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';
import { Book } from './book/entities/book.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,}), 
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: ( ConfigService: ConfigService) => ({
      type: 'postgres',
      host: ConfigService.get('POSTGRES_DB_HOST'),
      port: ConfigService.get('POSTGRES_DB_PORT'),
      username: ConfigService.get('POSTGRES_USER'),
      password: ConfigService.get('POSTGRES_PASSWORD'),
      database: ConfigService.get('POSTGRES_DB'),
      entities: [Book],
      synchronize: process.env.ENV === 'DEV',
      autoLoadEntities: true,
    }),
    inject: [ConfigService],
  }), 
  BookModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
