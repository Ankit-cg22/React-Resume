import React from 'react'
import './style.css'
export default function ItemsList({title , list}) {
  return (
    <div className='itemlist-main-container'>
        <div className='itemlist-title'>{title}</div>
        <div className='itemlist-items'>
            {list.map((element,i)=>{
              return(
                <div className='itemlist-item-holder' key={i}>
                    <img src={element.icon} alt="icon"/>
                    <p>{element.text}</p>
                </div>
            )})}
        </div>
    </div>
  )
}
