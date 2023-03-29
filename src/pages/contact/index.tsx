import Layout from '@/components/layout'
import Title from '@/components/title'
import { Query } from '@/gql/graphql'
import { QUERY_CONTACTPAGE, QUERY_HOMEPAGE } from '@/helpers/queries'
import { QueryResult, useQuery } from '@apollo/client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Contact() {
  let homepageQuery: QueryResult<Query> = useQuery(QUERY_HOMEPAGE)
  let contactpageQuery: QueryResult<Query> = useQuery(QUERY_CONTACTPAGE)

  let homepageData = homepageQuery?.data?.homepage!
  let contactpageData = contactpageQuery?.data?.contactpage!
  let header = homepageData?.header!

  if (homepageData && contactpageData) {
    return (
      <Layout header={header} homepage={homepageData}>
        <Title title={contactpageData?.title!} />
        <div className="w-full h-auto mt-10 bg-accent rounded-t-2xl lg:mt-20">
          <section>
            <h3 className="mx-auto w-fit">{contactpageData?.subtitle}</h3>
            <div className="flex flex-col items-center w-full h-auto gap-4 lg:grid lg:grid-cols-3 lg:grid-flow-row lg:place-items-center lg:grid-rows-[1fr_auto]">
              <div className="relative lg:col-start-1">
                <div className="absolute w-10 bg-transparent border-2 border-b-0 border-r-0 h-14 -top-4 -left-4 border-primary" />
                <div className="absolute w-10 bg-transparent border-2 border-t-0 border-l-0 h-14 -bottom-4 -right-4 border-primary" />
                <Image
                  src={contactpageData?.profileimage?.url!}
                  alt={contactpageData?.profileimage?.alt!}
                  width={500}
                  height={800}
                  priority
                  className="w-[300px] md:w-[400px]"
                />
              </div>
              <div className="inline-flex items-center justify-center w-full h-20 gap-8 px-4 py-6 not-prose lg:col-start-2 lg:-rotate-90 lg:h-full lg:ml-10 lg:-mr-10 md:h-32 lg:items-start">
                <hr className="w-full bg-primary lg:mt-6" />
                {contactpageData?.contacticons.map((icon, index) => (
                  <Link
                    key={index}
                    href={icon.to!}
                    className="w-32 md:w-full"
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={50}
                      height={50}
                      src={icon.icon?.url!}
                      alt={icon.icon?.alt!}
                      className="h-auto mx-auto "
                    />
                  </Link>
                ))}
                <hr className="w-full bg-primary lg:mt-6" />
              </div>
              <div className="relative flex items-center w-full h-40 not-prose lg:col-start-3 lg:h-80 lg:w-[400px] lg:mr-40 xl:w-[600px] xl:mr-48">
                <hr className="w-full bg-primary lg:h-1 lg:w-[800px]" />
                <div className="absolute grid w-32 h-32 rounded-full lg:w-52 lg:h-52 right-10 bg-primary place-items-center">
                  <h4 className="text-center text-accent">
                    {contactpageData?.getintouch}
                  </h4>
                </div>
              </div>
              <div className="flex items-center justify-around w-full lg:col-start-2 lg:col-span-full">
                <Link
                  href={contactpageData?.cvlink[0]?.to!}
                  target={'_blank'}
                  rel="noopener noreferrer"
                  className="lg:col-start-2 lg:ml-auto lg:row-start-2"
                >
                  <button className="gap-4 btn btn-primary text-accent">
                    <p className="normal-case">
                      {contactpageData?.cvlink[0].title}
                    </p>
                    <Image
                      width={20}
                      height={20}
                      src={contactpageData?.cvlink[0]?.icon?.url!}
                      alt={contactpageData?.cvlink[0]?.icon?.alt!}
                    />
                  </button>
                </Link>
                <a
                  href={contactpageData?.cvlink[1]?.to!}
                  target={'_blank'}
                  rel="noopener noreferrer"
                  className="lg:col-start-3 lg:row-start-2 lg:ml-auto"
                >
                  <button className="gap-4 border btn btn-accent border-primary text-primary">
                    <p className="normal-case">
                      {contactpageData?.cvlink[1].title}
                    </p>
                    <Image
                      width={20}
                      height={20}
                      src={contactpageData?.cvlink[1]?.icon?.url!}
                      alt={contactpageData?.cvlink[1]?.icon?.alt!}
                    />
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  } else return null
}

export default Contact
