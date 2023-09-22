import React from 'react'
import './style.css'

export default function Header() {
  return (
    <div className="header-main-container">
        <div className='header-photo'>
          <img src="./icons/image.jpeg"/>
        </div>
        <div className="header-border-div"></div>
        <div className='header-name-details'>
          <div className='header-name'>ANKIT DAS</div>
          <div className='header-details'>
              Passionate software developer with a strong foundation in full-stack web development. 
              Committed to crafting clean, efficient, and scalable code. Skilled in problem-solving and eager to tackle challenging projects. 
          </div>
        </div>
        <div className="header-border-div"></div>
        <div className='header-contact-info'>
            <ul>
              <li>
                  <div className='header-info-icon'><img src="./icons/email.png"/></div>
                  <p>ankitdas.cg22@gmail.com</p>
              </li>
              <li>
                  <div className='header-info-icon'><img src="./icons/phone.png"/></div>
                  <p>8763328177</p>
              </li>
              <li>
                  <div className='header-info-icon'><img src="./icons/location.png"/></div>
                  <p>Bhubaneswar , Odisha</p>
              </li>
            </ul>
        </div>
    </div>
  )
}
