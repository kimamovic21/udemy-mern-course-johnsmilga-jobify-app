import { Form, useNavigation, redirect, useParams, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants'
import { FormRow, FormRowSelect } from '../components'
import customFetch from '../utils/customFetch'
import Wrapper from '../assets/wrappers/DashboardFormPage'

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
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  const params = useParams()
  console.log(params)
  const { job } = useLoaderData()
  console.log(job)

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>edit job</h4>
        <div className='form-center'>
          <FormRow 
            type='text' 
            name='position' 
            defaultValue={job.position} 
          />
          <FormRow 
            type='text'
            name='company' 
            defaultValue={job.company} 
          />
          <FormRow
            type='text'
            labelText='job location'
            name='jobLocation'
            defaultValue={job.jobLocation}
          />

          <FormRowSelect
            name='jobStatus'
            labelText='job status'
            defaultValue={job.jobStatus}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            name='jobType'
            labelText='job type'
            defaultValue={job.jobType}
            list={Object.values(JOB_TYPE)}
          />
          <button
            type='submit'
            className='btn btn-block form-btn '
            disabled={isSubmitting}
          >
            {isSubmitting ? 'submitting...' : 'submit'}
          </button>
        </div>
      </Form>
    </Wrapper>
  )
}

export default EditJob