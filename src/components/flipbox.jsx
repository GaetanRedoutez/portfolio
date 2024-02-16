import React, { useState, useEffect } from 'react'

const FlipBox = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleBox = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div
      className={`flip-box ${isExpanded ? 'expanded' : ''}`}
      onClick={toggleBox}
    >
      <div className="flip-box-inner">
        <div className="flip-box-front">
          <h2>Front Content</h2>
        </div>
        <div className="flip-box-back">
          <h2>Back Content</h2>
        </div>
      </div>
    </div>
  )
}

export default FlipBox
