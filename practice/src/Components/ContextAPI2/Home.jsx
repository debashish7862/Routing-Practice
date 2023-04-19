import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import './style.css'

export default function Home() {
  return (
    <div className="main">
      <h1>Welcome to my sites</h1>
        <Navbar/>
        <Main/>
    </div>
  )
}
