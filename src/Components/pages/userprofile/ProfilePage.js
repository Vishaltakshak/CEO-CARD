import React from 'react'
import AfterLoginLayout from '../../layouts/AfterLoginLayout'
import { ProfilePage1 } from './ProfilePage1'
import { ProfilePage2 } from './ProfilePage2'

export const ProfilePage = () => {
  return (
    <>
    <AfterLoginLayout>
        <div className="container-fluid bg-black  ">
            <div className="container pe-0 ps-0">

                <aside>
                    <ul className='list-unstyled'>
                        <li>Personal Details</li>
                        <li>Preferences</li>
                        <li>Security</li>
                        <li>Payment Details</li>
                        <li>Privacy</li>
                        <li>Email Notification</li>
                        <li>Other Travellers</li>
                    </ul>
                </aside>
                {/* <ProfilePage1/> */}
                <ProfilePage2></ProfilePage2>


            </div>
        </div>
    </AfterLoginLayout>
    </>
  )
}
