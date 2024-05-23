import React from 'react';
import './test.css'

const TestQuestion = () => {
  return (
    <div id='testquestion'>
      <div className=" d-flex justify-content-center mt-5 mb-5 ">

<div className="test-msg  w-50 position-relative ">
   <div className="top-layer position-absolute">

   </div>

   <div className="test-msg-content  p-5 m-5">
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, perferendis?</p>

       <div className="row">
           <div className="col-md-3">

               <div className="btn  mt-5 test-btn" >Answer</div>
           </div>
   
           <div className="col-md-3 ">
   
               <div className="btn  mt-5 test-btn worng-Answer">Answer</div>
           </div>
   
           <div className="col-md-3 ">
   
               <div className="btn  mt-5 test-btn worng-Answer">Answer</div>
           </div>
   
           <div className="col-md-3 ">
   
               <div className="btn  mt-5 test-btn  worng-Answer">Answer</div>
           </div>
   
   
       </div>
   </div>
</div> 

</div>
    </div>
  );
}

export default TestQuestion;
