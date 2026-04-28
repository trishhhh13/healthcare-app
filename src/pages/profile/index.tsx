import { Mail, Phone, MapPin, Briefcase, Camera } from 'lucide-react';
import './styles.css';

const Profile = () => {
  return (
    <div className="profile-page-container">
      <div className="profile-header-bg"></div>
      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-avatar-container">
            <img src="https://i.pravatar.cc/150?u=dr_sarah" alt="Dr. Sarah Smith" className="profile-avatar" />
            <button className="avatar-edit-btn">
              <Camera size={16} color="#fff" />
            </button>
          </div>
          
          <div className="profile-info">
            <h2 className="profile-name">Dr. Sarah Smith</h2>
            <p className="profile-role">Senior Cardiologist</p>
            
            <div className="profile-details-grid">
              <div className="detail-item">
                <Mail className="detail-icon" size={18} />
                <div className="detail-text">
                  <span className="detail-label">Email</span>
                  <span className="detail-value">sarah.smith@healthcare.com</span>
                </div>
              </div>
              
              <div className="detail-item">
                <Phone className="detail-icon" size={18} />
                <div className="detail-text">
                  <span className="detail-label">Phone</span>
                  <span className="detail-value">+1 (555) 123-4567</span>
                </div>
              </div>
              
              <div className="detail-item">
                <MapPin className="detail-icon" size={18} />
                <div className="detail-text">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">New York Medical Center, NY</span>
                </div>
              </div>
              
              <div className="detail-item">
                <Briefcase className="detail-icon" size={18} />
                <div className="detail-text">
                  <span className="detail-label">Experience</span>
                  <span className="detail-value">12 Years</span>
                </div>
              </div>
            </div>
            
            <div className="profile-actions">
              <button className="btn-primary">Edit Profile</button>
              <button className="btn-secondary">Change Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;