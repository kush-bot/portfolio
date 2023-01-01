import React from 'react'
import './header.css';
import First from "./Firstpage";
import Second from "./secondpage"
import App from "./App"
import About from './About'
import Contact from './Contect'





function header() {
    return (
        <div className='header'>
        <div className='kushal'>
        <h1><span className='first'>K</span><span className='remains'>ushal</span></h1>
        </div>
            <ul>
             
                <li><a href='/home'>Home</a></li>
                <li><a href='/About'>About</a></li>
                <li><a href='/Contact'>Contact</a></li>
            </ul>
            
        </div>
    )
}

export default header
