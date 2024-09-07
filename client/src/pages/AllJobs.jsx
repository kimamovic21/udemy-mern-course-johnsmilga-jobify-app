import { createContext, useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import { JobsContainer, SearchContainer } from '../components'
import customFetch from '../utils/customFetch'

export const loader = async () => {
  console.log('hello')
  try {
    const { data } = await customFetch.get('/jobs')
    console.log(data)
    return { data }
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const AllJobsContext = createContext();

const AllJobs = () => {
  const { data } = useLoaderData()
  console.log(data)

  return (
    <AllJobsContext.Provider value={{ data }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  )
}

export const useAllJobsContext = () => useContext(AllJobsContext)

export default AllJobs