import {Module} from '@nestjs/common'
import {UserService} from './user.service'
import {UserController} from './user.controller'
import {TypegooseModule} from 'nestjs-typegoose'
import {AuthService} from 'src/auth/auth.service'
import {ConfigModule} from '@nestjs/config'
import {UserModel} from './user.model'

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: UserModel,
        schemaOptions: {
          collection: 'User',
        },
      },
    ]),
    ConfigModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
