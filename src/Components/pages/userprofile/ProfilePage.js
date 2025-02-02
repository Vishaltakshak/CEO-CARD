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
import { Link } from "react-router-dom";

export const ProfilePage = () => {
    const[active, SetActive]=useState(1)
  return (
    <>
    <AfterLoginLayout>
        <div className="container-fluid bg-white  ">
        <button
              className="navbar-toggler aside-toggler text-black"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#Proile-page-aside"
              aria-controls="Proile-page-aside"
              aria-expanded="false"
              aria-label="Toggle Profile aside"
            >
              <span className="navbar-toggler-icon">
                <i class="bi bi-list" aria-hidden="true"></i>
              </span>
            </button>
            <div className="visible md:hidden navbar-collapse" id="Proile-page-aside">
                <ul className='list-unstyled text-black'>
                   <li onClick={()=>{SetActive(1)}}>Personal Details</li>
                   <li onClick={()=>{SetActive(2)}}>Preferences</li>
                   <li onClick={()=>{SetActive(3)}}>Security</li>
                   <li onClick={()=>{SetActive(4)}}>Payment Details</li>
                   <li onClick={()=>{SetActive(5)}}>Privacy</li>
                   <li onClick={()=>{SetActive(6)}}>Email Notification</li>
                   <li onClick={()=>{SetActive(7)}}>Other Travellers</li>
                </ul>
            </div>
            <div className="container pe-0 ps-0 flex flex-row">
            

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
