import React, { Children, FC } from 'react'
import Head from 'next/head'
import { ISeo } from './Meta.interface'
import { useRouter } from 'next/router'
import { siteName, titleMerge } from '@/config/seo.config'

// import logoImage from `@/assets/images/logo.svg`
import { onlyText } from '../string/clearText'

const Meta:FC<ISeo> = ({title,description,image,children}) => {

const {asPath}= useRouter()
const currentUrl =`${process.env.APP_URL}${asPath}`
const logoImage: string = require("@/assets/images/logo.svg").default;

return (
   <>
   <Head>
					<title itemProp='headline'>{titleMerge(title)}</title>
          {description ?(
      <>
      	<meta
						itemProp='description'
						name='description'
						content={onlyText(description, 152)}
					/>
          <link rel='canonical' href={currentUrl} />
					<meta property='og:locale' content='en' />
					<meta property='og:title' content={titleMerge(title)} />
					<meta property='og:url' content={currentUrl} />
					<meta property='og:image' content={image || logoImage} />
					<meta property='og:site_name' content={siteName} />
					<meta
						property='og:description'
						content={onlyText(description, 197)}
					/>
      </>
   ):<meta name={"robots`"} content="noindex, nofollow" />
   }
		</Head>
   {children}
   </>
  )
}

export default Meta