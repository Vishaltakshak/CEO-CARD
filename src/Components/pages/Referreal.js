import React, { useRef, useState } from 'react';
import AfterLoginLayout from '../layouts/AfterLoginLayout';
import "../../css/pages/ReferAFriend.css";

export const Referreal = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const contentRef = useRef(null); // Moved ref declaration outside of CopyContent

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput1("");
    setInput2("");
    setInput3("");
  };

  const handleCopy = async () => {
    try {
      // Get the text content from the div
      const textToCopy = contentRef.current.innerText;
      // Copy the text to the clipboard
      await navigator.clipboard.writeText(textToCopy);
      alert('link copied to clipboard!'); // Alert on successful copy
    } catch (error) {
      console.error('Failed to copy: ', error);
      alert('Failed to copy content.');
    }
  };

  return (
    <>
      <AfterLoginLayout>
        <div className=' bg-white text-black flex justify-center items-center flex-col refer-parent-con'>
          <h1 className='text-center text-black '>Refer A Friend</h1>
          <div className='refer-frnd-div flex flex-col items-center'>
            <p className='text-black'>Earn 500 extra credit points for every friend who signs up!</p>
            <p className='text-black'>Plus your friends will get up to 250 credit points</p>
            <button className='Refer-learn-more'>
              <a className='btn btn-explore text-black ' href='#'>LEARN MORE</a>
            </button>
          </div>
        </div>
        <div className='Container-fluid bg-white'>
          <div className='refer-form-container'>
            <div className='form-heading text-black '>Refer A Friend</div>
            <div className='col-xl-12 col-12 text-center'>
              <hr className='menu-section-break'></hr>
            </div>
            <div className='sub-form-container'>
              <div className='link-container'>
                <p className='text-black '>Invite Link:</p>
                <div className='link-details text-black ' ref={contentRef}>YourLink.com/lorem</div>
                <button className='text-black bg-white' onClick={handleCopy}>Copy Link</button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className='form-format'>
                  <label htmlFor='input1' className='text-black'>Email Invites:</label>
                  <div className='flex flex-col justify-center items-center input-container'>
                    <input
                      type='text'
                      id='input1'
                      value={input1}
                      onChange={(e) => setInput1(e.target.value)}
                      placeholder='Enter Email'
                      className='text-black bg-white '
                    />
                    <input
                      type='text'
                      id='input2'
                      value={input2}
                      onChange={(e) => setInput2(e.target.value)}
                      placeholder='Enter Email'
                      className='text-black bg-white '
                    />
                    <input
                      type='text'
                      id='input3'
                      value={input3}
                      onChange={(e) => setInput3(e.target.value)}
                      placeholder='Enter Email'
                      className='text-black bg-white '
                    />
                  </div>
                  <button  type="submit">Send Invite</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AfterLoginLayout>
    </>
  );
};