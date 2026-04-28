import React from 'react'
import './styles.css'
import { SCREENS } from '../../utils/constants'
import AppLogo from '../appLogo'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../services/firebase'
import { signOut } from 'firebase/auth'

const Drawer = ({ setCurrentScreen = (screen: string) => { }, currentScreen = "", isVisible = true }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className={`drawer-container${isVisible ? '' : ' drawer-hidden'}`}>
      <div className='drawer-container drawer-content'>
        <AppLogo />
        {SCREENS.map((screen: { name: string, title: string, route: string }) => (
          <button
            key={screen.name}
            onClick={() => setCurrentScreen(screen.name)}
            style={{ backgroundColor: currentScreen === screen.name ? '#f3f2fd' : 'transparent' }}
          >
            {screen.title}
          </button>
        ))}
      </div>
      <div className='logout' onClick={handleLogout}>
        <LogOut />
        Logout
      </div>
    </div>
  )
}

export default Drawer