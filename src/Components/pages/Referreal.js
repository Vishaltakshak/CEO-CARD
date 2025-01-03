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
        <div className='Container-fluid bg-black flex justify-center items-center flex-col refer-parent-con'>
          <h1 className='text-center'>Refer A Friend</h1>
          <div className='refer-frnd-div flex flex-col items-center'>
            <p>Earn 500 extra credit points for every friend who signs up!</p>
            <p>Plus your friends will get up to 250 credit points</p>
            <button className='Refer-learn-more'>
              <a className='btn btn-explore' href='#'>LEARN MORE</a>
            </button>
          </div>
        </div>
        <div className='Container-fluid bg-black'>
          <div className='refer-form-container'>
            <div className='form-heading'>Refer A Friend</div>
            <div className='col-xl-12 col-12 text-center'>
              <hr className='menu-section-break'></hr>
            </div>
            <div className='sub-form-container'>
              <div className='link-container'>
                <p>Invite Link:</p>
                <div className='link-details' ref={contentRef}>YourLink.com/lorem</div>
                <button onClick={handleCopy}>Copy Link</button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className='form-format'>
                  <label htmlFor='input1'>Email Invites:</label>
                  <div className='flex flex-col justify-center items-center input-container'>
                    <input
                      type='text'
                      id='input1'
                      value={input1}
                      onChange={(e) => setInput1(e.target.value)}
                      placeholder='Enter Email'
                    />
                    <input
                      type='text'
                      id='input2'
                      value={input2}
                      onChange={(e) => setInput2(e.target.value)}
                      placeholder='Enter Email'
                    />
                    <input
                      type='text'
                      id='input3'
                      value={input3}
                      onChange={(e) => setInput3(e.target.value)}
                      placeholder='Enter Email'
                    />
                  </div>
                  <button type="submit">Send Invite</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AfterLoginLayout>
    </>
  );
};