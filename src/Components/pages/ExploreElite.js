import React from 'react'
import AfterLoginLayout from '../layouts/AfterLoginLayout'
import "../../css/pages/ExploreElite.css"
export const ExploreElite = () => {
  return (
    <>
    <AfterLoginLayout>
      
        <div className='Containter-fluid bg-black explore-elite-con'>
            <div className='container pe-0 ps-0'>
                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center flex justify-center items-center flex-col explore-elite-parent'>
                    <h2>Experience Exclusive Privileges</h2>
                    
                    <h5>The ultimate card for luxury, rewards, and perks.</h5>
                    <div className='Hero-con-img'>
                        
                    </div>
                    <div className='Explore-elite-text-con'>
                      <h2 className='text-center'>Get Primary Key Features</h2>
                      <ul>
                        <li> <strong>Rewards Program </strong>- 5x points on travel, cashback offers and many more rewards awaiting your way.</li>
                        <li> <strong>Travel Perks</strong> - Highlight lounge access, free upgrades, or priority boarding for flights</li>
                        <li><strong>Concierge Services</strong> - Personalized services for bookings, reservations, or event planning.</li>
                        <li><strong>Exclusive Offers</strong> - Deals or offers on high-end brands, travel experiences, and dining.</li>
                        <li><strong>Security Features</strong> - Fraud protection, zero-liability policies, and enhanced online safety features.</li>
                      </ul>
            


                    </div>

                </div>
            </div>
        </div>
    </AfterLoginLayout>
    </>
  )
}
