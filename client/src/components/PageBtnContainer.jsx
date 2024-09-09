import { useAllJobsContext } from "../pages/AllJobs"
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import Wrapper from '../assets/wrappers/PageBtnContainer'

const PageBtnContainer = () => {
  const { data: { numOfPages, currentPage } } = useAllJobsContext()
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1
  })
  console.log('pages: ', pages)

  return (
    <Wrapper>
        <button className='btn prev-btn'>
            <HiChevronDoubleLeft />
        </button>
        <div className='btn-container'>
            {pages.map((pageNumber) => (
                <button
                    key={pageNumber}
                    className={`btn page-btn ${pageNumber === currentPage && 'active'}`}
                >
                    {pageNumber}
                </button>
            ))}
        </div>
        <button className='btn next-btn'>
            <HiChevronDoubleRight />
        </button>
    </Wrapper>
  )
}

export default PageBtnContainer