import { motion, useInView } from 'framer-motion'
import { staggerLeft, leftItems, bounceUp } from '@/helpers/transitions'
import React, { useEffect, useRef } from 'react'

const Home = () => {
  const container = useRef(null)
  const target = useRef(null)
  const isInView = useInView(target, { root: container.current, amount: 0.5, margin: '-10% 0px 90% 0px' })
  return (
    <section ref={container} className="bg-dark">
      <div
        className="w-full h-full flex flex-col justify-around lg:grid lg:grid-cols-[1fr_600px] lg:grid-flow-col max-w-screen-2xl mx-auto"
        ref={target}
      >
        <motion.div
          className="flex flex-col justify-center items-start w-full h-full gap-4 pt-20 relative lg:pb-40 lg:gap-8"
          variants={staggerLeft}
          initial="hide"
          animate={isInView ? 'show' : 'hide'}
        >
          <motion.p className="text-white inline-flex items-center gap-3" variants={leftItems}>
            {' '}
            <motion.img
              src="assets/icon-hand.png"
              alt="wave"
              className="h-8"
              initial={{}}
              animate={
                isInView
                  ? {
                      rotateZ: [-10, 0],
                      transition: {
                        delay: 1,
                        repeat: 2,
                        duration: 0.5,
                      },
                    }
                  : {}
              }
            />
            Hello!
          </motion.p>
          <motion.h2 className="text-white" variants={leftItems}>
            I'm <span className="text-teal font-lora italic">Ryan Mill</span>
          </motion.h2>
          <motion.p className="text-white" variants={leftItems}>
            and I develop products for the web
          </motion.p>
          <motion.div className="flex justify-start w-full h-fit gap-6" variants={leftItems}>
            <a href="#work">
              <button className="filled">Past work</button>
            </a>
            <a href="#about">
              <button className="outlined">Learn More</button>
            </a>
          </motion.div>
        </motion.div>
        <div className="flex-center">
          <motion.img
            src="assets/home-background.png"
            alt="home background"
            className="w-full max-w-[500px] lg:max-w-[700px]"
            variants={bounceUp}
            initial="hide"
            animate={isInView ? 'show' : 'hide'}
          />
        </div>
      </div>
    </section>
  )
}

export default Home
