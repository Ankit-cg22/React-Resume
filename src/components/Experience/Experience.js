import React from 'react';
import HOC from '../HOC/HOC';
import './style.css'

const designationInfo = ({data})=>{
    return (
        <div>
            {data}
        </div>
    )
}
const experienceInfo = ({data}) => {
    return (
        <div className='experience-certificate-duration'>
            <div className='experience-certificate-link'>
                <a href={data.certificateLink}>Certificate</a>
            </div>
            <div className='experience-duration'>{`${data.start}-${data.end}`}</div>
        </div>
    )
}
const Experience = HOC(designationInfo , experienceInfo);
export default Experience;