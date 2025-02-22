import React, { useState } from 'react';

export const OtherTravelers = () => {
  // State to control the visibility of the form
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  // Handler to toggle form visibility
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className='bg-white text-black'>
        <div className="page7-heading">
            <h1> <strong>Other travelers</strong></h1>
            <p className='text-black'>Add or edit info about the people you're traveling with.</p>   
        </div>
        
        {/* Button to toggle the form visibility */}
        <div>
          <button 
            className='text-black bg-white border px-4 py-2 rounded-md'
            onClick={toggleForm}
          >
            Add New Traveler
          </button>
        </div>

        {/* Form to add new traveler, only visible if isFormVisible is true */}
        {isFormVisible && (
          <div className='mt-6'>
            <h2 className='text-xl font-semibold'>Add Traveler Information</h2>
            <form className='space-y-4'>
              <div>
                <label htmlFor="name" className="block text-sm">Traveler's Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter name"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm">Traveler's Age</label>
                <input
                  type="number"
                  id="age"
                  placeholder="Enter age"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div>
                <label htmlFor="passport" className="block text-sm">Passport Number</label>
                <input
                  type="text"
                  id="passport"
                  placeholder="Enter passport number"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div className='flex justify-between'>
                <button
                  type="submit"
                  className='text-white bg-blue-500 px-6 py-2 rounded-md'
                >
                  Save Traveler
                </button>
                <button
                  type="button"
                  onClick={toggleForm}
                  className='text-white bg-red-500 px-6 py-2 rounded-md'
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
    </div>
  );
};
