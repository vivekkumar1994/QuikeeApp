import React from 'react'
import Coin from '../coin/Coin'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'


const Landingpage = ({handlechange,filtercoin}) => {
  return (
    <div className="coinApp">
      
    <Navbar/>
    <Header/>
    <div className="coin-search">
        <h1>Search a currancy</h1>
        <form action="">
            <input type="text" placeholder='search' className='coin-input' onChange={handlechange}/>
        </form>
    </div>
    {
      filtercoin.map(coin => {
        return (
          <Coin key={coin.id} name = {coin.name} current_price =  {coin.current_price} image = {coin.image} symbol = {coin.symbol} market_cap = {coin.market_cap}  total_volume ={coin.total_volume
          } priceChange={coin.price_change_percentage_24h} 
          />
        )
      })

    }
    
  </div>
  )}


export default Landingpage