import React from 'react'
import './style.css'

export default function Education(obj) {
  return (
    <div className='education-main-container'>
        <div className='education-top-container'>
            <div className='education-institution-name'>
                {obj.institution}
            </div>
            <div className='education-duration'>
                {`${obj.start}-${obj.end}`}
            </div>
        </div>
        <div className='education-details'>
            <div className='education-degree-discipline'>{`${obj.degree} , ${obj.discipline}`}</div>
            <div className='education-grade'>{obj.grade}</div>
        </div>
    </div>
  )
}
