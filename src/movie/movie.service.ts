import {Injectable, NotFoundException} from '@nestjs/common'
import {InjectModel} from 'nestjs-typegoose'

import {UpdateMovieDto} from './update-movie.dto'
import {ModelType} from '@typegoose/typegoose/lib/types'
import {Types} from 'mongoose'
import {MovieModel} from './movie.model'

@Injectable()
export class MovieService {
  constructor(@InjectModel(MovieModel) private readonly MovieModel: ModelType<MovieModel>) {}

  async getAll(searchTerm?: string) {
    let option = {
      $or: [
        {
          title: new RegExp(searchTerm, 'i'),
        },
      ],
    }
    return this.MovieModel.find(option)
      .select('-updateAt -_v')
      .sort({createdAt: 'desc'})
      .populate('actors genres')
      .exec()
  }

  async bySlug(slug: string) {
    const doc = await this.MovieModel.findOne({slug}).populate('actors genres').exec()
    if (!doc) throw new NotFoundException('Movies not found')
    return doc
  }

  async byActor(actorId: Types.ObjectId) {
    const doc = await this.MovieModel.find({actors: actorId}).exec()
    if (!doc) throw new NotFoundException('Movies not found')
    return doc
  }

  async byGenres(genresIds: Types.ObjectId[]) {
    console.log('NoN nown ' + genresIds)
    // const docs = await this.MovieModel.find({genres: {$in: genresIds}}).exec()
    try {
      const docs = await this.MovieModel.find({genres: {$in: genresIds}}).exec()
      console.log('Ansver  ' + docs)
      if (!docs) throw new NotFoundException('Movies not found')
      return docs
    } catch (error) {
      throw new NotFoundException(`error ids pool ${error}`)
    }
  }

  async updateCountOpened(slug: string) {
    const updateDoc = await this.MovieModel.findOneAndUpdate(
      {slug},
      {
        $inc: {countOpened: 1},
      },
      {
        new: true,
      }
    ).exec()
    if (!updateDoc) throw new NotFoundException('Movie not fount')
    return updateDoc
  }

  async getMostPopular() {
    return await this.MovieModel.find({countOpened: {$gt: 0}})
      .sort({countOpened: -1})
      .populate('genres')
      .exec()
  }

  //   admin
  async byId(_id: string) {
    const doc = await this.MovieModel.findById(_id)
    if (!doc) throw new NotFoundException('Movie not found')
    return doc
  }

  async create() {
    const defaultValue: UpdateMovieDto = {
      bigPoster: '',
      actors: [],
      genres: [],
      poster: '',
      title: '',
      videoUrl: '',
      slug: '',
    }
    const doc = await this.MovieModel.create(defaultValue)
    return doc._id
  }

  async update(_id: string, dto: UpdateMovieDto) {
    const updateDoc = await this.MovieModel.findByIdAndUpdate(_id, dto, {
      new: true,
    }).exec()
    if (!updateDoc) throw new NotFoundException('Movie not fount')
    return updateDoc
  }

  async delete(id: string) {
    const deleteDoc = await this.MovieModel.findByIdAndDelete(id).exec()
    if (!deleteDoc) throw new NotFoundException('Movie not fount')
    return deleteDoc
  }
}
