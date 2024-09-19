import React from 'react'

export const ProfilePage2 = () => {
    const handleSubmit =(e)=>{
        console.log("hi")
    }

  return (
    <div className='container-fluid flex flex-col justify-center items-center'> 
        <div className="page2-heading">
            <h1>Prefrences</h1>
            <h6>Change your language, currency, and accessibility requirements.</h6>
        </div>
        <hr />
        <div className="profilepage2-form-con">
            <form onSubmit={handleSubmit} action="">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-between " style={{margin:'10px', padding:'10px'}} >
                        <label htmlFor="Currency">Currency:</label>
                        <input style={{border: "none", backgroundColor:'black', color:'white', marginLeft:'10px'}} type="text" placeholder='Select Your Currency' />
                     </div>
                     <hr />
                     <div className="flex " style={{margin:'10px', padding:'10px'}}>
                        <label htmlFor="Langauge">Language:</label>
                        <input style={{border: "none", backgroundColor:'black', color:'white', marginLeft:'10px'}} type="text" placeholder='Select your language' />
                     </div>
                     
                </div>
                
            </form>
            
        </div>
        <button type="submit" style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px' }}>
                   Submit
                </button>
    </div>
  )
}
