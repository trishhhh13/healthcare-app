import React from 'react';
import './dashboardWidgets.css';

import { RECENT_APPOINTMENTS as appointments } from '../../utils/dummyData';

const RecentAppointments = () => {
  return (
    <div className="widget-card recent-appointments">
      <h3 className="widget-title">Recent Appointments</h3>
      <div className="appointment-list">
        {appointments.map(apt => (
          <div key={apt.id} className="appointment-item">
            <div className="appointment-avatar">{apt.img}</div>
            <div className="appointment-info">
              <p className="appointment-name">{apt.name}</p>
              <p className="appointment-type">{apt.type}</p>
            </div>
            <div className="appointment-time">
              {apt.time}
            </div>
            <div className={`appointment-status status-${apt.status.toLowerCase()}`}>
              {apt.status}
            </div>
          </div>
        ))}
      </div>
      <div className="widget-footer">
        <a href="#" className="view-all-link">View all appointments &rarr;</a>
      </div>
    </div>
  );
};

export default RecentAppointments;
