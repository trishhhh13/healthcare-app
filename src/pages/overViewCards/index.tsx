import React from 'react'
import Card from './card'
import "./styles.css"
import { OVERVIEW_CARDS } from '../../utils/constants'

const OverViewCards = () => {
  return (
    <div className="overview-cards-container">
      {OVERVIEW_CARDS.map((card, index) => (
        <Card key={index} title={card.title} value={card.value} change={card.change} />
      ))}
    </div>
  )
}

export default OverViewCards