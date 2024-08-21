import { NavLink } from 'react-router-dom'
import { useDashboardContext } from '../pages/DashboardLayout'
import { FaTimes } from 'react-icons/fa'

import links from '../utils/links'
import Logo from './Logo'
import Wrapper from '../assets/wrappers/SmallSidebar'

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext()

  return (
    <Wrapper>
      <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
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
                  onClick={toggleSidebar}
                  end
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