import { redirect, useParams, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import customFetch from '../utils/customFetch'

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/jobs/${params.id}`)
    return data
  } catch (error) {
    toast.error(error.response.data.msg)
    return redirect('/dashboard/all-jobs')
  }
}

export const action = async () => {
  return null
}

const EditJob = () => {
  const params = useParams()
  console.log(params)
  const { job } = useLoaderData()
  console.log(job)

  return (
    <h2>EditJob</h2>
  )
}

export default EditJob