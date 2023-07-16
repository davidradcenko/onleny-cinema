import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModule } from 'src/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModel } from 'src/user/user.model';
import { JwtModule } from '@nestjs/jwt';
import { getJWTConfig } from 'src/config/jwt.config';
import { JwtStrategy } from './strategies/jwt.stratedies';

@Module({
  imports:[
    TypegooseModule.forFeature([{
      typegooseClass:UserModel,
      schemaOptions:{
        collection:'User',
      },
    }]),
    ConfigModule,
    JwtModule.registerAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:getJWTConfig
    })
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
  
 
})
export class AuthModule {}