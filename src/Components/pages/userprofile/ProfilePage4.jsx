import React from 'react'
import '../../../css/ProfileSection/ProfilePage.css'
export const PaymentMethod = () => {
  return (
    <div className="bg-white text-black">
        <div className="payment-parent-con">
            <div className="page4-heading">
                <h1>Payment methods</h1>
                <p className='text-black'>Securely add or remove payment methods to make it easier when you book.</p>
            </div>
            <div className='flex flex-row justify-between profile4-main'>
                <div><strong>Payment cards:</strong></div>
                 <div>Pay with new card</div>
                <div>
                    <button className='text-black bg-white'>Add Card</button>
                 </div>
            </div>
        </div>
    </div>
  )
}
