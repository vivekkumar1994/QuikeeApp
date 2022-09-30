
import React from "react";
import { Link } from "react-router-dom";
import "./coin.css"
const Coin = ({name,image,symbol,current_price
  ,market_cap,total_volume,priceChange
}) => {
    
  return (
 
    <div className="coincontainer">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="" />
          <h1>{name}</h1>
          <p className="coinsymbol">
            {symbol}
          </p>
        </div>
        <div className="coindata">
          <p className="currentprice">{current_price}</p>
          <p className="marketcap">mkt cap:{market_cap.toLocaleString()}</p>
          <p className="coinvalue">
            {total_volume.toLocaleString()}
          </p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{
              priceChange.toFixed(2)}%</p>
          ):(<p className="coin-percent green">
            {priceChange.toFixed(2)}%
          </p>)}
          
       
         
        </div>
   
      </div>
      <Link to="view"><button className="edit">view</button></Link>
      <button className="save">save</button>
  
  
    
  </div>
  )
}

export default Coin