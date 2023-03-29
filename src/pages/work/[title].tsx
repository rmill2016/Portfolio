/* eslint-disable react-hooks/rules-of-hooks */
import { Query, WorkpageRecord } from '@/gql/graphql'
import { QUERY_WORKPAGE } from '@/helpers/queries'
import { ApolloQueryResult, QueryResult, useQuery } from '@apollo/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { client } from '../_app'

export const getStaticPaths: GetStaticPaths = async () => {
  let apollo = client
  const { data, error }: ApolloQueryResult<Query> = await apollo.query({
    query: QUERY_WORKPAGE,
  })

  if (error) throw error

  let paths = data?.workpage?.projects.map((project) => {
    return {
      params: {
        title: project?.title
          ?.toLowerCase()
          .replace(/[\s]/g, '-')
          .replace(/[^\w-']/g, '')!,
      },
    }
  })!

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async () => {
  let apollo = client
  const { data, error }: ApolloQueryResult<Query> = await apollo.query({
    query: QUERY_WORKPAGE,
  })

  if (error) throw error

  return {
    props: {
      workpage: data,
    },
  }
}

const Project = ({ workpage }: Query) => {
  return <div>Project</div>
}

export default Project
