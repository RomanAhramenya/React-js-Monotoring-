import React from 'react'
import s from './UniversalComponentProject.module.css'
import DisqusAdd from '../../Disqus/Disqus'
function UniversalComponentProject(props) {
    let click = function (){
        document.querySelectorAll('.' + s.containerMarketing).forEach(el=>{
            el.style.display='block'
        })
        document.querySelector('.'+s.clickNone).style.display='inline'
    }
    let click2 = function (){

        document.querySelectorAll('.' + s.containerMarketing).forEach(el=>{
            el.style.display='none'
        })
        document.querySelector('.'+s.clickNone).style.display='none'
    }

    let marketing=props.content.MarketingProject.map((el,index)=>{
        return <div key={index} className={s.containerMarketing}> 
            <div className={s.containerMarketing_name}>
                {el.id}.{el.name}:
            </div>
                <ul className={s.ulMap}>
                    <li>Срок инвестирования: <span>{el.period}</span></li>
                    <li>Лимит на депозит: <span>{el.minDep}</span></li>
                    <li>Прибыль: <span>{el.prib}</span> </li>
                    <li>Возврат депозита: <span>{el.vozvratDep}</span></li>
                    <li>Чистая прибыль: <span>{el.pribChist}</span></li>
                </ul>
            </div>
    })
    let scam =()=>{
        if(props.content.status == 'scam'){
            return <div className={s.scam}>Scam<div>Не вкладывать!!!</div></div>
        }
    }
    return (
        <div className={s.container}>
            {scam()}
            <h1 className={s.h1}>{props.content.name}</h1>
            <p className={s.vstuplenie}>{props.content.VvodInfo}</p>
            <ul className={s.ulHeader}>
                <li>Дата старта: <span>{props.content.data}</span> </li>
                <li>Процентная ставка: <span>{props.content.procent}</span> </li>
                <li>Минимальный депозит: <span>{props.content.min}</span></li>
                <li>Инвестиционный период: <span>{props.content.period}</span></li>
                <li>Принимает: <span>{props.content.cashIn}</span></li>
                <li>Вывод:<span>{props.content.cashOut}</span></li>
                <li>Официальный сайт <a href={props.content.url} rel="noreferrer" target='_blank'>{props.content.project}</a></li>
            </ul>
            <p className={s.pLegenda}>{props.content.legenda}</p>
            <div className={s.img}>
                <img src={props.content.imageFirst} alt=''/>
            </div>
            <h2 >Маркетинг проекта: 
                <button className={s.clickBlock} onClick={click}>читать</button>
                <button className={s.clickNone} onClick={click2}>Х</button>
            </h2>
            {marketing}
            <div className={s.video}>
            <iframe width="716" height="403" src={props.content.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <h3>Партнерская программа:</h3>
            <p className={s.frendProgram}>{props.content.frendProgram}</p>
            <div className={s.imgMarketing}>
                <img src={props.content.imgSecond} alt=''/>
            </div>
            <h4>Отзыв о проетке <a href={props.content.url} rel="noreferrer" target='_blank'>{props.content.project}</a>:</h4>
            <p className={s.review}>{props.content.review}</p>
            <h4>Предупреждение о рисках:</h4>
            <p>Любые инвестиции несут в себе риски и инвестору следует всегда это учитывать, что касается этой компании, то она не исключение. Как правило, риски всегда пропорциональны доходность и чем больший процент предлагает проект, тем выше вероятность потерпеть убытки. Высокодоходные проекты имеют повышенные риски, ведь и доходность предлагают нешуточную, поэтому рекомендую следовать определенным правилам</p>
           <DisqusAdd content={props.content.project} />
        </div>
    )
}

export default UniversalComponentProject
