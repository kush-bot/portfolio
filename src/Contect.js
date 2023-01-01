import React from 'react'
import './Contect.css'


const Contect =()=> {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxL9xP96f9kl9vgckM8npqjQceHmxQvUzNmAq8sMtgN9wgJNPe-xVAM5oNbL6e0a7O99w/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")


const handleClick = () =>{
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            document.getElementById("msg").innerHTML="Thank you for your feedback!!.."
            setTimeout(function(){
                document.getElementById("msg").innerHTML=""
            },3000)
            form.reset()
        })
        
      
        .catch(error => console.error('Error!', error.message))
        
  })
}

    return (
        <div className='contact'>
            <h2>Contact me on Social Platform</h2>
            <div className = 'icons'>
            <a href="https://www.instagram.com/k__u_s__h/"><i className="icon" class="fa-brands fa-instagram fa-3x" ></i></a>
            <a href="https://twitter.com/Kushal91729011"><i className="icon" class="fa-brands fa-twitter fa-3x"></i></a>
            <a href="https://github.com/kush-bot"><i className="icon" class="fa-brands fa-github fa-3x"></i></a>
            </div>
            
            <div className='mail'>
            <h2>Mail me </h2>
            <i class="fa-solid fa-envelope fa-2x"></i><input type='text' value='kushkushal23112002@gmail.com' disabled></input>
            <h2>Suggestions</h2>
            <form id='form' name='submit-to-google-sheet'>
                <textarea name='Message' id='' rows='15' cols='50' placeholder='any suggestions..'/>
                <div className="buttons">
                <button name='submit' id='submit' type='submit' onClick={handleClick} >Submit</button>
                </div>
            </form>
            <span id='msg'></span>
            </div>
      
        </div>
    )
}

export default Contect
