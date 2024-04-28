import React from 'react';
import sign from '../../public/sign.png'
import Nav from './nav';
import "./web.css";
const Web = () => {
  return (
    
    <div>
        <div>
       <nav className="navbar">
      <div className="logo item">
        <img id="logo" src={sign} />
      </div>
      <div class="headline">Share your feelings by Actions....!</div>   
    </nav>
    </div>

    <div className="screen">
            <p className="heading">
              Make your life easy by using this SIGN TALK translator! Talk
              without any Hesitation.
            </p>
            <div className="mario">
              
            </div>
            <div className="text">
              <div class="wrapper">
                
              </div>
            </div>
          </div>




    </div>
    
  );
}

export default Web;
