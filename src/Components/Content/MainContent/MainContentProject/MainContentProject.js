import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './MainContentProject.module.css'
function MainContentProject(props) {
    let scam =()=>{
        if(props.state.status == 'scam'){
            return  <div className={s.scam}>Scam</div>
        }
    }
    return (
        <div >
             <NavLink className={s.mainContentProject} to={'/project/' + props.state.project}>
                {scam()}
            <div className={s.foto}>
                <img src={props.state.imageMain} alt=''/>
            </div>
            <div className={s.text}>
                <h1>{props.state.name}</h1>
                <div className={s.ContentNav}>
                <ul>
                    <li><span>Начало работы проекта: </span>{props.state.data}</li>
                    <li><span>Процентная ставка: </span><span className={s.procent}>{props.state.procent}</span></li>
                    <li><span>Инвестиционный период: </span>{props.state.period}</li>
                    <li><span>Сумма минимальной инвестиции:</span>{props.state.min}</li>
                    <li><span>Проект принимает платежи через: </span>{props.state.cashIn}</li>
                    <li><span>Вывод в Zolibit: </span>{props.state.cashOut}</li>
                </ul>
            </div>
            </div></NavLink> 
        </div>
    )
}

export default MainContentProject
