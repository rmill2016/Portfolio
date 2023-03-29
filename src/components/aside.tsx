import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { menuExpanded, menuLinks, menuStagger } from '@/helpers/transitions'
import { HomepageRecord } from '@/gql/graphql'

type Links = {
  name: string
  to: string
  id: number
}[]

const links: Links = [
  { name: 'Home', to: '/', id: 1 },
  { name: 'Work', to: '/work', id: 2 },
  { name: 'Services', to: '/services', id: 3 },
  { name: 'Contact', to: '/contact', id: 4 },
]

type T = {
  expanded: boolean
  homepage?: HomepageRecord
}

const aside = ({ expanded, homepage }: T) => {
  const cvlink = homepage?.links?.filter((e) =>
    e?.title?.toLowerCase().includes('cv')
  )[0]
  return (
    <motion.aside
      className="fixed top-0 right-0 z-20 w-full h-full origin-top-right bg-accent"
      variants={menuExpanded}
      initial="hide"
      animate={expanded && 'show'}
      exit="exit"
    >
      <motion.ul
        className="relative flex flex-col items-center justify-center h-full gap-8 p-0 m-0 list-none"
        variants={menuStagger}
        initial="hide"
        animate={expanded && 'show'}
        exit="exit"
      >
        {links.map((link) => (
          <Link key={link.id} href={link.to}>
            <motion.li variants={menuLinks} className="text-2xl font-medium">
              {link.name}
            </motion.li>
          </Link>
        ))}
        <motion.a
          href={cvlink?.to!}
          download
          initial={{ opacity: 0, y: -20 }}
          animate={
            expanded && { opacity: 1, y: 20, transition: { delay: 1.5 } }
          }
          exit={{ opacity: 0, y: -20 }}
        >
          <button className="btn btn-primary text-accent">
            {cvlink?.title}
          </button>
        </motion.a>
      </motion.ul>
    </motion.aside>
  )
}

export default aside
