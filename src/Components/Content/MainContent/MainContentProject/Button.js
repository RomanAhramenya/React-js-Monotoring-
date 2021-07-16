import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './../MainContent.module.css'
let scroll = () =>{
    window.scroll(0,100)
}
function Button(props) {
    return (
        <div className={s.button}>
           <NavLink activeClassName={s.active} to={props.val+ props.id}><button className={s.btn1} onClick={scroll}>{props.id}</button></NavLink>
        </div>
    )
}

export default  Button