import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa'
import { useLoaderData, redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import customFetch from '../utils/customFetch'
import Wrapper from '../assets/wrappers/StatsContainer'

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/admin/app-stats')
    console.log(data)
    return data
  } catch (error) {
    toast.error('You are not authorized to view this page!')
    return redirect('/dashboard')
  }
}

const Admin = () => {
  const { users, jobs } = useLoaderData()

  return (
    <Wrapper>
      <h2>admin page</h2>
    </Wrapper>
  )
}

export default Admin