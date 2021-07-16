import React from 'react';
import { Route } from 'react-router'
import s from './../MainContent/MainContent.module.css'
import Button from './../MainContent/MainContentProject/Button'
import MainContentProject from './../MainContent/MainContentProject/MainContentProject'

function Bottom(props) {
    let a = Object.values(props.state)
    let arr=[];
    let allMainContent = a.map( (el) => {
        if(el.status === 'niz'){
            arr.push(el);
        }
        
       return  el
    }) 
    console.log(arr)
    let but = arr.map((el,id)=>{
        if(id % 5 == 0){
            
          return <Button val='/bottom/' id={id/5+1}/>
        }
       })
       let route = arr.map((el,id)=>{
            return <Route exact path={'/bottom/'+Math.floor(id/5+1)} render={()=><MainContentProject state={el}/>} />
        
        })
    return (
        <div className={s.container}>
              {route}
       <div className={s.butAll}>
           {but}
       </div>
        </div>
    );
}

export default Bottom;