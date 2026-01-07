import { CatsService } from './cats/cats.service';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {}

  // localhost:8000/cats/hello
  @Get('hello')
  getHello(): string {
    return this.catsService.hiCatServiceProduct();
    // return this.appService.getHello();
  }
}
