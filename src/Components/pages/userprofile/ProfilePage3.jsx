import React, { useState } from 'react';
import '../../../css/ProfileSection/ProfilePage.css';
import { SecurityOnClick, TwofactorOnclick } from './ProfilePage3-OnClick.jsx';

export const ProfilePage3 = () => {
    const [Active, setActive] = useState(0);

    return (
        <div className='bg-white text-black'>
            <div className="profile-page3 pe-0 flex flex-col margin-20 ">
                <div className="page3-heading">
                    <h1 className='text-black'>Security</h1>
                    <h5 className='text-black'>Change your security settings, set up secure authentication, or delete your account.</h5>
                </div>
                <hr className='border-black' />
                <div className='Password-con flex flex-row justify-between margin-20'>
                    <div className='heading'>
                        <strong className='text-black'> Password</strong>
                    </div>
                    <div>
                        {Active === 0 && (
                            <div className='flex flex-row justify-between'>
                                <p className='text-black'>Reset your password regularly to keep your account secure</p>
                                <div>
                                    <button onClick={() => { setActive(1); }} className='Profile3-btn text-black bg-white border-black'>Reset</button>
                                </div>
                            </div>
                        )}
                        {Active === 1 && <SecurityOnClick Active={Active} setActive={setActive} />} 
                    </div>
                </div>
                <hr className='border-black' />
                <div className='Two-Factor-authentication flex flex-row justify-between margin-20'>
                    <div className='heading'><strong className='text-black'>Two-factor authentication</strong></div>
                    <div>
                        {Active === 0 && (
                            <div className='flex flex-row'>
                                <p className='text-black'>1. Download an authenticator app. If you don’t have an authenticator app installed, we recommend Google Authenticator or Microsoft Authenticator.</p>
                                <div>
                                    <button onClick={() => { setActive(1); }} className='Profile3-btn text-black bg-white border-black'>Reset</button>
                                </div>
                            </div>
                        )}
                        {Active === 1 && <TwofactorOnclick Active={Active} setActive={setActive} />}
                    </div>
                </div>
                <hr className='border-black' />
                <div className='Active-session flex flex-row justify-between margin-20'>
                    <div className='heading'><strong className='text-black'>Active Session</strong></div>
                    <div>
                        <p className='text-black'>Selecting "Sign out" will sign you out from all devices except this one. This can take up to 10 minutes.</p>
                    </div>
                    <div>
                        <button className='Profile3-btn text-black bg-white border-black'>Sign Out</button>
                    </div>
                </div>
                <div className='Delete-account flex flex-row justify-between margin-20'>
                    <div className='heading'><strong className='text-black'>Delete Account</strong></div>
                    <div>
                        <p className='text-black'>Permanently delete your account</p>
                    </div>
                    <div>
                        <button className='Profile3-btn text-black bg-white border-black'>Delete Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
