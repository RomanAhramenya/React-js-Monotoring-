import React from 'react'
import { Route } from 'react-router'
import s from './NewsContent.module.css'
import NewsContentComponent from './NewsContentComponent/NewsContentComponent'
function NewsContent(props) {
    let News = props.state.map((el,index)=>{
        return <div key={index}><NewsContentComponent state={el}/></div>
    })
    return (
        
        <div className={s.container}>
           <Route exact path='/news' render={()=>News}/>
        </div>
        
        
    )
}

export default NewsContent
