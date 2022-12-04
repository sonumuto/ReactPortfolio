import React from 'react';
import './About.css'
import emailicon from '../email-icon.svg';

export default function About() {
    return(
        <div className="About">
            <div className='title'>
                <h1>Umut Yigitoglu</h1>
                <h2>Automation Engineer</h2>
                <h3>github.com/sonumuto</h3>
                <div className='email-container'>
                    <a href="mailto:sumutyigitoglu@hotmail.com">
                    <button className='email-button'><img src={emailicon} className="icon" alt='email icon'></img>Email</button>
                    </a>
                </div>
            </div>
            <div className='description'>
                <h1>About</h1>
                <p>Detail-oriented Automation Engineer that has experience in building mobile, web, and API automation frameworks.</p> 
                <h1>Skills</h1>
                <ul>
                    <li>End-to-End Testing</li>
                    <li>Selenium</li>
                    <li>Appium</li>
                    <li>API Testing</li>
                    <li>Automation Framework Design and Implementation</li>
                </ul> 
            </div>
        </div>
    );
}