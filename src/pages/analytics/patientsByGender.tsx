import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import '../home/dashboardWidgets.css';

import { GENDER_DATA as data } from '../../utils/dummyData';

const PatientsByGender = () => {

  const genderDataWithFill = data.map(item => ({
    ...item,
    fill: item.color
  }));

  return (
    <div className="widget-card patients-gender">
      <h3 className="widget-title">Patients by Gender</h3>
      <div className="gender-content">
        <div className="gender-chart">
          <ResponsiveContainer width="100%" height={120}>
            <PieChart>
              <Pie
                data={genderDataWithFill}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={50}
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="gender-legend">
          {data.map(item => (
            <div key={item.name} className="legend-item">
              <div className="legend-label">
                <span
                  className="legend-dot"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="legend-name">{item.name}</span>
              </div>
              <span className="legend-value">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientsByGender;