import Dropdown from '@/components/dropdown'
import Layout from '@/components/layout'
import Slideshow from '@/components/slideshow'
import Title from '@/components/title'
import { Query } from '@/gql/graphql'
import { QUERY_HOMEPAGE, QUERY_WORKPAGE } from '@/helpers/queries'
import { QueryResult, useQuery } from '@apollo/client'
import React from 'react'

function Work() {
  const homepageQuery: QueryResult<Query> = useQuery(QUERY_HOMEPAGE)
  const workpageQuery: QueryResult<Query> = useQuery(QUERY_WORKPAGE)

  const homepageData = homepageQuery?.data?.homepage
  const workpageData = workpageQuery?.data?.workpage

  if (homepageData && workpageData) {
    return (
      <Layout header={homepageData?.header!} homepage={homepageData!}>
        <section>
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:grid-flow-row">
            <Title title={workpageData?.title!} />
            <Slideshow projects={workpageData?.projects} />
            <div className="flex flex-col justify-between w-full h-full lg:col-start-1">
              {workpageData?.projects.map((project, index) => (
                <Dropdown key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Work
