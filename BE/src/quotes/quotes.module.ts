import { Module } from '@nestjs/common';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from 'src/entities/quoteEntity';

@Module({
  imports: [TypeOrmModule.forFeature([Quote])],
  controllers: [QuotesController],
  providers: [QuotesService],
})
export class QuotesModule {}
