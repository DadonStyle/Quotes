import { quoteDTO } from './dto/quote-dto';
import { QuotesService } from './quotes.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}
  @Get() // endpoint: /quotes or /quotes?type=value
  findAll(@Query('type') type?: 'motivation' | 'normal') {
    return `this is the type ${type}`; // check how to transfer this function to an arrow function
  }
  // getHello(): string {
  //   return this.quotesService.getHelloQ();
  // }

  @Get(':id') // example with query
  findById(@Param('id') id: string) {
    return `find by ${id}`;
  }

  @Post()
  async createQuote(@Body() quote: quoteDTO) {
    const r = await this.quotesService.createQuote(quote);
    return r;
  }

  @Patch(':id')
  updateQuote(@Param('id') id: string, @Body() quote: quoteDTO) {
    return { id, ...quote };
  }

  @Delete(':id')
  deleteQuote(@Param('id') id: string) {
    return `deleted ${id}`;
  }
}
