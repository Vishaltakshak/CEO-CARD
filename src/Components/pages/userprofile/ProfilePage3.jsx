import React, { useState } from 'react'
import '../../../css/ProfileSection/ProfilePage.css'
import { SecurityOnClick, TwofactorOnclick } from './ProfilePage3-OnClick.jsx';
export const ProfilePage3 = () => {
    const[Active, setActive] = useState(0);

  return (
    <div className='container-fluid'>
        <div className="profile-page3 pe-0 flex flex-col margin-20 ">
            <div className="page3-heading">
                <h1>Security</h1>
                <h5>Change your security settings, set up secure authentication, or delete your account.</h5>
            </div>
            <hr />
            <div className='Password-con flex flex-row justify-between margin-20'>
                 <div className='heading'>
                     <strong>Password</strong>
                </div>
                     <div>
                     {Active === 0 && (
                         <div className='flex flex-row justify-between'>
                            
                             <p>Reset your password regularly to keep your account secure</p>
                             <div>
                    <button onClick={() => { setActive(1); }} className='Profile3-btn'>Reset</button>
                </div>
                         </div>
                     )}
                     {Active === 1 && <SecurityOnClick Active= {Active} setActive={setActive} />} 
                     </div>
                 
                
            </div>
            <hr />




            <div className='Two-Factor-authentication flex flex-row justify-between margin-20'>
                <div className='heading'><strong>Two-factor authentication</strong></div>

                <div>
                    {Active===0 && (
                        <div className='flex flex-row'>
                            <p>1. Download an authenticator app If you dont have an authenticator app installed, we recommend Google Authenticator or Microsoft Authenticator.</p>

                            <div><button onClick={() => { setActive(1); }}  className='Profile3-btn'>Reset</button></div>

                        </div>
                )}
                {Active===1 && <TwofactorOnclick Active= {Active} setActive={setActive}/>}
                </div>
                
                    
            </div>
            <hr />




            <div className='Active-session flex flex-row justify-between margin-20'> 
            <div className='heading'><strong>Active Session</strong></div>
                <div><p>Selecting "Sign out" will sign you out from all devices except this one. This can take up to 10 minutes.</p></div>
                <div><button  className='Profile3-btn'>SignOut</button></div>
            </div>
            <div className='Delete-account flex flex-row justify-between margin-20'>
            <div className='heading'><strong>Delete Account</strong></div>
                <div><p>Permanently Delete your Account</p></div>
                <div><button  className='Profile3-btn'>Delete Account</button></div>
            </div>

        </div>
    </div>
  )
}
