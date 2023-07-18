import {Module} from '@nestjs/common'
import {MovieController} from './movie.controller'
import {TypegooseModule} from 'nestjs-typegoose'
import {MovieModel} from './movie.model'
import {MovieService} from './movie.service'

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: MovieModel,
        schemaOptions: {
          collection: 'Movie',
        },
      },
    ]),
  ],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
