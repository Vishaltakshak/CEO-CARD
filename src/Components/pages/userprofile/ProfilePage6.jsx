import React from 'react'

export const EmailePreferences = () => {
  return (
    <div container-fluid flex flex-col>
        <div className="page6-heading">
            <div >
                <h1><strong className='text-black'>Email preferences</strong></h1>
                <p className='text-black'>Decide what you want to be notified about, and unsubscribe from what you don't.
                </p>
            </div>
            <div className='flex flex-row'>
                <div className='heading'> <strong className='text-black'>Email preferences:</strong> </div>
                <div className='text-black'>This is the email address you use to sign in. Its also where we send your booking confirmations.</div>
                <div><button className='text-black bg-white'>Manage</button></div>
            </div>
        </div>
    </div>
  )
}
