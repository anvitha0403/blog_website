import React from 'react'
import "./SideBar.css"
export default function SideBar() {
  return (
    <div className='side-bar'>
        
        <div className="side-bar-item">
            <span className="side-bar-title">ABOUT</span></div>
                <img src="" alt="" />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis praesentium vel in animi reprehenderit impedit, tempore cumque. Nostrum culpa, placeat officia quos deleniti aspernatur quod? Recusandae impedit ipsum asperiores itaque?
            </p>
        
        <div className="side-bar-item">
           <span className="side-bar-title">CATEGORIES</span>
           <ul className="sidebar-list">
               <li className="side-bar-list-item">Life</li>
               <li className="side-bar-list-item">Music</li>
               <li className="side-bar-list-item">Style</li>
               <li className="side-bar-list-item">Sport</li>
               <li className="side-bar-list-item">Tech</li>
           </ul>


        </div>
        <div className="side-bar-item">
            <span className="side-bar-title">
                FOLLOW US
            </span>
        </div>
        <div className="side-bar-social">
            <li className=" side-icon side-bar-list-item">HOME</li>
               <li className=" side-icon side-bar-list-item">ABOUT</li>
               <li className=" side-icon side-bar-list-item">CONTACT</li>
               <li className=" side-icon side-bar-list-item">WRITE</li>
                <li className=" side-icon side-bar-list-item">LOGOUT</li>

        </div>
        </div>
  )
}
