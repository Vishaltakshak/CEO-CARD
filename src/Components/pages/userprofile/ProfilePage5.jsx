import React from 'react'

export const PrivacySettings = () => {
  return (
    <div className='container-fluid flex flex-col'>
        <div className="page5-heading">
            <h1>Privacy settings</h1>
            <p>Exercise your privacy rights and control how your data is used.
            </p>
        </div>
        <div className='flex flex-row'>
            <div className='Heading'><strong>Privacy settings:
            </strong></div>
            <div>Select "Manage" to change your privacy settings and exercise your rights using our request form.</div>
            <div><button className='Profile3-btn'>Manage</button></div>
        </div>
    </div>
  )
}
