import React from 'react'
import '../Home.css';
import Navbar from './Navbar'
import twitter from './Assets/twitter.svg'
import linkedin from './Assets/linkedin.svg'
import linkedin2 from './Assets/linkedin 2.svg'
import twitter2 from './Assets/twitter2.svg'
import message from './Assets/message.svg'
import answer from './Assets/Message-top.svg'
import call from './Assets/Call.svg'
import wordpress from './Assets/wordpress.svg'
import javascript from './Assets/javascript.svg'
import microsoft from './Assets/microsoft.svg'
import html from './Assets/Html.svg'
import joe from './Assets/IMG-20210822-WA0036.jpg'


export default function Home() {
  return (
    <section>
         < Navbar />
        <div className='first-section'>
            <div className='first-section-1'>
               
                <div className='hi'>
                    <h5>HI THERE</h5>
                    <h3>I AM JONATHAN MMADU</h3>
                    <p>
                        A Passionate FrontEnd Web Developer
                    </p>
                    <a href='https://www.twitter.com/JonathanOnyedi3'> <img src={twitter} alt=''/></a>
                    <a href='https://www.linkedin.com/in/mmadu-jonathan-45a714219'> <img src={linkedin} alt=''/></a>
                </div>
            </div>
            
            <div className='first-section-2'>
            <img src={joe} alt=''/>
            </div>
        </div>
        <div id='second-section'>
            <h2>About Me</h2> 
            <p>Jonathan Mmadu is passionate FrontEnd Developer whose goal 
                is use his skills in solving real technological problems and also help others</p>  

        </div>

        <div id='skill-section'>
            <h1>My Skills</h1>
            <h3>Here are a few skills I possess</h3>
            <div className='skills'>
            <div className='html'>
            <img src={html} alt=''/>
            {/* html section */}
                <div className='html-g'>
                <h5>HTML</h5>
                <div className='html1'>
                <div></div>
                <p></p>
                </div>
                </div>
            </div>
            {/* javascript section */}
            <div className='javascript'>
            <img src={javascript} alt=''/>

                <div className='javascript-g'>
                <h5>Javascript</h5>
                <div className='javascript1'>
                <div></div>
                <p></p>
                </div>
                </div>
            </div>

            {/* microsoft section */}
            <div className='microsoft'>
            <img src={microsoft} alt=''/>

                <div className='microsoft-g'>
                <h5>Microsoft</h5>
                <div className='microsoft1'>
                <div></div>
                <p></p>
                </div>
                </div>
            </div>

                  {/* wordpress section */}
                  <div className='wordpress '>
            <img src={wordpress} alt=''/>

                <div className='wordpress-g'>
                <h5>WordPress</h5>
                <div className='wordpress1'>
                <div></div>
                <p></p>
                </div>
                </div>
            </div>
            </div>
            
        </div>
        
        <div className='third-section'>
            <h1>EDUCATIONAL EXPERIENCE</h1>
            <div className='edu'>
            <div className='education'>
                <h2>Zuri&Ingressive4good</h2>
                <h4>MAY 2022 - AUGUST 2022 </h4>
                <p>FRONTEND WEB DEVELOPMENT</p>
            </div>
            <div className='education'>
                <h2>Side Hustle</h2>
                <h4>AUGUST 2022 - Present</h4>
                <p>REACT JS</p>
            </div>
            <div className='education'>
                <h2>ALX</h2>
                <h4>AUGUST 2022 - Present</h4>
                <p>SOFTWARE ENGINEERING</p>
            </div>
            </div>
        </div>
        <div id='fourth-section'>
            <h1>Get In Touch.</h1>
            <div className='fourth-1'>
            <div className='media'>
                <p>Connect with me on Twitter and LinkedIn</p>
                <div className='soc-media'>
                <a href='https://www.twitter.com/JonathanOnyedi3'> <img src={twitter} alt=''/></a>
                    <a href='https://www.linkedin.com/in/mmadu-jonathan-45a714219'> <img src={linkedin} alt=''/></a>
                    <p> -  Jo_Na_Than</p>
                 </div>
            </div>
            <div className='email'>
                <img src={answer} alt=''/>
                <div className='email-1'>
                    <p>mmadujonathan@gmail.com</p>
                    <p>Send a message Anytime!</p>
                 </div>
            </div>
            <div className='email'>
                <img src={call} alt=''/>
                <div className='email-1'>
                    <p>+234 907 1282 453</p>
                    <p>Send a message Anytime!</p>
                 </div>
            </div>
            </div>
        </div>

        <div id='fifth-section'>
            <div className='jo'>
            <span></span>
            <h1 className='jo-h1    '>Jonathan Mmadu</h1>
            <span></span>
            </div>

            <div className='icons'>
            <a href='https://www.linkedin.com/in/mmadu-jonathan-45a714219'> <img src={linkedin2} alt=''/></a>
            <a href='https://www.twitter.com/JonathanOnyedi3'> <img src={twitter2} alt=''/></a>
            <a href=''><img src={message} alt=''/></a>
            </div>

            <div>
                <p>Copyright &copy; 2021  |  All rights Reserved</p>
            </div>
        </div>



    </section>
  )
}
