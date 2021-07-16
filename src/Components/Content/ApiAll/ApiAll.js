import React from 'react';
import state from '../../../State/redux';
import img from './../../image/bit.gif'
import s from './ApiAll.module.css'
function ApiAll(props) {
    props.fun('https://api.coincap.io/v2/assets?limit=100',state.apiAll);
    let api = props.api.map((el,index)=>{
        let usd=+el.priceUsd;
        let cap=+el.marketCapUsd;
        let prosentusd=+el.changePercent24Hr
        let midlPrice=+el.vwap24Hr
        let supply = +el.supply
        let clas =()=>{
            if(prosentusd<0){
             return   <td className={s.procentRed}>{prosentusd.toFixed(2)}% </td>
            } 
            else if(prosentusd>=0){
                return <td className={s.procent}>{prosentusd.toFixed(2)}% </td>
            }
        }
        let capi = () =>{
            if((cap/1000000000)<1){
                return   <td className={s.cap}>{(cap/1000000).toFixed(2)}m</td>
            } else if((cap/1000000000)>=1){
                return <td className={s.cap}>{(cap/1000000000).toFixed(2)}b</td>
            }
        }
        return <tr key={index} className={s.wraper}>
            <td className={s.rank}>{el.rank}</td>
            <td className={s.name}>{el.name} ({el.symbol}) </td>
            <td className={s.price}>{usd.toFixed(2)}$ </td>
           {capi()}
            <td className={s.midl}>{midlPrice.toFixed(2)}$ </td>
            <td className={s.supply}>{supply.toFixed(2)} </td>
            {clas()}
        </tr>
    })
    let load =()=>{
       if(props.api.length == 0){
           return <div className={s.loadCon}><div className={s.load}><img src={img} alt=''/></div></div>
       }
    }
  
    return (
        <div className={s.container}>
            <table className={s.table}>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>VWAP(24hr)</th>
                    <th>Supply</th>
                    <th>Change(24hr)</th>
                </tr>
                {api}
            </table>
            {load()}
            </div>
            
       
    );
}

export default ApiAll;