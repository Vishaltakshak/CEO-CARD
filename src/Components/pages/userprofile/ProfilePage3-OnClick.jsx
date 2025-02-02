import React, { useState } from 'react';
import '../../../css/ProfileSection/ProfilePage.css';

export const SecurityOnClick = ({ Active, setActive }) => {
    return (
        <div className='flex flex-row text-black bg-white'>
            To change your password, we need to send a reset link to your email address
            <div className='flex flex-col justify-end'>
                <button onClick={() => { setActive(0); }} className='Profile3-btn text-black bg-white border-black'>Cancel</button>
                <button className='Profile3-btn text-black bg-white border-black' style={{ width: "120px" }}>Send Mail</button>
            </div>
        </div>
    );
};

export const TwofactorOnclick = ({ Active, setActive }) => {
    return (
        <div className='flex flex-row text-black bg-white'>
            <div>
                <p className='text-black'>1. Download an authenticator app</p>
                <br />
                <p className='text-black'>If you don’t have an authenticator app installed, we recommend Google Authenticator or Microsoft Authenticator.</p>
            </div>
            <div>
                <button onClick={() => { setActive(0); }} className='Profile3-btn text-black bg-white border-black'>Cancel</button>
                <button className='Profile3-btn text-black bg-white border-black'>Next</button>
            </div>
        </div>
    );
};

export const DeleteAccountOnClick = () => {
    return (
        <div className='text-black bg-white'>
            Please check your email. We have sent you the mail.
        </div>
    );
};
