import React from 'react'
import './styles.css'
import OverViewCards from '../overViewCards'
import CommonAreaChart from '../../components/commonAreaChart'
import RecentAppointments from './recentAppointments'

import { PATIENT_DATA } from '../../utils/dummyData';

const Home = () => {
  return (
    <div className='home-container'>
      <p className='home-heading'>Dashboard</p>
      <p className='welcome-message'>Welcome Back!, Dr. Sarah Smith 👋</p>
      <p className='welcome-subtitle'>Here's what's happening with your practice today.</p>

      <OverViewCards />

      <div className='dashboard-grid'>
        <div className='grid-left'>
          <CommonAreaChart
            title="Patient Overview"
            data={PATIENT_DATA}
            dataKey="count"
            yAxisTicks={[0, 20, 40, 60, 80]}
          />
        </div>
        <div className='grid-right'>
          <RecentAppointments />
        </div>
      </div>
    </div>
  )
}

export default Home