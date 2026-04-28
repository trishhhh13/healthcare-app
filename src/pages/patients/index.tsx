import { useState } from 'react';
import { Search, LayoutGrid, List } from 'lucide-react';
import './styles.css';

import { MOCK_PATIENTS } from '../../utils/dummyData';

const PatientDetails = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="patients-page-container">
      <div className="patients-header-row">
        <h2 className="patients-page-title">Patients</h2>
        
        <div className="patients-search-container">
          <Search className="search-icon" size={18} />
          <input 
            type="text" 
            placeholder="Search patients..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="patients-search-input"
          />
        </div>

        <div className="view-toggle-group">
          <button 
            className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <LayoutGrid size={16} /> Grid View
          </button>
          <button 
            className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <List size={16} /> List View
          </button>
        </div>
      </div>

      <div className={`patients-${viewMode}`}>
        {MOCK_PATIENTS.map(patient => (
          <div key={patient.id} className="patient-card">
            <img src={patient.img} alt={patient.name} className="patient-avatar-large" />
            <h3 className="patient-name-large">{patient.name}</h3>
            <p className="patient-id-text">ID: #{patient.id}</p>
            <p className="patient-demo-text">{patient.gender}, {patient.age}</p>
            <p className="patient-email-text">{patient.email}</p>
            <button className="view-details-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientDetails;