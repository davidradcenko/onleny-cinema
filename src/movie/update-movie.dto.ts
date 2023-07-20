import {IsArray, IsBoolean, IsNotEmpty, IsObject, IsString, MinLength} from 'class-validator'
import {Types} from 'mongoose'

export class Parameters {
  @IsString()
  year: number

  @IsString()
  duration: number

  @IsString()
  country: string
}

export class GenreIdsDto {
  @IsNotEmpty()
  @MinLength(24, {each: true})
  genreIds: Types.ObjectId[]
}

export class UpdateMovieDto {
  @IsString()
  poster: string

  @IsString()
  bigPoster: string

  @IsString()
  title: string

  @IsString()
  slug: string

  @IsObject()
  parameters?: Parameters

  @IsString()
  videoUrl: string

  // @IsArray()
  // genres: Types.ObjectId[]
  @IsArray()
  @IsString({each: true})
  genres: string[]

  @IsArray()
  @IsString({each: true})
  actors: string[]

  isSendTelegram?: boolean
}
