import { useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import { JobsContainer, SearchContainer } from '../components'
import customFetch from '../utils/customFetch'

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get('/jobs')
    console.log(data)
    return { data }
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const AllJobs = () => {
  const { data } = useLoaderData()
  console.log(data)

  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  )
}

export default AllJobs