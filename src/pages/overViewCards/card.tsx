import React from 'react'
import "./styles.css"

interface CardChange {
  value: string;
  text: string;
  isPositive: boolean;
}

const Card = ({ title, value, change }: { title: string, value: string, change?: CardChange }) => {
  return (
    <div className='card-container'>
      <p className='card-title'>{title}</p>
      <p className='card-value'>{value}</p>
      {change && (
        <p className='card-change'>
          <span className={change.isPositive ? 'change-positive' : 'change-negative'}>{change.value}</span> {change.text}
        </p>
      )}
    </div>
  )
}

export default Card