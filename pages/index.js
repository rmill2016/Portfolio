import Footer from '@/components/footer'
import Header from '@/components/header'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const bounceUp = {
  initial: {
    y: '100vh',
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'in-out',
      type: 'spring',
      stiffness: 50,
    },
  },
}

const slideLeft = {
  initial: {
    x: '-100vw',
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'in-out',
      type: 'spring',
      stiffness: 50,
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
}

const Home = () => {
  useEffect(() => {
    scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <section className="bg-dark">
        <div className="w-full h-full flex flex-col justify-around lg:flex-row">
          <motion.div
            className="flex flex-col justify-center items-start w-full h-full gap-2 pt-20 relative"
            variants={slideLeft}
            initial="initial"
            animate="animate"
            onAnimationStart={() => (document.body.style.overflow = 'hidden')}
            onAnimationComplete={() => (document.body.style.overflow = 'visible')}
          >
            <p className="text-white inline-flex items-center gap-3">
              {' '}
              <motion.img
                src="assets/icon-hand.png"
                alt="wave"
                className="h-8"
                initial={{}}
                animate={{
                  rotateZ: [-10, 0],
                  transition: {
                    delay: 1,
                    repeat: 2,
                    duration: 0.5,
                  },
                }}
              />
              Hello!
            </p>
            <h3 className="text-white">I'm Ryan Mill</h3>
            <p className="text-white">and I develop products for the web</p>
            <div className="flex justify-start w-full h-fit gap-6">
              <a href="#work">
                <button className="filled">Past work</button>
              </a>
              <a href="#about">
                <button className="outlined">Learn More</button>
              </a>
            </div>
          </motion.div>
          <div className="flex-center">
            <motion.img
              src="assets/home-background.png"
              alt="home background"
              className="w-full max-w-[600px]"
              variants={bounceUp}
              initial="initial"
              animate="animate"
            />
          </div>
        </div>
      </section>
      <section id="about" className="bg-white">
        About
      </section>
      <section className="bg-dark">Tech Stack</section>
      <section id="services" className="bg-white">
        Services
      </section>
      <section id="work" className="bg-dark">
        Past work
      </section>
      <section id="contact" className="bg-white">
        Contact
      </section>
      <Footer />
    </>
  )
}

export default Home
