import React, { useState } from 'react';
import '../../../css/ProfileSection/ProfilePage1.css'

export const ProfilePage1 = () => {
    const [Name, setName] = useState('');
    const [DisplayName, SetDisplayName] = useState('');
    const [Mail, SetMail] = useState('');
    const [phn, setPhn] = useState('');
    const [DOB, SetDOB] = useState('');
    const [Nationality, SetNationality] = useState('');
    const [Gender, SetGender] = useState('');
    const [Address, SetAddress] = useState('');
    const [Passport, setPassport] = useState('');

    const HandlePersonalSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ Name, DisplayName, Mail, phn, DOB, Nationality, Gender, Address, Passport });
    };

    return (
        <div className='container-fluid bg-black flex flex-col justify-center items-center'>
            <div className='ps-0'>
              <div className='presonal-details-heading flex '>
                <div>
                <h1>Personal Details</h1>
                <h5>Update your information and find out how it's used.</h5>
                </div>
                
                <div className='Personal-details-profile-con'>
                  <img src="" alt="" />
                </div>
              </div>
                <div className="personal-details-form flex flex-col justify-center items-center">
                    <form onSubmit={HandlePersonalSubmit} action="">
                        {/* Label and Input pairs */}
                        {[
                            { label: 'Name', value: Name, onChange: setName },
                            { label: 'Display Name', value: DisplayName, onChange: SetDisplayName },
                            { label: 'Email Address', value: Mail, onChange: SetMail },
                            { label: 'Phone Number', value: phn, onChange: setPhn },
                            { label: 'Date Of Birth', value: DOB, onChange: SetDOB },
                            { label: 'Nationality', value: Nationality, onChange: SetNationality },
                            { label: 'Gender', value: Gender, onChange: SetGender },
                            { label: 'Address', value: Address, onChange: SetAddress },
                            { label: 'Passport Details', value: Passport, onChange: setPassport }
                        ].map((field) => (
                            <div key={field.label} style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px', justifyContent:"space-between", color:"white" }}>
                                <label htmlFor={field.label} style={{ padding: '10px' }}>{field.label}:</label>
                                <input
                                    className='bg-black personal-details-form-input'
                                    type={field.label === 'Date Of Birth' ? 'date' : field.label === 'Phone Number' ? 'number' : 'text'}
                                    id={field.label}
                                    placeholder={`Enter ${field.label}`}
                                    value={field.value}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    style={{ border: 'none', padding: '10px', color:"#757575"}}
                                />
                            </div>
                        ))}
                        <button type="submit" style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px' }}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};