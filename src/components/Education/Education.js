import React from 'react';
import '../../css/index.css'
import HOC from '../HOC/HOC';

const courseAndGradeInfo = ({data}) => {
    return(
        <div className='education-details'>
            <div className='education-degree-discipline'>{`${data.degree} , ${data.discipline}`}</div>
            <div className='education-grade'>{data.grade}</div>
        </div>
    )
}

const durationInfo = ({data}) => {
    return(
        <div className='education-duration'>
            {`${data.start}-${data.end}`}
        </div>
    )
}

const Education = HOC(courseAndGradeInfo , durationInfo);

export default Education;
