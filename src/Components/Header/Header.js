import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

function Header(props) {
    let Click = ()=>{
        
        document.querySelector('.'+s.burger).checked=false;
    }
    let NavBar = props.state.map((el,index)=>{
       return <NavLink key={index} to={'/'+el.to} onClick={Click}  className={s.link} activeClassName={s.active}>
              {el.link}
                   
            </NavLink>
       
    })
    return (
        <div className={s.header}>
            <input id="menu__toggle"  className={s.burger} type="checkbox" />
             <label className={s.menu__btn}  htmlFor="menu__toggle"><div></div><div></div><div></div></label>
            <div className={s.header__logo}>
                <span className={s.header__logo_0}>mistr-</span>
                 <span className={s.header__logo_1}>ca<span className={s.usd}>$</span>h</span>
                 <span className={s.header__logo_0}>.ru</span>
            </div>
            <div className={s.header__navBar}>
               {NavBar}
            </div>
        </div>
    )
}

export default Header
