import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NewsContentComponent.module.css'
function NewsContentComponent(props) {
    return (
        <div >
            <NavLink className={s.container} to={'/news/' + props.state.url}>
             <div className={s.img}><img src={props.state.image} alt=''/></div> 
             <div className={s.flexR}>
                 <h1>{props.state.h}</h1>
                 <p className={s.time}>{props.state.time}</p>
                 <p className={s.text}>{props.state.text}</p>
                </div>   
                </NavLink>    
        </div>
    )
}

export default NewsContentComponent
