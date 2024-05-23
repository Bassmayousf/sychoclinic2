import React from 'react';
import './test.css'
import { Link } from 'react-router-dom';
const TestConfirm = () => {

  
  return (
    <div id='testconfirm'>
      <div className=" d-flex justify-content-center mt-5 mb-5 ">

<div className="test-msg  w-50 position-relative ">
   <div className="top-layer position-absolute">

   </div>

   <div className="test-msg-content text-center p-5 m-5">
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, perferendis?</p>
       <Link to='/test/testquestion' className="btn w-50 mt-5 test-btn">contenue</Link>
   </div>
</div> 

</div>

    </div>
  );
}

export default TestConfirm;
