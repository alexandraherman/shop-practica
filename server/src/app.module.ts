import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { ProductsModule } from './products/products.module';
import {ProductsController} from "./products/products.controller"
import { Product } from './products/products.entity';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/user.controller';
import { UsersService } from './users/user.service';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [ 
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'mybook',
    entities: [User, Product],
    synchronize: true,
    }),
    ProductsModule,
    UsersModule,
    AuthModule
  ],
  controllers: [AppController,ProductsController,UsersController],
  providers: [AppService,UsersService],
  
})
export class AppModule {}
