import React from 'react'
import '../../../css/ProfileSection/ProfilePage.css'
export const PaymentMethod = () => {
  return (
    <div className="container-fluid">
        <div className="payment-parent-con">
            <div className="page4-heading">
                <h1>Payment methods</h1>
                <p>Securely add or remove payment methods to make it easier when you book.</p>
            </div>
            <div className='flex flex-row justify-between profile4-main'>
                <div><strong>Payment cards:</strong></div>
                 <div>Pay with new card</div>
                <div>
                    <button className='Profile3-btn'>Add Card</button>
                 </div>
            </div>
        </div>
    </div>
  )
}
