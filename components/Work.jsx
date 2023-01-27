import React, { useRef } from 'react'
import { AnimatePresence, motion, useCycle, useInView } from 'framer-motion'
import { leftItems, staggerDropIn } from '@/helpers/transitions'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'

let projects = [
  {
    id: 1,
    title: 'PolyOne',
    image: 'assets/work1.png',
    alt: 'polyone',
    position: 'start',
    animation: 20,
    link: 'https://polyone.io/',
    description: 'PolyOne is an NFT Marketplace connecting artists with collectors! Blockchain of choice is Ethereum.',
  },
  {
    id: 2,
    title: 'Natural Woman',
    image: 'assets/work2.png',
    alt: 'natural woman',
    position: 'end',
    animation: -20,
    link: 'https://naturalwoman.io/',
    description:
      'Natural Woman is an NFT community of women and men who believe in the decentralized power of Web3, blockchain and the creator economy',
  },
  {
    id: 3,
    title: 'Champions',
    image: 'assets/work3.png',
    alt: 'champions',
    position: 'start',
    animation: 20,
    link: 'https://github.com/rmill2016/Champions',
    description:
      'Simple JApplet project written in Java detailing characters with skills, abilities, and stats. Based off the MMO League of Legends.',
  },
]

const Work = () => {
  const [animate, cycle] = useCycle({ y: -20 }, { y: 0 })
  const [animate2, cycle2] = useCycle({ y: 20 }, { y: 0 })

  const container = useRef(null)
  const target = useRef(null)
  const isInView = useInView(target, { root: container.current })

  SwiperCore.use([Autoplay])

  return (
    <section ref={container} id="work" className="bg-dark relative z-[1] lg:h-full">
      <div
        className="w-full h-10 bg-dark absolute top-0 left-0 md:-top-10 z-0 lg:h-20 lg:-top-20"
        style={{ clipPath: 'polygon(0 27%, 45% 60%, 100% 100%, 0% 100%)' }}
      />
      <AnimatePresence>
        <motion.div
          className="absolute w-8 md:w-10 lg:w-14 aspect-square bg-transparent border border-slate-400 rounded-sm bottom-10 left-10"
          style={{ rotateZ: 45 }}
          animate={animate}
          transition={{ duration: 2 }}
          onAnimationComplete={cycle}
        />
        <motion.div
          className="absolute w-8 md:w-10 lg:w-14 aspect-square bg-transparent border border-teal rounded-sm top-24 right-10 "
          style={{ rotateZ: 45 }}
          animate={animate2}
          transition={{ duration: 2 }}
          onAnimationComplete={cycle2}
        />
        <div className="grid grid-rows-[200px_1fr] grid-flow-row w-full h-full place-items-center pt-28 max-w-[1550px] mx-auto">
          <motion.h2
            className="text-white"
            variants={leftItems}
            initial="hide"
            animate={isInView ? 'show' : 'hide'}
            ref={target}
          >
            Projects I've Worked On
          </motion.h2>

          <Swiper
            className="w-full h-full lg:hidden"
            loop
            autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
            speed={400}
            spaceBetween={100}
            modules={[Autoplay]}
            centeredSlides={true}
          >
            {projects.map((value, index) => (
              <SwiperSlide
                key={index}
                className={`flex flex-col items-${value?.position} w-full h-fit justify-center gap-4`}
              >
                <h3 className="text-white font-lora italic mx-auto">{value?.title}</h3>
                <a href={value?.link} className="mx-auto">
                  <img
                    src={value?.image}
                    alt={value?.alt}
                    className="w-full h-auto aspect-video max-w-[300px] md:max-w-[500px] "
                  />
                </a>
                <p className="text-white text-center">{value?.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full h-full hidden lg:grid grid-flow-row gap-10 py-10">
            {projects.map((value, index) => (
              <motion.div
                key={index}
                initial={{ x: value?.animation, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { type: 'spring', stiffness: 100, delay: 0.25, duration: 1 },
                }}
                className={`flex items-center w-full h-full justify-around gap-4`}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-white font-lora italic mr-auto">{value?.title}</h3>
                  <a href={value?.link}>
                    <img
                      src={value?.image}
                      alt={value?.alt}
                      className="w-full h-auto aspect-video max-w-[300px] mx-auto md:max-w-[500px]"
                    />
                  </a>
                </div>
                <div className="max-w-[500px]">
                  <p className="text-white leading-normal">{value?.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatePresence>
    </section>
  )
}

export default Work
