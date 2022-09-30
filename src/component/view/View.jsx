import React from 'react'
import { useState } from 'react'
import "./view.css"
import Navbar from '../navbar/Navbar'
import Header from '../header/Header'


const View = ({handledelete}) => {
    const [data, setdata] = useState(() => {
       
        const savedTodos = localStorage.getItem("data");
     
        if (savedTodos) {
          // return the parsed the JSON object back to a javascript object
          return JSON.parse(savedTodos);
       
        } else {
          
          return [];
        }
      });
  return (
    <div>
      <Navbar/>
      <Header/>
         {data.map((data) => (
            <div className='container'>
          <div key={data.id}>{data.name}</div>
          <div> <img src={data.image} alt="" /></div>
          <div>{data.atl_date}</div>
          <div>{data.current_price}</div>
          <div>{data.total_volume}</div>
          <div><button onClick={handledelete}>Delete</button></div>
          </div>
        ))}
     
    </div>
  )
}

export default View