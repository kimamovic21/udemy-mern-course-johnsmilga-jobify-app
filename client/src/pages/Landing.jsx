import { Link } from 'react-router-dom'
import { Logo } from '../components'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            The Jobify V2 project is a full-stack job tracking application built using the MERN stack 
            (MongoDB, Express.js, React, and Node.js). It allows users to manage job applications efficiently 
            by providing features such as job creation, updating, and deletion. Users can track their job position, 
            job status, job type, job location and company name offering an organized way to manage their job hunt.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing