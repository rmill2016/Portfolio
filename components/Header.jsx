import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useCycle } from 'framer-motion'

const links = [
  { name: 'Home', to: '/', id: 1 },
  { name: 'About', to: '#about', id: 2 },
  { name: 'Services', to: '#services', id: 3 },
  { name: 'Past Works', to: '#work', id: 4 },
]

const menuVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
  },
}

const linkVariants = {
  closed: {
    opacity: 0,
    y: -20,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
}

const staggerChildren = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
      staggerDirection: 1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
}

const menuLinks = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
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
            if (entry.intersectionRatio < 0.9) {
              inverted = true
            }
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
              <img src="assets/icon-bars.svg" alt="menu" aria-label="menu" />
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
            <a href="#contact">
              <button ref={headerButtonRef} className="filled text-white">
                Contact
              </button>
            </a>
          </div>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.aside
              className="fixed top-0 right-0 bg-dark w-full h-screen grid grid-rows-[80px_1fr] grid-flow-row origin-top-right"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit={{
                scale: 0,
                transition: {
                  type: 'tween',
                  duration: 0.25,
                  origin: 'center',
                  delay: 1.25,
                },
              }}
            >
              <motion.div
                className="flex justify-end items-center w-full h-full pr-8"
                variants={linkVariants}
                initial="closed"
                animate="open"
              >
                <button onClick={cycleOpen}>
                  <img src="assets/icon-close.svg" alt="close" className="w-8 aspect-square" />
                </button>
              </motion.div>
              <motion.ul
                className="flex-center flex-col gap-6 pb-20 text-3xl"
                variants={staggerChildren}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                {links.map((value, index) => (
                  <motion.li
                    key={index}
                    className="list-none text-white link-t-b"
                    onClick={cycleOpen}
                    variants={menuLinks}
                  >
                    <a
                      onClick={(e) => {
                        e.preventDefault()
                        setTimeout(() => (window.location = `${value?.to}`), 1500)
                      }}
                    >
                      {value?.name}
                    </a>
                  </motion.li>
                ))}
                <motion.button className="filled text-2xl after:mt-1" variants={menuLinks} onClick={cycleOpen}>
                  <a
                    onClick={(e) => {
                      e.preventDefault()
                      setTimeout(() => (window.location = '#contact'), 1500)
                    }}
                  >
                    Contact
                  </a>
                </motion.button>
              </motion.ul>
            </motion.aside>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Header
