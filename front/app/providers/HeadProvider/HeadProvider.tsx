import React, { FC } from 'react'
import  NextProgressBar from 'nextjs-progressbar'
import Favicons from './FavIcons'
import Head from 'next/head'
import { accentColor } from '@/config/constants'

interface Props {
    children: React.ReactNode
}

 const HeadProvider:FC<Props> = ({children}) => {
  return (
    <>
    <>
			<NextProgressBar
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>

				<Favicons />

				<meta name="theme-color" content={'#181B1E'} />
				<meta name="msapplication-navbutton-color" content={'#181B1E'} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#181B1E'}
				/>
			</Head>
			{children}
		</>
    </>
  )
}

export default HeadProvider