import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useCycle } from 'framer-motion'

const links = [
  { name: 'Home', to: '/', id: 1 },
  { name: 'About', to: '#about', id: 2 },
  { name: 'Services', to: '#services', id: 3 },
  { name: 'Past Works', to: '#work', id: 4 },
]

const linkVariants = {
  closed: {
    opacity: 0,
    y: 20,
  },
  open: {
    opacity: 1,
    y: 0,
  },
}

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      staggerDirection: 1,
    },
  },
}

const Header = () => {
  const [open, cycleOpen] = useCycle(false, true)
  const headerRef = useRef()
  const headerButtonRef = useRef()
  const desktopLinks = useRef()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else document.body.style.overflow = 'visible'
  }, [open])

  useEffect(() => {
    let lightSections = document.querySelectorAll('section.bg-white')

    const { top, height } = headerRef.current.getBoundingClientRect()

    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          let inverted = false
          if (entry.isIntersecting) {
            inverted = true
          }
          if (inverted) {
            desktopLinks.current.classList.remove('text-white')
            desktopLinks.current.classList.add('text-black')
            headerButtonRef.current.classList.remove('text-white')
            headerButtonRef.current.classList.add('text-black')
            setIsDark(false)
          } else {
            desktopLinks.current.classList.remove('text-black')
            desktopLinks.current.classList.add('text-white')
            headerButtonRef.current.classList.remove('text-black')
            headerButtonRef.current.classList.add('text-white')
            setIsDark(true)
          }
        })
      },
      {
        root: document,
        rootMargin: `-${top + 1}px 0px -${window.innerHeight - top - height}px 0px`,
      },
    )

    lightSections.forEach((section) => observer.observe(section))
  }, [])

  return (
    <>
      <div className="w-full h-screen fixed bg-transparent">
        <header className="w-full h-[80px] bg-transparent fixed top-0 backdrop-blur-sm z-10" ref={headerRef}>
          <nav className="flex justify-between items-center w-full h-full lg:hidden">
            <div className="w-fit h-full">
              <img
                src={isDark ? 'assets/logo-light.svg' : 'assets/logo-dark.svg'}
                alt="logo"
                className="aspect-video w-fit h-full"
              />
            </div>
            <div className="w-8">
              <button onClick={cycleOpen}>
                {open ? <img src="assets/icon-close.svg" alt="close" /> : <img src="assets/icon-bars.svg" alt="menu" />}
              </button>
            </div>
          </nav>
          <nav className="hidden lg:grid grid-flow-col grid-cols-[200px_1fr_200px]">
            <div className="w-fit h-full">
              <img
                src={isDark ? 'assets/logo-light.svg' : 'assets/logo-dark.svg'}
                alt="logo"
                className="aspect-video h-full"
              />
            </div>
            <ul className="list-none inline-flex justify-center items-center gap-8 pl-4 text-white" ref={desktopLinks}>
              {links.map(({ name, to, id }) => (
                <a key={id} href={to} variants={linkVariants}>
                  <li className="link-t-b">{name}</li>
                </a>
              ))}
            </ul>
            <div className="flex justify-end items-center">
              <button ref={headerButtonRef} className="filled text-white">
                Contact
              </button>
            </div>
          </nav>
        </header>
        <AnimatePresence>
          {open && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{
                width: '40%',
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
              className="absolute bg-white drop-shadow-lg h-screen top-0 left-0 brightness-90 z-20"
            >
              <motion.div
                className="flex flex-col justify-start pt-20 items-start px-8 gap-4 h-full"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {links.map(({ name, to, id }) => (
                  <motion.a className="link-t-b text-2xl" key={id} href={to} variants={linkVariants}>
                    {name}
                  </motion.a>
                ))}
                <a href="#contact">
                  <motion.button className="filled" variants={linkVariants}>
                    Contact
                  </motion.button>
                </a>
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Header
