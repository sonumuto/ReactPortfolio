import React from 'react'
import profile from '../Profile.jpeg';
import './Profile.css'


export default function Profile() {
    return(
        <div className='Profile'>
            <img src={profile} alt="profile"/>
        </div>
    );
}