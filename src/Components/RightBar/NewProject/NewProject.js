import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NewProject.module.css'
function NewProject(props) {
    let Project = props.NewProject.map((el,index)=>{
        if(index<5){
             return <NavLink key={index} to={'/project/' + el.project} className={s.rightBarContent} activeClassName={s.active}>
            <div>
               <img src={el.foto} alt=''/>
               {el.project}
            </div>
        </NavLink>
        }
       
    });
    return (
        <div className={s.newProject}>
            <div className={s.rightBarHeader}>
                {props.NameHeader}
            </div>
            <div className={s.rightBarContentContainer}>
                {Project}
                <NavLink to={props.url}><button>Смотреть все</button></NavLink>
            </div>
        </div>
        
    )
}

export default NewProject
