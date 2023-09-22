import React from 'react'
import "./style.css"
import BulletPoints from '../BulletPoints/BulletPoints'

export default function Project({projectObject}) {
  return (
    <div className='project-main-container'>
        <div className='project-top-container'>
            <div className='project-title-techstack'>
                <div className='project-title'>{projectObject.title}</div>
                <div className='project-techstack'>
                    {projectObject.techStack.map((t , i)=> <span id={i}>{`${t} ${i!==projectObject.techStack.length-1 ?  ', ' : ''}`}</span>)}
                </div>
            </div>
            <div className='project-urls'>
                <div className='project-website-url'>
                    <a href={projectObject.websiteURL}>Website</a>
                </div>
                <div className='project-github-url'>
                    <a href={projectObject.githubURL}>Github</a>
                </div>
            </div>
        </div>
        <BulletPoints bulletPoints={projectObject.projectDescription}/>
    </div>
  )
}
