import React, { useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import {
  PieChart,
  Pie,
  ResponsiveContainer
} from 'recharts';
import CommonAreaChart from '../../components/commonAreaChart';
import PatientsByGender from './patientsByGender';
import TopConditions from './topConditions';
import './styles.css';

import { SUMMARY_CARDS, VISIT_DATA, DEPT_DATA } from '../../utils/dummyData';

const Analytics = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  // 👉 yahi ek change hai: color -> fill
  const deptDataWithFill = DEPT_DATA.map(item => ({
    ...item,
    fill: item.color
  }));

  return (
    <div className="analytics-container">

      <div className="analytics-header-row">
        <h2 className="analytics-title">Analytics</h2>

        <div className="analytics-header-actions">
          <button className="date-picker-btn">
            Apr 1 - Apr 30, 2024 <ChevronDown size={16} color="#6b7280" />
          </button>
          <button className="export-btn">
            <Download size={16} color="#6b7280" /> Export
          </button>
        </div>
      </div>


      <div className="analytics-tabs">
        {['Overview', 'Patient Insights', 'Revenue', 'Reports'].map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="summary-cards-grid">
        {SUMMARY_CARDS.map((card, index) => (
          <div key={index} className="summary-card">
            <p className="summary-title">{card.title}</p>
            <div className="summary-value-row">
              <h3 className="summary-value">{card.value}</h3>
              <span className={`summary-change ${card.change.isPositive ? 'positive' : 'negative'}`}>
                {card.change.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2: Charts */}
      <div className="analytics-row-2">

        {/* Visit Trends */}
        <CommonAreaChart
          title="Visit Trends"
          data={VISIT_DATA}
          dataKey="visits"
          yAxisTicks={[0, 1000, 2000, 3000]}
          height={250}
        />

        {/* Department Performance */}
        <div className="analytics-widget">
          <div className="widget-header-row">
            <h3 className="analytics-widget-title">Department Performance</h3>
          </div>
          <div className="dept-content">
            <div className="dept-chart">
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={deptDataWithFill}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                    stroke="#fff"
                    strokeWidth={2}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="dept-legend">
              {DEPT_DATA.map((item, key) => (
                <div key={key} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', color: '#4b5563' }}>
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: item.color,
                        marginRight: 8
                      }}
                    ></span>
                    {item.name}
                  </div>
                  <span style={{ fontWeight: 600, color: '#111827' }}>{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Row 3 */}
      <div
        className="analytics-row-3"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          marginTop: '24px'
        }}
      >
        <PatientsByGender />
        <TopConditions />
      </div>

    </div>
  );
};

export default Analytics;