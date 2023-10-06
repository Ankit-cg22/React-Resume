import React from 'react'
import '../../css/index.css'
export default function BulletPoints({bulletPoints}) {
  return (
    <div className='bulletPoints-work-details'>
      <ul>
          {bulletPoints.map((point, i)=>(
              <li key={i}>{point}</li>
          ))}      
      </ul>
    </div>
  )
}
