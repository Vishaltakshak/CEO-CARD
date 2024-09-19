import React from 'react'
export const SecurityOnClick = () => {
  return (
    <div>
        To change your password, we need to send a reset link to your email address

        <div className='flex flex-col'>
            <button>Cancel</button>
            <button>Send Mail</button>
        </div>

    </div>
  )
}

export const TwofactorOnclick=()=>{
    return(
        <>
        <div>
            <p>
            1. Download an authenticator app </p> <br /> <p>If you dont have an authenticator app installed, we recommend Google Authenticator or Microsoft Authenticator.


            </p>
        </div>
        <div>
            <button>Cancel</button>
            <button>Next</button>


        </div>
        </>
    )
}
export const ActiveSessionOnclick=()=>{

}
export const DeleteAccountOnClick=()=>{
    
}