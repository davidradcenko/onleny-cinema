import {Module} from '@nestjs/common'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {TypegooseModule} from 'nestjs-typegoose'
import {getMongoDbConfig} from './config/mongo.config'
import {AuthModule} from './auth/auth.module'
import {UserModule} from './user/user.module'
import {GenreModule} from './genre/genre.module'
import {FileModule} from './file/file.module'
import {ActorModule} from './actor/actor.module'
import {MovieService} from './movie/movie.service'
import {MovieModule} from './movie/movie.module'
import { RatingModule } from './rating/rating.module';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoDbConfig,
    }),
    UserModule,
    AuthModule,
    GenreModule,
    FileModule,
    ActorModule,
    MovieModule,
    RatingModule,
    TelegramModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
