import { useState } from 'react'
import { Bell, Menu, X } from 'lucide-react'
import './styles.css'
import ProfileIcon from '../profileIcon'
import { NOTIFICATIONS_DATA } from '../../utils/dummyData'

const NavBar = ({ toggleDrawerVisibility, setCurrentScreen }: { toggleDrawerVisibility: any, setCurrentScreen?: any }) => {
  const [hasUnread, setHasUnread] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleBellClick = () => {
    setShowDropdown(!showDropdown);
    if (!showDropdown) {
      setHasUnread(false);
    }
  };

  return (
    <div className='nav-container'>
      <Menu onClick={() => toggleDrawerVisibility((prev: boolean) => !prev)} style={{ cursor: 'pointer' }} />
      <div className='nav-details'>
        <div className='notification-bell-container'>
          <Bell className='nav-bell-icon' onClick={handleBellClick} />
          {hasUnread && <span className='notification-badge' />}

          {showDropdown && (
            <div className='notifications-dropdown'>
              <div className='dropdown-header'>
                <h3>Notifications</h3>
                <X className='close-dropdown' onClick={() => setShowDropdown(false)} />
              </div>
              <div className='dropdown-content'>
                {NOTIFICATIONS_DATA.length > 0 ? (
                  NOTIFICATIONS_DATA.map((notif) => (
                    <div key={notif.id} className={`notification-item ${notif.unread ? 'unread' : ''}`}>
                      <div className='notif-dot' />
                      <div className='notif-text'>
                        <p className='notif-title'>{notif.title}</p>
                        <p className='notif-msg'>{notif.message}</p>
                        <p className='notif-time'>{notif.time}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className='no-notifications'>No new notifications</p>
                )}
              </div>
              <div className='dropdown-footer'>
                <button>View all</button>
              </div>
            </div>
          )}
        </div>
        <ProfileIcon onClick={() => setCurrentScreen && setCurrentScreen('profile')} />
      </div>
    </div>
  )
}

export default NavBar