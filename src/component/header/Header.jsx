import React from 'react'
import "./header.css"
import google from "../../Assets/GOOGL.png"
import facebook from "../../Assets/FB.png"
import amazon from "../../Assets/AMZN.svg"

const Header = () => {
  return (
    <div className='logobox'>
        <div className='box'>
          <div className='boxitem'>
            <div> 
             <h1>Google</h1>
            </div>
            <div>
              <img src={google} alt=""  height="40px"/>
              
            </div>
          </div>
          <div className='usd'><h1>1515 USD</h1></div>
        </div>
        <div className='box'>
          <div className='boxitem'>
            <div> 
             <h1>FACEBOOK</h1>
            </div>
            <div>
              <img src={facebook} alt=""  height="40px"/>
              
            </div>
          </div>
          <div className='usd'><h1>266 USD</h1></div>
        </div>
        <div className='box'>
          <div className='boxitem'>
            <div> 
             <h1>AMAZON</h1>
            </div>
            <div>
              <img src={amazon} alt=""  height="40px"/>
              
            </div>
          </div>
          <div className='usd'>
            <h1> 3116 USD</h1>
           </div>
        </div>
    
    </div>
  )
}

export default Header