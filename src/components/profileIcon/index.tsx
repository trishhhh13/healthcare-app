import React from 'react';
import { User } from 'lucide-react';

const ProfileIcon = ({ onClick = () => { } }) => {
  return (
    <div
      onClick={onClick}
      className='profile-icon'
    >
      <User size={20} color="#4f46e5" />
    </div>
  )
}

export default ProfileIcon;