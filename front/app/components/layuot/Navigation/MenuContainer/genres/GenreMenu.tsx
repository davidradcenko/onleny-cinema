import PropTypes from 'prop-types'
import React, { FC } from 'react'
import { usePopularGenres } from './usePopularGenres'
import Menu from '../Menu'
import SkeletonLoader from '@/ui/heading/SkeletonLoader'

const GenreMenu:FC = ()=>{

const {isLoading,data}=usePopularGenres()

    return  isLoading?(
        <div className='mx-11 mb-6'> <SkeletonLoader count={5}  className='h-7 mt-6'/> </div>
    ):(
        <Menu menu={{title:'Popular genres',items: data || []}}/>
    )
}

export default GenreMenu