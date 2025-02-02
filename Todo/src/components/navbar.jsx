import React from 'react'
import './navbar.css'
const navbar = () => {
  return (
    <div>
    
      <nav>
        
        <h1>OP Task</h1>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar
