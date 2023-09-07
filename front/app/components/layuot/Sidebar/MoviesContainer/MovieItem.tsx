import { IMovie } from '@/shared/types/movies.types'
import React, { FC } from 'react'
import styles from './MovieList.module.scss'
import Link from 'next/link'
import { getGenreUrl, getMovieUrl } from '@/config/url.config'
import Image from 'next/image'
import { getGenresListEach } from '@/utils/movie/getGenresList'
import MaterialIcon from '@/components/ui/MaterialIcon'

const MovieItem:FC<{movie:IMovie}> = ({movie}) => {
  return (
    <div className={styles.item}>
        <Link href={getMovieUrl(movie.slug)}>
            <Image  src={movie.poster} alt={movie.title} draggable={false} width={65} height={97}/>
        </Link>
        <div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>
					<div className={styles.genres}>
						{movie.genres.map(({ slug, name, _id }, idx) => (
							<Link key={_id} href={getGenreUrl(slug)}>
								{getGenresListEach(idx, movie.genres.length, name)}
							</Link>
						))}
					</div>
				</div>
				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem