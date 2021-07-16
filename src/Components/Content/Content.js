import React from 'react'
import { Route } from 'react-router'
import UniversalComponentProject from './ComponentsProject/UniversalComponentProject'

import s from './Content.module.css'

function Content(props) {
    let Project =  Object.values(props.Content).map((el,index)=>{
       return <Route key={index} exact path={'/project/'+el.project} render={()=><UniversalComponentProject content={el}/>} />
    })
    return (
        <div className={s.Content}>
       {Project}
        </div>
    )
}

export default Content
