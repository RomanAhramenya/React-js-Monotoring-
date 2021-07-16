import React from 'react'
import { Route } from 'react-router'
import s from './MainContent.module.css'
import Button from './MainContentProject/Button'
import MainContentProject from './MainContentProject/MainContentProject'
function MainContent(props) {
    let a = Object.values(props.state)
    let allMainContent = a.map( (el) => {
        console.log(el)
       return  el
    })
    let but = a.map((el,id)=>{
        if(id % 5 == 0){
            console.log(id);
          return <Button val='/main/' id={id/5+1}/>
        }
       })
       let route = allMainContent.map((el,id)=>{
            return <Route exact path={'/main/'+Math.floor(id/5+1)} render={()=><MainContentProject state={el}/>} />
        
        })
    return (
        <div className={s.mainContent}>
       {route}
       <div className={s.butAll}>
           {but}
       </div>
       
        </div>
    )
}

export default MainContent
