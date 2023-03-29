import React, { useEffect, useState } from 'react'
import { useRouter, NextRouter } from 'next/router'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import { RiCloseFill } from 'react-icons/ri'
import Aside from '@/components/aside'
import { AnimatePresence } from 'framer-motion'
import { HeaderRecord, HomepageRecord } from '@/graphql/graphql'
import Link from 'next/link'

type HeaderProps = {
  header: HeaderRecord
  homepage: HomepageRecord
}

const Header = ({ header, homepage }: HeaderProps) => {
  const router = useRouter() as NextRouter
  const [expanded, setExpanded] = useState<boolean>(false)

  const cvlink = homepage?.links.filter((e) =>
    e?.title?.toLowerCase().includes('cv')
  )[0]
  const worklink = homepage?.links.filter((e) =>
    e?.title?.toLowerCase().includes('work')
  )[0]

  const handleExpanded = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {
    if (expanded) {
      document.body.style.position = 'fixed'
    } else {
      document.body.style.position = 'inherit'
    }
  }, [expanded])
  return (
    <>
      <header className="w-full h-24">
        <nav className="relative z-auto flex items-center justify-between w-full h-full md:grid md:grid-cols-3">
          <div className="absolute top-0 left-0 right-0 w-full rounded-b-full h-60 md:h-60 lg:h-80 bg-accent -z-10 brightness-75 blur-2xl"></div>
          <Link href="/" className="mr-auto">
            <Image
              src={header?.logo?.url!}
              alt={header?.logo?.alt!}
              width={200}
              height={60}
              priority
              className="w-40 h-auto md:w-48 lg:w-52"
            />
          </Link>
          <div className="relative z-30 md:hidden">
            {expanded ? (
              <RiCloseFill
                className="w-10 h-auto fill-primary"
                onClick={handleExpanded}
              />
            ) : (
              <FaBars
                className="w-8 h-auto fill-primary"
                onClick={handleExpanded}
              />
            )}
          </div>
          {router.asPath !== '/' ? (
            <Link
              href="/"
              className="hidden col-span-3 col-start-2 md:flex md:justify-end"
            >
              <div className="flex items-center justify-end gap-2">
                <Image
                  src={header?.backarrow?.url!}
                  alt={header?.backarrow?.alt!}
                  width={50}
                  height={50}
                />
                <h3>{header?.goback}</h3>
              </div>
            </Link>
          ) : (
            <>
              <a href={cvlink?.to!} className="hidden mx-auto md:inline">
                <button className="gap-4 btn btn-accent text-primary">
                  {cvlink?.title}
                  <Image
                    src={cvlink?.icon?.url!}
                    alt={cvlink?.icon?.alt!}
                    width={20}
                    height={20}
                    className="w-auto"
                  />
                </button>
              </a>
              <a
                onClick={() => {
                  if (worklink) {
                    router.push(`${worklink?.to}`)
                  }
                }}
                className="hidden ml-auto blue-link-l-r md:inline-flex"
              >
                <h4>{worklink?.title}</h4>
              </a>
            </>
          )}
        </nav>
      </header>
      <AnimatePresence>
        {expanded && <Aside expanded={expanded} homepage={homepage} />}
      </AnimatePresence>
    </>
  )
}

export default Header
