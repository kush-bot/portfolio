import React from 'react'
import './Firsrtpage.css'
import std from '../src/std.jpeg'


function Firstpage() {
    return (
        <div className="first_page">
            <img src={std} height="40%" ></img>
        <div className="text">
            <p>Hii, I am</p>
            <h1>KUSHAL</h1>
            <p>Welcome to my portfolio</p>
        </div>
        </div>
    )
}

export default Firstpage
