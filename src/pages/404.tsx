import Layout from '@/components/layout'
import { Query } from '@/gql/graphql'
import { QUERY_HOMEPAGE } from '@/helpers/queries'
import { QueryResult, useQuery } from '@apollo/client'
import React, { useEffect } from 'react'

export default function Error404() {
  const { data, error }: QueryResult<Query> = useQuery(QUERY_HOMEPAGE)

  if (error) throw error

  useEffect(() => {
    setTimeout(() => window.location.assign('/'), 3000)
  }, [])

  if (data) {
    return (
      <Layout header={data?.homepage?.header!} homepage={data?.homepage!}>
        <h1 className="absolute left-0 right-0 w-full max-w-4xl mx-auto text-center top-1/3">
          Error: The Page You Were Looking For Is Not Available, Redirecting You
          To Homepage!
        </h1>
      </Layout>
    )
  }
}
