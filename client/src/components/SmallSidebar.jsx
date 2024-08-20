import { NavLink } from 'react-router-dom'
import { useDashboardContext } from '../pages/DashboardLayout'
import { FaTimes } from 'react-icons/fa'

import Wrapper from '../assets/wrappers/SmallSidebar'
import Logo from './Logo'
import links from '../utils/links'

const SmallSidebar = () => {
  const data = useDashboardContext()
  console.log(data)

  return (
    <Wrapper>
      <div className='sidebar-container show-sidebar'>
        <div className='content'>
          <button type='button' className='close-btn'>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className='nav-links'>
            {links.map((link) => {
              const { text, path, icon } = link;

              return (
                <NavLink
                  key={text}
                  to={path}
                  className='nav-link'
                >
                  <span className='icon'>{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar