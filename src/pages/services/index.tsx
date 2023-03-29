import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout'
import Title from '@/components/title'
import { Query } from '@/gql/graphql'
import { QUERY_HOMEPAGE, QUERY_SERVICESPAGE } from '@/helpers/queries'
import { QueryResult, useQuery } from '@apollo/client'
import { renderNodeRule, StructuredText } from 'react-datocms'
import { motion } from 'framer-motion'
import { isHeading, isList, isParagraph } from 'datocms-structured-text-utils'
import Image from 'next/image'
import Card from '@/components/card'
import { FaBars } from 'react-icons/fa'

function Services() {
  const homepageQuery: QueryResult<Query> = useQuery(QUERY_HOMEPAGE)
  const servicesQuery: QueryResult<Query> = useQuery(QUERY_SERVICESPAGE)

  const homepageData = homepageQuery?.data?.homepage
  const servicesData = servicesQuery?.data?.servicespage

  const [expanded, setExpanded] = useState<boolean>(false)

  if (homepageData && servicesData) {
    return (
      <Layout header={homepageData?.header!} homepage={homepageData!}>
        <section className="lg:grid lg:grid-flow-row lg:grid-cols-2">
          <Title title={servicesData?.title!} />
          <div className="grid grid-cols-2 prose-h1:pb-10 two-blue">
            <StructuredText
              data={servicesData?.servicesmessage[0]?.text?.value}
              customNodeRules={[
                renderNodeRule(
                  isHeading,
                  ({ adapter: { renderNode }, node, children, key }) => {
                    if (node.level == 4) {
                      return renderNode(
                        `h${node.level}`,
                        {
                          key,
                          className: 'odd:pb-10 col-start-1 col-span-full',
                        },
                        children
                      )
                    } else {
                      return renderNode(`h${node.level}`, { key }, children)
                    }
                  }
                ),
                renderNodeRule(isList, ({ children, key }) => {
                  let list1 = children?.slice(0, 2)
                  let list2 = children?.slice(2, 4)

                  return (
                    <div
                      key={key}
                      className="flex justify-between col-start-1 col-span-full first:prose-li:text-accent first:prose-li:font-medium prose-li:p-0 prose-li:my-1 md:col-span-1"
                    >
                      <ul className="flex flex-col items-center justify-center p-0 m-0 list-none first:prose-li:text-4xl">
                        {list1}
                      </ul>
                      <ul className="flex flex-col items-center justify-center p-0 m-0 list-none first:prose-li:text-4xl">
                        {list2}
                      </ul>
                    </div>
                  )
                }),
                renderNodeRule(isParagraph, ({ children }) => {
                  return <>{children}</>
                }),
              ]}
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{
                type: 'spring',
                duration: 1.5,
              }}
              className="col-start-1 col-span-full max-w-[400px] py-10 lg:pb-0"
            >
              <Image
                src={servicesData?.servicesmessage[0]?.images[0]?.url}
                alt={servicesData?.servicesmessage[0]?.images[0]?.alt!}
                width={400}
                height={20}
              />
            </motion.div>
          </div>
          <div className="w-full gap-4 carousel carousel-center md:col-start-2">
            {servicesData?.cards.map((card, index) => (
              <Card key={index} card={card} index={index} />
            ))}
          </div>
          <div className="flex justify-center w-full col-start-1 gap-2 py-2 col-span-full">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
          </div>
        </section>
        <aside
          className={
            expanded
              ? 'sticky bottom-0 flex flex-col items-center justify-start w-full gap-10 overflow-y-auto pointer-events-auto bg-primary rounded-t-2xl h-[75vh] duration-500 ease-out transition-all'
              : 'sticky bottom-0 w-full overflow-hidden h-14 xl:h-16 2xl:h-24 bg-primary rounded-t-2xl duration-500 ease-out transition-all'
          }
        >
          <div
            className="flex items-center justify-center w-full h-auto gap-8 p-4 cursor-pointer"
            onClick={() => setExpanded(!expanded)}
          >
            <h4 className="text-secondary">View</h4>
            <h4 className="text-secondary">Skills</h4>
          </div>
          {expanded && (
            <div className="flex flex-col items-center w-full h-auto gap-10 p-4 my-auto lg:flex-row lg:px-20 lg:gap-20 md:px-10 md:gap-20">
              <div
                id="skills"
                className="grid w-full h-full grid-flow-row grid-cols-3 grid-rows-[auto_1fr_1fr] gap-4 "
              >
                <h4 className="relative col-start-1 row-start-1 text-center h-fit text-secondary col-span-full after:absolute after:w-full after:h-0.5 after:bg-secondary after:bottom-0 after:left-0 pb-4 md:pb-10 md:after:bottom-4">
                  {servicesData?.skillstitle}
                </h4>

                {servicesData?.skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="grid w-16 h-16 rounded-full bg-accent place-items-center">
                      <Image
                        src={skill.icon!.url}
                        alt={skill.icon!.alt!}
                        width={30}
                        height={30}
                        className="h-auto"
                      />
                    </div>
                    <p className="text-center text-secondary">{skill.title}</p>
                  </div>
                ))}
              </div>
              <div
                id="techstack"
                className="flex flex-col w-full h-full gap-10 p-4 pt-0 border-2 rounded-2xl border-secondary"
              >
                <h4 className="w-full text-secondary text-center relative after:absolute after:w-full after:h-0.5 after:bg-secondary after:-bottom-4 after:left-0">
                  {servicesData?.techstacktitle}
                </h4>

                {servicesData?.techstack.map((stack, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start w-full h-auto gap-4"
                  >
                    <Image
                      src={stack.icon!.url!}
                      alt={stack.icon!.alt!}
                      width={40}
                      height={40}
                      className="h-auto"
                    />
                    <p className="text-secondary">
                      {stack.title} {stack.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </Layout>
    )
  }
}

export default Services
