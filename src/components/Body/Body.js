import React from 'react'
import './style.css'
import ItemsList from '../ItemsList/ItemsList'
import { Languages_Info , Techstack_Info , KeyCourses_Info , Experience_Info , Project_Info , Achievements_info, Education_info} from '../../data/data'
import Experience from '../Experience/Experience'
import Project from '../Project/Project'
import Education from '../Education/Education'
export default function Body() {
  return (
    <div className='body-main-container'>
        <div className='body-sidebar'>
            <ItemsList {...Languages_Info}/>
            <ItemsList {...Techstack_Info}/>
            <ItemsList {...KeyCourses_Info}/>
        </div>
        <div className='body-border-div'></div>
        <div className='body-main-div'>
          <div className='body-experience-div'>
              <div className="body-section-title">
                <div className='body-title-container'>Experience</div>
              </div>
              {Experience_Info.map(exp => <Experience {...exp}/>)}
          </div>
          <div className='body-projects-div'>
              <div className="body-section-title">
                <div className='body-title-container'>Projects</div>
                
              </div>
              {Project_Info.map(proj => <Project {...proj}/>)}

          </div>
          <div className='body-education-div'>
              <div className="body-section-title">
                <div className='body-title-container'>Achievements</div>
              </div>
              <ul>
                {Achievements_info.map((ach , i) => <li key={i}>{ach}</li>)}
              </ul>

          </div>
          <div className='body-education-div'>
              <div className="body-section-title">
                <div className='body-title-container'>Education</div>
              </div>
              {Education_info.map(edu => <Education {...edu}/>)}

          </div>
        </div>
    </div>
  )
}
