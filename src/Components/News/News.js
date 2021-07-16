import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './News.module.css';
function News(props) {
    let NewsAll = props.state.map((el,id)=>{
       return <NavLink key={id} className={s.NewsId} activeClassName={s.active} to={'/news/'+el.url}><div className={s.NewsId}>{el.name}</div></NavLink>
    })
    return (
        <div className={s.news}>
            <div className={s.newsName}>
               <NavLink className={s.newsName_nav}  to='/news'>Новости</NavLink> 
            </div>
            <div className={s.newsContent}>
                {NewsAll}
            </div>
        </div>
    )
}

export default News
