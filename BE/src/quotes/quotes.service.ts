import { Injectable } from '@nestjs/common';
import { quoteDTO } from './dto/quote-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quote } from './../entities/quoteEntity';

@Injectable()
export class QuotesService {
  constructor(
    @InjectRepository(Quote) private quoteRepository: Repository<Quote>,
  ) {}

  async createQuote(quote: quoteDTO): Promise<Quote> {
    const newQuote = this.quoteRepository.create(quote);
    return await this.quoteRepository.save(newQuote);
  }
}
