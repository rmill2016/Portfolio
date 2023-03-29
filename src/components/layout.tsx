import React from 'react'
import Header from '@/components/header'
import { motion } from 'framer-motion'
import { pageTransition } from '@/helpers/transitions'
import { HeaderRecord, HomepageRecord } from '@/gql/graphql'

type Props = {
  children: React.ReactNode
  header: HeaderRecord
  homepage: HomepageRecord
}

function Layout({ children, header, homepage }: Props) {
  return (
    <>
      <motion.main variants={pageTransition} initial="show" exit="exit">
        <Header header={header} homepage={homepage} />
        {children}
      </motion.main>
    </>
  )
}

export default Layout
