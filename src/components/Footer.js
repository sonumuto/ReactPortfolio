import React from 'react';
import './Footer.css'
import instagramicon from '../instagram.png'
import githubicon from '../github.png'
import linkedinicon from '../linkedin.png'

export default function Footer() {
    return(
        <div className='Footer'>
            <ul className='icons'>
                <li className='instagram'>
                    <a href='https://www.instagram.com/sonumuto/'><img src={instagramicon} alt='instagram icon'/></a>
                </li>
                <li className='github'>
                    <a href='https://github.com/sonumuto'><img src={githubicon} alt='github icon'/></a>
                </li>
                <li className='linkedin'>
                    <a href='https://www.linkedin.com/in/umut-yigitoglu/.com'><img src={linkedinicon} alt='linkedin icon'/></a>
                </li>

            </ul>
        </div>
    )
}