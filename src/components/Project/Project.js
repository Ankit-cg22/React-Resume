import React from 'react'
import "./style.css"

export default function Project(obj) {
  return (
    <div className='project-main-container'>
        <div className='project-top-container'>
            <div className='project-title-techstack'>
                <div className='project-title'>{obj.title}</div>
                <div className='project-techstack'>
                    {obj.techStack.map((t , i)=> <span id={i}>{`${t} ${i!==obj.techStack.length-1 ?  ', ' : ''}`}</span>)}
                </div>
            </div>
            <div className='project-urls'>
                <div className='project-website-url'>
                    <a href={obj.websiteURL}>Website</a>
                </div>
                <div className='project-github-url'>
                    <a href={obj.githubURL}>Github</a>
                </div>
            </div>
        </div>
        <div className='project-project-description'>
            <ul>
                {obj.projectDescription.map((w, i)=>(
                    <li key={i}>{w}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}
