import React from 'react'
import './style.css'
export default function ItemsList({title , list}) {
  return (
    <div className='itemlist-main-container'>
        <div className='itemlist-title'>{title}</div>
        <div className='itemlist-items'>
            {list.map((e,i)=>(
                <div className='itemlist-item-holder'>
                    <img src={e.icon}/>
                    <p key={i}>{e.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
