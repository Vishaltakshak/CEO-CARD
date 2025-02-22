import React, { useState } from 'react'

export const PrivacySettings = () => {
  // State to manage whether the message should be displayed
  const [message, setMessage] = useState("");

  // Handler for the "Manage" button click
  const handleManageClick = () => {
    // Simulate an API request (replace this with actual API integration later)
    setMessage("API integration required");
    
    // Here you would typically make an API call, for example:
    // fetch('/your-api-endpoint', { method: 'POST' })
    //    .then(response => response.json())
    //    .then(data => {
    //      setMessage("API response received!");
    //    })
    //    .catch(error => {
    //      setMessage("Error: API request failed");
    //    });
  }

  return (
    <div className='text-black bg-white flex flex-col'>
        <div className="page5-heading">
            <h1 className='text-black'>Privacy settings</h1>
            <p className='text-black'>
              Exercise your privacy rights and control how your data is used.
            </p>
        </div>
        
        <div className='flex flex-row'>
            <div className='Heading'>
                <strong className='text-black'>Privacy settings:</strong>
            </div>
            <div className='text-black'>
                Select "Manage" to change your privacy settings and exercise your rights using our request form.
            </div>
            <div>
                <button 
                  className='text-black bg-white border px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none'
                  onClick={handleManageClick}
                >
                  Manage
                </button>
            </div>
        </div>

        {/* Display message when button is clicked */}
        {message && (
          <div className="mt-4 text-sm text-gray-600">
            {message}
          </div>
        )}
    </div>
  )
}
