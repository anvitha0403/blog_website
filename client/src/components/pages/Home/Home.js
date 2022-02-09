import React from 'react'
import Header from "../../Header/Header.js"
import "./Home.css"
import Posts from "../../Posts/Posts.js"
import SideBar from "../../SideBar"

export default function Home() {
  return (
    <>
    <Header/>
      <div className="home">

        <Posts></Posts>
      <SideBar></SideBar>
      
      </div>
      
    </>
  )
}
