import React from 'react'
import './style.css'
import BulletPoints from '../BulletPoints/BulletPoints'

export default function Experience({experienceObject}) {
  return (
    <div className='experience-main-container'>
        <div className='experience-top-container'>
            <div className='experience-company-position'>
                <div className='experience-company-name'>{experienceObject.company}</div>
                <div className='experience-position'>{experienceObject.position}</div>
            </div>
            <div className='experience-certificate-duration'>
                <div className='experience-certificate-link'>
                    <a href={experienceObject.certificateLink}>Certificate</a>
                </div>
                <div className='experience-duration'>{`${experienceObject.start}-${experienceObject.end}`}</div>
            </div>
        </div>
        <BulletPoints bulletPoints={experienceObject.workDetails}/>
    </div>
  )
}
