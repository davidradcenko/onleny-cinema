import React, { FC } from 'react'
import Skeleton, {SkeletonProps} from 'react-loading-skeleton'
import cn from 'classnames'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader:FC<SkeletonProps> = ({className,...rest}) => {
  return (
    <Skeleton {...rest} baseColor='#1F2125' highlightColor='#292A2E' className={cn('rounded-lg',className)}></Skeleton>
  )
}

export default SkeletonLoader