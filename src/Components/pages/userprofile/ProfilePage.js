import React, { useState } from 'react'
import AfterLoginLayout from '../../layouts/AfterLoginLayout'
import { ProfilePage1 } from './ProfilePage1'
import { ProfilePage2 } from './ProfilePage2'
import '../../../css/ProfileSection/ProfilePage.css'
import { ProfilePage3 } from './ProfilePage3'
import { PaymentMethod } from './ProfilePage4.jsx'
import { PrivacySettings } from './ProfilePage5.jsx'
import { EmailePreferences } from './ProfilePage6.jsx'
import { OtherTravelers } from './ProfilePage7.jsx'

export const ProfilePage = () => {
    const[active, SetActive]=useState(1)
  return (
    <>
    <AfterLoginLayout>
        <div className="container-fluid bg-black  ">
            <div className="container pe-0 ps-0 flex flex-row m-10">

                <aside className='Proile-page-aside'>
                    <ul className='list-unstyled'>
                        <li onClick={()=>{SetActive(1)}}>Personal Details</li>
                        <li onClick={()=>{SetActive(2)}}>Preferences</li>
                        <li onClick={()=>{SetActive(3)}}>Security</li>
                        <li onClick={()=>{SetActive(4)}}>Payment Details</li>
                        <li onClick={()=>{SetActive(5)}}>Privacy</li>
                        <li onClick={()=>{SetActive(6)}}>Email Notification</li>
                        <li onClick={()=>{SetActive(7)}}>Other Travellers</li>
                    </ul>
                </aside>
                <div className='Profile-main'>
                {active === 1 && <ProfilePage1 />}
                {active === 2 && <ProfilePage2 />}
                {active === 3 && <ProfilePage3 />}
                {active === 4 && <PaymentMethod />}
                {active === 5 && <PrivacySettings />}
                {active === 6 && <EmailePreferences />}
                {active === 7 && <OtherTravelers />}


                </div>



            </div>
        </div>
    </AfterLoginLayout>
    </>
  )
}
