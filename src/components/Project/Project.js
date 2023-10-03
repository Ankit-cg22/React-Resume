import React from 'react';
import HOC from '../HOC/HOC';
import './style.css'

const techStackInfo = ({data}) => {
    return(
        <div className='project-techstack'>
            {data.map((tech , i)=> <span id={i}>{`${tech} ${i!==data.length-1 ?  ', ' : ''}`}</span>)}
        </div>
    )   
}

const projectLinks = ({data}) => {
    return (
        <div className='project-urls'>
            <div className='project-website-url'>
                <a href={data.websiteURL}>Website</a>
            </div>
            <div className='project-github-url'>
                <a href={data.githubURL}>Github</a>
            </div>
        </div>
    )
}
const Project = HOC(techStackInfo , projectLinks);
export default Project;