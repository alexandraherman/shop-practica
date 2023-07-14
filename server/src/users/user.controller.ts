import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.entity';
import { get } from 'http';

@Controller('/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/register')
  async register(
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('email') email: string,
    @Body('password') password: string
  ){
    // return this.userService.create({
    //   Name:name,
    //   age,
    //   email,
    //   password
    // });
  }
  @Get()
  async findAll(): Promise<User[]> {
    console.log("alo")
    return this.userService.findAll();
  }
  @Post('/login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string
  ) {
    return await this.userService.findOne(email);
  }


}
