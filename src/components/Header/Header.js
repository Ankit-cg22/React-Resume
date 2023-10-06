import React from 'react'
import '../../css/index.css'
import profilePic from '../../assets/icons/image.jpeg'
import emailIcon from '../../assets/icons/email.png'
import phoneIcon from '../../assets/icons/phone.png'
import locationIcon from '../../assets/icons/location.png'
export default function Header() {
  return (
    <div className="header-main-container">
        <div className='header-photo'>
          <img src={profilePic} alt="profilePicture"/>
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
                  <div className='header-info-icon'><img src={emailIcon}/></div>
                  <p>ankitdas.cg22@gmail.com</p>
              </li>
              <li>
                  <div className='header-info-icon'><img src={phoneIcon}/></div>
                  <p>8763328177</p>
              </li>
              <li>
                  <div className='header-info-icon'><img src={locationIcon}/></div>
                  <p>Bhubaneswar , Odisha</p>
              </li>
            </ul>
        </div>
    </div>
  )
}
