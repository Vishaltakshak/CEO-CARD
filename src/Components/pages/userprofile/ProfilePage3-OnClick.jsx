import React from 'react'
export const SecurityOnClick = ({Active, setActive}) => {
  return (
    <div className='flex flex-row'>
        To change your password, we need to send a reset link to your email address

        <div className='flex flex-col justify-end'>
            <button onClick={()=>{setActive(0)}}>Cancel</button>
            <button className='Profile3-btn' style={{width:"120px"}}>Send Mail</button>
        </div>

    </div>
  )
}

export const TwofactorOnclick=({Active, setActive})=>{
    return(
        <div className='flex flex-row'>
        <div>
            <p>
            1. Download an authenticator app </p> <br /> <p>If you dont have an authenticator app installed, we recommend Google Authenticator or Microsoft Authenticator.


            </p>
        </div>
        <div>
            <button onClick={()=>{setActive(0)}} className='Profile3-btn'>Cancel</button>
            <button className='Profile3-btn'>Next</button>


        </div>
        </div>
    )
}

export const DeleteAccountOnClick=()=>{
    <div>
        Please check your Email. We have sent you the mail
    </div>
    
}