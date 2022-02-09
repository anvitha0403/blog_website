import React from 'react'
import "./TopBar.css"
export default function TopBar() {
  return (
       <>
       <div className='top'>


       <div className="top-left">
           <i class=" top-icon fa-brands fa-facebook-square"></i>
            <i class="top-icon fa-brands fa-instagram"></i>
            <i class="top-icon fa-brands fa-twitter-square"></i>

       </div>


       <div className="top-center">
           <ul className="top-list">
               <li className=" top-icon top-list-item">HOME</li>
               <li className=" top-icon top-list-item">ABOUT</li>
               <li className=" top-icon top-list-item">CONTACT</li>
               <li className=" top-icon top-list-item">WRITE</li>
                <li className=" top-icon top-list-item">LOGOUT</li>

           </ul>


       </div>
       <div className="top-right">
           <div className='top-icon top-img'><i className="   fa-solid fa-user-tie"></i></div>
           <i className="top-icon top-search-icon fa-solid fa-magnifying-glass"></i>
       </div>
       
        </div></>
    
  )
}
