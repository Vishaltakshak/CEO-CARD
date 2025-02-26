import React from 'react'
import AfterLoginLayout from '../layouts/AfterLoginLayout'
import "../../css/pages/ExploreElite.css"
export const ExploreElite = () => {
  return (
    <>
    <AfterLoginLayout>
      
        <div className=' bg-white text-black explore-elite-con'>
            <div className='container pe-0 ps-0'>
                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center flex justify-center items-center flex-col explore-elite-parent'>
                    <h2>Experience Exclusive Privileges</h2>
                    
                    <h5>The ultimate card for luxury, rewards, and perks.</h5>
                    <div className='Hero-con-img'>
                        
                    </div>
                    <div className='Explore-elite-text-con bg-white text-black'>
                      <h2 className='text-center text-black'>Get Primary Key Features</h2>
                      <ul>
                        <li className='text-gray-700'> <strong className='text-black'>Rewards Program </strong>- 5x points on travel, cashback offers and many more rewards awaiting your way.</li>
                        <li className='text-gray-700'> <strong className='text-black'>Travel Perks</strong> - Highlight lounge access, free upgrades, or priority boarding for flights</li>
                        <li className='text-gray-700'><strong className='text-black'>Concierge Services</strong> - Personalized services for bookings, reservations, or event planning.</li>
                        <li className='text-gray-700'><strong className='text-black'>Exclusive Offers</strong> - Deals or offers on high-end brands, travel experiences, and dining.</li>
                        <li className='text-gray-700'><strong className='text-black'>Security Features</strong> - Fraud protection, zero-liability policies, and enhanced online safety features.</li>
                      </ul>
            


                    </div>

                </div>
            </div>
        </div>
    </AfterLoginLayout>
    </>
  )
}
