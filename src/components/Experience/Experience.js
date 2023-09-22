import React from 'react'
import './style.css'

export default function Experience(obj) {
  return (
    <div className='experience-main-container'>
        <div className='experience-top-container'>
            <div className='experience-company-position'>
                <div className='experience-company-name'>{obj.company}</div>
                <div className='experience-position'>{obj.position}</div>
            </div>
            <div className='experience-certificate-duration'>
                <div className='experience-certificate-link'>
                    <a href={obj.certificateLink}>Certificate</a>
                </div>
                <div className='experience-duration'>{`${obj.start}-${obj.end}`}</div>
            </div>
        </div>
        <div className='experience-work-details'>
            <ul>
                {obj.workDetails.map((w, i)=>(
                    <li key={i}>{w}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}
