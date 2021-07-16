import React from 'react'
import NewProject from './NewProject/NewProject'
import s from './RightBar.module.css'
  
function RightBar(props) {
    let New=[];
    let scam=[];
    let midl=[];
    let fast=[];
    let niz=[];
    let a = props.state;
    for(let key in a){
        if(a[key].status !== 'scam'){
            New.push(a[key])
            if (a[key].status === 'midl'){
                midl.push(a[key]);
            } else if (a[key].status === 'fast'){
                fast.push(a[key]);
            }
            else if (a[key].status === 'niz'){
                niz.push(a[key]);
            }
            
        } else if (a[key].status === 'scam'){
            scam.push(a[key]);
        }
        

    }
    
    return (
        <div className={s.rightBar}>
           <NewProject NewProject={New}  NameHeader='Новинки' url='/main/1'/>
           <NewProject NewProject={scam}  NameHeader='Скам' url='/scam/1'/> 
           <NewProject NewProject={niz}  NameHeader='Низкодоходные' url='/bottom/1'/>
           <NewProject NewProject={midl}  NameHeader='Среднедоходные' url='/midl/1'/> 
           <NewProject NewProject={fast}  NameHeader='Фасты' url='/fast/1'/> 
        </div>
    )
}

export default RightBar
