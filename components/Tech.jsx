import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Carousel from 'framer-motion-carousel'

const frontend = {
  title: 'Frontend',
  images: [
    {
      id: 1,
      src: 'icon-typescript.svg',
    },
    {
      id: 1,
      src: 'icon-typescript.svg',
    },
    {
      id: 2,
      src: 'icon-javascript.svg',
    },
    {
      id: 3,
      src: 'icon-tailwind.svg',
    },
    {
      id: 4,
      src: 'icon-html.svg',
    },
    {
      id: 5,
      src: 'icon-sass.svg',
    },
    {
      id: 6,
      src: 'icon-next.svg',
    },
    {
      id: 7,
      src: 'icon-react.svg',
    },
    {
      id: 8,
      src: 'icon-css.svg',
    },
  ],
}

const backend = [
  {
    id: 1,
    src: 'icon-aws.svg',
    alt: 'AWS',
  },
  {
    id: 2,
    src: 'icon-azure.svg',
    alt: 'Azure',
  },
  {
    id: 3,
    src: 'icon-node.svg',
    alt: ' Node',
  },
  {
    id: 4,
    src: 'icon-firebase.svg',
    alt: 'Firebase',
  },
  {
    id: 5,
    src: 'icon-mongo.svg',
    alt: 'MongoDB',
  },
]

const design = [
  {
    id: 1,
    src: 'icon-photoshop.svg',
    alt: 'Adobe Photoshop',
  },
  {
    id: 2,
    src: 'icon-framer.svg',
    alt: 'Framer Motion',
  },
  {
    id: 3,
    src: 'icon-figma.svg',
    alt: 'Figma',
  },
]

const Tech = () => {
  return (
    <section className="bg-dark relative ">
      <div
        className="absolute hidden md:inline-block md:-top-10 lg:-top-14 left-0 bg-dark w-full h-20"
        style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)' }}
      ></div>
      <div className="grid grid-cols-1 grid-flow-row w-full h-full py-24 place-items-start">
        <h3 className="text-white font-lora italic mx-auto">Tech Stack</h3>
        <div className="w-full h-full relative flex flex-col justify-end">
          <img
            src="assets/sitting-image.png"
            alt="sitting image"
            className="w-full h-auto max-w-[200px] absolute z-10 -top-20 left-0 right-0 mx-auto"
          />
          <div
            className="w-auto mx-4 aspect-square from-dark to-slate-400 bg-gradient-to-b"
            style={{ clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)' }}
          >
            <Carousel
              interval={3000}
              renderDots={() => null}
              renderArrowLeft={() => null}
              renderArrowRight={() => null}
            >
              {[0, 1, 2].map((value, index) => (
                <div className="w-full h-full grid place-content-center">hello</div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tech
