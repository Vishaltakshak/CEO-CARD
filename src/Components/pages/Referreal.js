import React from 'react'
import AfterLoginLayout from '../layouts/AfterLoginLayout'
import "../../cssReferAFriend.css"
export const Referreal = () => {
  return (
    <>
    <AfterLoginLayout>
        <h1 className='text-center'>Refer A Friend</h1>
        <div className='refer-frnd-div'>
            <p>
                Earn 500 extra credit points for every friend who signs up!
                Plus your friends will get upto 250 credit points 
            </p>
        </div>
        <a className='btn btn-explore'>LEARN MORE</a>
        {/* <button > LEARN MORE</button> */}

    </AfterLoginLayout>
    </>
  )
}
