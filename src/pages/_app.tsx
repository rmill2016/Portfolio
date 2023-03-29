import { useEffect } from 'react'
import '@/styles/styles.css'
import '../../node_modules/swiper/swiper-bundle.min.css'
import type { AppProps } from 'next/app'
import * as _ from 'lodash'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { AnimatePresence } from 'framer-motion'
import { useRouter, NextRouter } from 'next/router'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'

const httpLink = createHttpLink({
  uri: 'https://graphql.datocms.com/',
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_READONLY_TOKEN}`,
  },
})

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter() as NextRouter

  useEffect(() => {
    const vh = window.innerHeight
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener(
      'resize',
      _.debounce(() => {
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      }, 250)
    )
  }, [])

  return (
    <ApolloProvider client={client}>
      <AnimatePresence mode="wait">
        <DefaultSeo {...SEO} />
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </ApolloProvider>
  )
}
