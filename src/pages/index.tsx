import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import Layout from '@/components/layout'
import { useQuery, QueryResult } from '@apollo/client'
import { Query } from '@/gql/graphql'
import { QUERY_HOMEPAGE } from '@/helpers/queries'
import { motion } from 'framer-motion'
import {
  welcomeAnimation,
  welcomeContent,
  profileImageAnim,
} from '@/helpers/transitions'
import { renderMarkRule, renderNodeRule, StructuredText } from 'react-datocms'
import { isHeading, isParagraph } from 'datocms-structured-text-utils'
import { BsArrowUpRight } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'

export function Index() {
  const { data, error }: QueryResult<Query> = useQuery(QUERY_HOMEPAGE)
  const homepage = data?.homepage!
  const header = data?.homepage?.header!
  const welcomeMessageContent = homepage?.welcomemessage?.value
  const github = homepage?.links.filter((e) =>
    e?.title?.toLowerCase().includes('github')
  )[0]
  const linkedin = homepage?.links.filter((e) =>
    e?.title?.toLowerCase().includes('linkedin')
  )[0]
  const serviceslink = homepage?.links.filter((e) =>
    e?.title?.toLowerCase().includes('services')
  )[0]
  const contactlink = homepage?.links.filter((e) =>
    e?.title?.toLowerCase().includes('contact')
  )[0]

  const [animComplete, setAnim] = useState<boolean>(false)

  if (error) throw error
  if (data) {
    return (
      <Layout header={header} homepage={homepage}>
        <div className="flex flex-col justify-center w-full h-auto gap-20 py-10 md:py-20 lg:flex-row lg:items-center max-w-[1550px] mx-auto">
          <motion.div
            className="w-auto h-80 bg-accent rounded-r-full md:max-w-[700px] lg:max-w-[50%] md:h-[400px] lg:h-[500px] xl:h-[400px]"
            variants={welcomeAnimation}
            initial="hide"
            animate="show"
            onAnimationComplete={() => setAnim(true)}
          >
            <motion.div
              className="flex flex-col justify-center w-full h-full gap-5 p-5 pr-10 md:p-10 lg:p-20 "
              variants={welcomeContent}
              initial="hide"
              animate={animComplete && 'show'}
            >
              <StructuredText
                data={welcomeMessageContent}
                customMarkRules={[
                  renderMarkRule('strong', ({ mark, children, key }) => {
                    return (
                      <b
                        key={key}
                        className="text-transparent text-stroke lg:text-stroke-1"
                      >
                        {children}
                      </b>
                    )
                  }),
                ]}
                customNodeRules={[
                  renderNodeRule(isParagraph, ({ node, children, key }) => {
                    return (
                      <Link key={key} href="/contact">
                        <button className="gap-2 w-fit btn btn-secondary">
                          {children}
                          <BsArrowUpRight className="fill-primary" />
                        </button>
                      </Link>
                    )
                  }),
                  renderNodeRule(
                    isHeading,
                    ({ adapter: { renderNode }, node, children, key }) => {
                      if (node.level == 4 && node.children.length < 2) {
                        return renderNode(
                          `h${node.level}`,
                          { key, className: 'text-secondary' },
                          children
                        )
                      } else {
                        return renderNode(`h${node.level}`, { key }, children)
                      }
                    }
                  ),
                ]}
              />
              <h4 className="flex items-center justify-start gap-2">
                Find Me On:
                <Link href={github?.to!}>
                  <Image
                    src={github.icon?.url!}
                    alt={github.icon?.alt!}
                    width={30}
                    height={30}
                    className="h-auto"
                  />
                </Link>
                <Link href={linkedin?.to!}>
                  <Image
                    src={linkedin.icon?.url!}
                    alt={linkedin.icon?.alt!}
                    width={30}
                    height={30}
                    className="h-auto"
                  />
                </Link>
              </h4>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative h-auto px-4 mx-auto my-4 rounded-t-full bg-accent"
            variants={profileImageAnim}
            initial="hide"
            animate={animComplete && 'show'}
          >
            {homepage?.floatingicons.map((icon, index) => (
              <div
                key={index}
                className="floatingIcons animate-float"
                style={{ animationDelay: `${index * 500}ms` }}
              >
                <Image
                  src={icon.url!}
                  alt={icon.alt!}
                  width={50}
                  height={50}
                  className="h-auto"
                />
              </div>
            ))}
            <Image
              src={homepage?.profileimage?.url!}
              alt={homepage?.profileimage?.alt!}
              width={200}
              height={350}
              className="h-auto -mt-14 md:w-auto"
            />
          </motion.div>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            waitForTransition: true,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={50}
          slidesPerView={1.5}
          breakpoints={{
            992: { slidesPerView: 4, autoplay: false, spaceBetween: 20 },
          }}
          className="w-full h-auto my-10 lg:m-0 max-w-[1550px] mx-auto"
        >
          {homepage?.carousel.map((item, index) => (
            <SwiperSlide key={index} className="relative group">
              <div className="absolute inset-0 transition-all duration-[3000] origin-center bg-black bg-opacity-80 scale-0 group-hover:scale-100" />
              <h4 className="absolute inset-0 flex items-center justify-center transition-all duration-1000 -translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                {item?.alt}
              </h4>
              <Image
                src={item?.url}
                alt={item?.alt!}
                width={500}
                height={250}
                quality={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="items-center justify-between hidden w-full px-10 pb-10 h-fit md:flex lg:px-20 lg:pt-10 max-w-[1550px] mx-auto">
          <Link className="blue-link-l-r" href={serviceslink?.to!}>
            <h4>{serviceslink?.title}</h4>
          </Link>
          <Link className="blue-link-l-r" href={contactlink?.to!}>
            <h4>{contactlink?.title}</h4>
          </Link>
        </div>
      </Layout>
    )
  }
}

export default Index
