import { useLoaderData } from 'react-router-dom'
import { ChartsContainer, StatsContainer } from '../components'
import customFetch from '../utils/customFetch'

export const loader = async () => {
  // const { data } = await customFetch.get('/jobs/statss')
    const { data } = await customFetch.get('/jobs/stats')
    return data
}

const Stats = () => {
  const { defaultStats, monthlyApplications } = useLoaderData()
  
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 1 && (<ChartsContainer data={monthlyApplications} />)}
    </>
  )
}

export default Stats