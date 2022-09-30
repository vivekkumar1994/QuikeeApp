
import './App.css';


import axios from 'axios';
import React,{useState,useEffect} from 'react'
import View from './component/view/View';
import {Routes,Route} from "react-router-dom"
import Landingpage from './component/landing/Landingpage';



function App() {
  const [coin,setcoin] = useState([]);
    const [search,setsearch] = useState("")

    useEffect(()=> {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then((res) => {
            setcoin(res.data)
            console.log(res.data);
            localStorage.setItem("data",JSON.stringify(res.data))
        }).catch((err)=> {
            console.log("error=",err);
        })
    },[]);

    const handlechange = (e) => {
           setsearch(e.target.value)
    }

    const handledelete = (e) => {
      console.log(e.target.parentNode);
      e.target.parentNode.remove()
    }
 

    const filtercoin = coin.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
    // console.log(filtercoin);
  return (
 
    <div className='app'>
    <Routes>
      <Route path='/' element={<Landingpage  handlechange={handlechange} filtercoin = {filtercoin} />} exact/>
       
        <Route path="/view" element={<View handledelete ={handledelete}/>}/>
      </Routes>
   
    
    
    </div>
    
  );
}

export default App;
