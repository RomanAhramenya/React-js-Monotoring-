import React from 'react'
import state from '../../State/redux';
import s from './ApiCript.module.css'
function ApiCript(props) {
  props.fun('https://api.coincap.io/v2/assets?limit=5',state.api);
let api = props.api.map((el,index)=>{
    let usd=+el.priceUsd;
    return <span key={index} className={s.spanContainer}><span className={s.name}>{el.name}:</span> <span className={s.price}>{usd.toFixed(2)} <span className={s.usd}>USD</span></span></span>
})

  
    return (
        <div className={s.container} >
          <span className={s.text}>Курсы криптовалют на сегодня:</span>  
            {api}
        </div>
    )
}

export default ApiCript