// import { useLoaderData } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { ChartsContainer, StatsContainer } from '../components'
import customFetch from '../utils/customFetch'

export const loader = async () => {
  return null
}

const Stats = () => {
  // const { defaultStats, monthlyApplications } = useLoaderData()
 
  const { isLoading, isError, data } = useQuery({
    queryKey: ['stats'],
    queryFn: () => customFetch('/jobs/stats')
  })

  if (isLoading) return <h4>Loading...</h4>
  if (isError) return <h4>There was an error...</h4>

  const { defaultStats, monthlyApplications } = data.data
 
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 1 && (<ChartsContainer data={monthlyApplications} />)}
    </>
  )
}

export default Stats