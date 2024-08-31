import { createContext, useContext, useState } from 'react'
import { Outlet, redirect, useLoaderData } from 'react-router-dom'
import { BigSidebar, Navbar, SmallSidebar } from '../components'
import { checkDefaultTheme } from '../App'
import Wrapper from '../assets/wrappers/Dashboard'

const DashboardContext = createContext()

export const loader = async () => {
  return 'hello world'
}

const DashboardLayout = () => {
  const data = useLoaderData()
  console.log(data)
  // temp
  const user = { name: 'john' }

  const [showSidebar, setShowSidebar] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme())

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    document.body.classList.toggle('dark-theme', newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  };

  const logoutUser = async () => {
    console.log('logout user')
  };

  return (
    <DashboardContext.Provider value={{ 
        user, 
        showSidebar, 
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser 
      }}
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout