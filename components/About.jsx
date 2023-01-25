import React, { useRef, useEffect } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { leftItems, staggerLeft } from '@/helpers/transitions'

const text = [
  {
    id: 1,
    content:
      'Hello! My name is Ryan Mill and I develop responsive, engaging websites. I began my development journey by taking my first Java object oriented programming course in high school.',
  },
  {
    id: 2,
    content:
      'Learning to program in Java felt very rewarding and soon became my drive to expand my knowledge and learn new languages such as JavaScript.',
  },
  {
    id: 3,
    content:
      'In 2018, I took an interest to web development and began to learn HTML and CSS. My focus at the time was learning how to make the web more accessible and simplier! Currently I collaborate on large and self projects using the latest technologies such as React/Next, Node.js, and Typescript.',
  },
]

const About = () => {
  const container = useRef(null)
  const inviewRef = useRef(null)
  const isInView = useInView(inviewRef, { root: container.current, amount: 0.5, margin: '-10%' })

  return (
    <section ref={container} id="about" className="bg-white relative">
      <div
        className="absolute -top-5 left-0 bg-white w-2/5 h-10 lg:w-1/2 lg:h-16"
        style={{ clipPath: 'polygon(0% 0%, 80% 0, 100% 100%, 0 100%)' }}
      ></div>
      <AnimatePresence>
        <div className="grid grid-rows-2 grid-flow-row lg:grid-cols-[700px_1fr] lg:grid-flow-col w-full h-full place-content-center md:items-center lg:justify-between lg:grid-rows-none max-w-screen-2xl mx-auto ">
          <motion.div
            className="w-full h-full "
            initial={{ y: 20, opacity: 0 }}
            animate={
              isInView
                ? { y: 0, opacity: 1, transition: { type: 'spring', duration: 0.5, stiffness: 100 } }
                : { y: 20, opacity: 0 }
            }
          >
            <img src="assets/posing-image.png" alt="about image" className="w-full max-w-[600px] lg:max-w-full" />
          </motion.div>
          <div className="flex flex-col gap-4 overflow-y-scroll overflow-x-hidden md:overflow-visible " ref={inviewRef}>
            <motion.h4
              className="font-lora italic"
              variants={leftItems}
              initial="hide"
              animate={isInView ? 'show' : 'hide'}
            >
              About
            </motion.h4>
            <motion.ul
              className="list-none flex flex-col gap-4"
              variants={staggerLeft}
              initial="hide"
              animate={isInView ? 'show' : 'hide'}
            >
              {text.map((value, index) => (
                <motion.p key={index} variants={leftItems}>
                  {value?.content}
                </motion.p>
              ))}
            </motion.ul>
          </div>
        </div>
      </AnimatePresence>
    </section>
  )
}

export default About
