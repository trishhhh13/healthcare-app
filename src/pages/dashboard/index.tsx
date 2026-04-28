import React, { useState } from 'react'
import Drawer from '../../components/drawer'
import './styles.css'
import Home from '../home'
import Analytics from '../analytics'
import PatientDetails from '../patients'
import Profile from '../profile'
import NavBar from '../../components/navBar'

const Dashboard = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(true)
  const [currentScreen, setCurrentScreen] = useState('home')
  const getComponent = (screen: string) => {
    switch (screen) {
      case 'home':
        return <Home />
      case 'analytics':
        return <Analytics />
      case 'patient-details':
        return <PatientDetails />
      case 'profile':
        return <Profile />
      default:
        return <Home />
    }
  }

  return (
    <div className='dashboard-container'>
      <Drawer setCurrentScreen={setCurrentScreen} currentScreen={currentScreen} isVisible={isDrawerVisible} />
      <div className='dashboard'>
        <NavBar toggleDrawerVisibility={setIsDrawerVisible} setCurrentScreen={setCurrentScreen} />
        {getComponent(currentScreen)}
      </div>
    </div>
  )
}

export default Dashboard