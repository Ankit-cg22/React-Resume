import React from 'react'
import './style.css'

export default function Education({educationObject}) {
  return (
    <div className='education-main-container'>
        <div className='education-top-container'>
            <div className='education-institution-name'>
                {educationObject.institution}
            </div>
            <div className='education-duration'>
                {`${educationObject.start}-${educationObject.end}`}
            </div>
        </div>
        <div className='education-details'>
            <div className='education-degree-discipline'>{`${educationObject.degree} , ${educationObject.discipline}`}</div>
            <div className='education-grade'>{educationObject.grade}</div>
        </div>
    </div>
  )
}
