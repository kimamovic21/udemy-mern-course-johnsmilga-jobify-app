import { useAllJobsContext } from "../pages/AllJobs"

const PageBtnContainer = () => {
  const { data: { numOfPages, currentPage } } = useAllJobsContext()
  console.log('numOfPages: ', numOfPages)
  console.log('currentPage: ', currentPage)

  return (
    <h2>PageBtnContainer</h2>
  )
}

export default PageBtnContainer