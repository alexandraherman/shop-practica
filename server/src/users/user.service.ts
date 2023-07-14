import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  async findOne(email:string): Promise<User> {
    return this.userRepository.findOne({ where: { email} });
  }
  async create(data: Partial<User>) {
    const users = this.userRepository.create(data);
    return this.userRepository.save(users);
  }
  private readonly user = [
    {
      id: 1,
      email: 'ali@gmail.com',
      password: 'ali',
    },
    {
      id: 2,
      email: 'maria',
      password: 'guess',
    },
  ];

  // async findOne(email:string): Promise<User> {
  //    return this.userRepository.findOne({ where: { email} });
  // }
}
