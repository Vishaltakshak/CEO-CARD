import React from 'react'

export const PrivacySettings = () => {
  return (
    <div className='text-black bg-white flex flex-col'>
        <div className="page5-heading">
            <h1 className='text-black'>Privacy settings</h1>
            <p className='text-black'>Exercise your privacy rights and control how your data is used.
            </p>
        </div>
        <div className='flex flex-row'>
            <div className='Heading'><strong className='text-black'>Privacy settings:
            </strong></div>
            <div className='text-black'>Select "Manage" to change your privacy settings and exercise your rights using our request form.</div>
            <div><button className='text-black bg-white'>Manage</button></div>
        </div>
    </div>
  )
}
