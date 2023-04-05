import { WorktileRecord } from '@/gql/graphql'
import React from 'react'
import Image from 'next/image'

type Props = {
  projects: WorktileRecord[]
}

const Slideshow = (projects: Props) => {
  return (
    <div className="flex flex-col w-full h-full not-prose lg:row-start-2 lg:col-start-2 lg:row-end-auto">
      <div className="relative flex flex-col justify-center w-full h-full gap-8 p-2 border-2 border-accent rounded-xl lg:h-auto">
        {projects?.projects.slice(0, 3).map((project, idx) => (
          <div key={idx} className="slider">
            <ul className="slide-track">
              {project.images.map((image, index) => (
                <li key={index} className="slide">
                  <Image
                    src={image.url!}
                    alt={image.alt!}
                    width={500}
                    height={250}
                    priority
                    className="object-cover"
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slideshow
