import React from 'react'
import './About.css'


function About() {
    var a;
    
    const handleClick =() => {
  
       
        if(a==1){
       
            
            return a=0;
        }
        else{
            document.getElementById('sk').style.display="flex";
            document.getElementById('prj').style.display="none";
            document.getElementById('btn_skill').style.textDecoration='underline'
            document.getElementById('btn_prj').style.textDecoration='none'
            document.getElementById('btn_skill').style.textDecorationColor='rgb(74, 139, 238)'
            document.getElementById('btn_skill').style.textDecorationStyle='4px'

            return a=1;
        }
    }


    const handleClicktwo = () =>{
       
        if(a==1){
          
            return  a=0;

        }
        else{
            document.getElementById('prj').style.display="flex";
            document.getElementById('sk').style.display="none";
            document.getElementById('btn_prj').style.textDecoration='underline'
            document.getElementById('btn_skill').style.textDecoration='none'
            document.getElementById('btn_prj').style.textDecorationColor='rgb(74, 139, 238)'
            document.getElementById('btn_prj').style.textDecorationStyle='4px'
            return a=1;
        }
    }

    return (
        <div className='aboutPage'>
            <div className='about'>
            <pre><p>Hello, i am kushal ,<br/>
                    I am from Tumkur i have completed my <br/>
                    diploma in computer science in governament<br /> 
                    polytechnic tumkur currently pursuing my <br />
                    degree in SRI SIDDHARTHA INSTITUTE OF TECHNOLY</p></pre>
                </div>


            
       
        <div className="skill_prj">
            <div className="skill">
            <button id ='btn_skill'onClick={handleClick}>Skill</button>
                <h4 id = 'sk'>none</h4>
            </div>
            <div className="prj">
            <button id='btn_prj' onClick={handleClicktwo}>Project</button>
                <h4 id = 'prj'><a href='https://github.com/kush-bot/project.repository'>My Project link</a></h4>
            </div>
        </div>
        

        
        </div>
       
    )
}

export default About
