import React, { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import Carousel from 'framer-motion-carousel'
import { bounceUp, staggerDropIn } from '@/helpers/transitions'

let techstackArray = [
  {
    title: 'Frontend',
    images: [
      { src: 'icon-typescript.svg', alt: 'Typescript' },
      { src: 'icon-javascript.svg', alt: 'Javascript' },
      { src: 'icon-html.svg', alt: 'HTML' },
      { src: 'icon-sass.svg', alt: 'Sass' },
      { src: 'icon-next.svg', alt: 'Next' },
      { src: 'icon-react.svg', alt: 'React' },
      { src: 'icon-css.svg', alt: 'CSS' },
    ],
  },
  {
    title: 'Backend',
    images: [
      { src: 'icon-aws.svg', alt: 'AWS' },
      { src: 'icon-azure.svg', alt: 'Azure' },
      { src: 'icon-node.svg', alt: 'Node' },
      { src: 'icon-firebase.svg', alt: 'Firebase' },
      { src: 'icon-mongo.svg', alt: 'MongoDB' },
    ],
  },
  {
    title: 'Design',
    images: [
      { src: 'icon-photoshop.svg', alt: 'Adobe Photoshop' },
      { src: 'icon-framer.svg', alt: 'Framer Motion' },
      { src: 'icon-figma.svg', alt: 'Figma' },
    ],
  },
]

let frontend = {
  title: 'Frontend',
  images: [
    { src: 'icon-typescript.svg', alt: 'Typescript' },
    { src: 'icon-javascript.svg', alt: 'Javascript' },
    { src: 'icon-html.svg', alt: 'HTML' },
    { src: 'icon-sass.svg', alt: 'Sass' },
    { src: 'icon-next.svg', alt: 'Next' },
    { src: 'icon-react.svg', alt: 'React' },
    { src: 'icon-css.svg', alt: 'CSS' },
  ],
}

let backend = {
  title: 'Backend',
  images: [
    { src: 'icon-aws.svg', alt: 'AWS' },
    { src: 'icon-azure.svg', alt: 'Azure' },
    { src: 'icon-node.svg', alt: 'Node' },
    { src: 'icon-firebase.svg', alt: 'Firebase' },
    { src: 'icon-mongo.svg', alt: 'MongoDB' },
  ],
}

let design = {
  title: 'Design',
  images: [
    { src: 'icon-photoshop.svg', alt: 'Adobe Photoshop' },
    { src: 'icon-framer.svg', alt: 'Framer Motion' },
    { src: 'icon-figma.svg', alt: 'Figma' },
  ],
}

const Tech = () => {
  const container = useRef(null)
  const target = useRef(null)
  const isInView = useInView(target, { root: container.current, amount: 0.5 })
  return (
    <section ref={container} className="bg-dark relative ">
      <div
        className="absolute hidden md:inline-block md:-top-10 lg:-top-14 left-0 bg-dark w-full h-20"
        style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)' }}
      ></div>
      <AnimatePresence>
        <div
          className="grid grid-cols-1 grid-flow-row place-items-center w-full h-full md:grid-rows-[100px_1fr_1fr] md:grid-flow-row md:pt-20"
          ref={target}
        >
          <motion.h3
            className="text-white font-lora italic mx-auto"
            variants={bounceUp}
            initial="hide"
            animate={isInView ? 'show' : 'hide'}
          >
            Tech Stack
          </motion.h3>
          <div className="w-full h-full relative flex flex-col justify-end md:hidden z-0">
            <motion.img
              src="assets/sitting-image.png"
              alt="sitting image"
              variants={bounceUp}
              initial="hide"
              animate={isInView ? 'show' : 'hide'}
              className="w-full h-auto max-w-[300px] absolute z-[1] -top-20 left-0 right-0 mx-auto pointer-events-none"
            />

            <Carousel
              interval={5000}
              renderDots={() => null}
              renderArrowLeft={() => null}
              renderArrowRight={() => null}
            >
              {techstackArray.map((item, index) => (
                <div
                  key={index}
                  className={
                    isInView ? 'flex flex-col w-full h-full justify-center pt-20 items-center gap-2' : 'hidden'
                  }
                >
                  <h3 className="text-teal font-bold">{item.title}</h3>
                  <div className="grid grid-cols-4 grid-flow-row gap-4 ">
                    {item.images.map((image, index) => (
                      <motion.img
                        key={index}
                        className="w-10 aspect-square"
                        src={`assets/${image.src}`}
                        alt={image.alt}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <motion.div
            className="hidden md:flex w-full justify-between items-center h-fit max-w-screen-lg mx-auto -mb-20 lg:-mb-48"
            variants={staggerDropIn}
            initial="hide"
            animate={isInView ? 'show' : 'hide'}
          >
            <motion.div className="relative w-[300px] aspect-square flex-center lg:w-[350px]" variants={bounceUp}>
              <img src="assets/hexagon.png" alt="hexagon" />
              <div className="absolute left-0 right-0 top-14 bottom-14  flex flex-col gap-4">
                <h3 className="mx-auto w-fit text-teal">{frontend.title}</h3>
                <div className="grid grid-cols-3 grid-flow-row place-items-center mx-8">
                  {frontend.images.map((image) => {
                    return (
                      <motion.img
                        src={`assets/${image.src}`}
                        alt={image.alt}
                        className="w-14 aspect-square"
                        whileHover={{ scale: 1.2 }}
                      />
                    )
                  })}
                </div>
              </div>
            </motion.div>
            <motion.div className="relative w-[300px] aspect-square flex-center lg:w-[350px]" variants={bounceUp}>
              <img src="assets/hexagon.png" alt="hexagon" />
              <div className="absolute left-0 right-0 top-14 bottom-14 flex flex-col gap-4">
                <h3 className="mx-auto w-fit text-teal ">{backend.title}</h3>
                <div className="grid grid-cols-3 grid-flow-row place-items-center mx-8">
                  {backend.images.map((image) => {
                    return (
                      <motion.img
                        src={`assets/${image.src}`}
                        alt={image.alt}
                        className="w-14 aspect-square"
                        whileHover={{ scale: 1.2 }}
                      />
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="hidden md:grid w-fit h-fit place-items-center relative mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      delay: 0.9,
                      stiffness: 100,
                    },
                  }
                : { opacity: 0, y: 20 }
            }
          >
            <img src="assets/sitting-image.png" alt="sitting image" className="w-full max-w-[350px] lg:max-w-[400px]" />
            <div className="absolute bottom-0 p-10 h-1/2 w-full flex flex-col items-center gap-4">
              <h3 className="text-teal">{design?.title}</h3>
              <div className="grid grid-cols-3 grid-flow-row place-items-center mx-8 gap-4">
                {design.images.map((image) => {
                  return (
                    <motion.img
                      src={`assets/${image.src}`}
                      alt={image.alt}
                      className="w-14 aspect-square"
                      whileHover={{ scale: 1.2 }}
                    />
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </section>
  )
}

export default Tech
