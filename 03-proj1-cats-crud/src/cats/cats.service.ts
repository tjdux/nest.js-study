import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CatRequestDTO } from 'src/cats/dto/cats.request.dto';
import { Cat } from './cats.schema';
import { Model } from 'mongoose';
import bcrypt from 'bcrypt';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  async signUp(body: CatRequestDTO) {
    const { email, name, password } = body;

    const doesCatExist = await this.catModel.exists({ email });

    if (doesCatExist) {
      throw new UnauthorizedException('해당하는 고양이는 이미 존재합니다.');
    }

    const hasedPassword = await bcrypt.hash(password, 10);

    const cat = await this.catModel.create({
      email,
      name,
      password: hasedPassword,
    });

    return cat.readOnlyData;
  }
}
