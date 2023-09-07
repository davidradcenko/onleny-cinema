import React, { FC } from 'react'
import { IMoviesList } from './movies-list.interface'

import styles from './MovieList.module.scss'
import MovieItem from './MovieItem'
import Link from 'next/link'

const MovieList: FC<IMoviesList> = ({link,title,movies}) => {
  return (
    <div className={styles.list}>
      <div className={styles.heading}>
        {title}
      </div>
      {movies.map(movie =>  <MovieItem movie={movie} key={movie._id}/>)}
      <Link className={styles.button} href={link}>
        See more
      </Link>
    </div>
  )
}

export default MovieList