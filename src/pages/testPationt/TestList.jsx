import React from 'react';
import Img from '../../components/assets/businessman-3417761_1280.jpg'
import { Link } from 'react-router-dom';
import './test.css'
const TestList = () => {
  return (
    <div id='test'>
      
<div className="container">



<div className="row justify-content-center m-5">

    <div className="col-md-7 d-flex justify-content-center flex-column align-items-center pt-5 pt-lg-0 ">
        <h2 className="pb-1 fw-bold after position-relative">Sychoclinic.AI</h2>
        <div className="w-100 bgHome border-bottom border-opacity-25 border-secondary border-3 shadow rounded-4 p-3 mt-4 ">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.to
            join with us as a doctor
            click the link Doctors
          </p>
        </div>
      </div>

</div>

<div className="row m-5" >
    <div className="col-md-4 ">

       <div className="img-container  position-relative">
        <div className="img-layer"> <a href='any'>DEPRETION</a></div>
        <img className="w-100" src={Img} alt=""/>
       </div> 

    </div>

    <div className="col-md-4">

        <div className="img-container position-relative">
        <div className="img-layer"> <a href='any'>DEPRETION</a></div>
        <img className="w-100" src={Img} alt=""/>
       </div> 

     </div>

     
     <div className="col-md-4">

        <div className="img-container position-relative">
        <div className="img-layer"> <a href='any'>DEPRETION</a></div>
        <img className="w-100" src={Img} alt=""/>
       </div> 
     </div>


</div>

<div className="row m-5">
    <div className="col-md-4">

       <div className="img-container position-relative">
       <div className="img-layer"> <a href='any'>DEPRETION</a></div>
        <img className="w-100" src={Img} alt=""/>
       </div>  

    </div>

    <div className="col-md-4">

        <div className="img-container position-relative">
         <div className="img-layer"> <a href='any'>DEPRETION</a>
        
            <div className="d-flex justify-content-center  ">

                <Link to='testconfirm' className="btn start-btn text-center  "><h5>Start</h5> 
                </Link>
            </div>

        </div>
         <img className="w-100" src={Img} alt=""/>
        </div> 
        
    

     </div>

     
     <div className="col-md-4">

        <div className="img-container position-relative">
        <div className="img-layer"> <a href='any'>DEPRETION</a></div>
        <img className="w-100" src={Img} alt=""/>
       </div> 

     </div>


</div>


<div className="d-flex justify-content-end test-btn-container">

    <div className="btn w-15  test-btn ">more <i className="fa-solid fa-chevron-down"></i>
    </div>
</div>

</div>

<div className="tests-list-content-footer    ">
<div className="row justify-content-center m-5 mb-0">

    {/* <!-- <div className="col-md-3">

        <div className="btn  mt-5 test-btn" >Answer</div>
    </div> --> */}



    <div className="footer-title   m-3 ">

        <h5 className="text-center test-btn-footer" >or</h5>
    </div>
    <div className="col-md-7 d-flex justify-content-center flex-column align-items-center pt-5 pt-lg-0  ">
        <h2 className="pb-1 fw-bold after position-relative">Sychoclinic.AI</h2>
        <div className="box w-100 bgHome border-bottom border-opacity-25 border-secondary border-3 shadow rounded-4 p-3 mt-4 mb-5 ">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.to
            join with us as a doctor
            click the link Doctors
          </p>
        </div>

        
      </div>
      <div className="d-flex justify-content-end test-btn-container">

        <div className="btn w-15 mb-5 test-btn  test-footer-btn"><Link to='/chatbot'>
        try for free
        </Link>
        
        </div>
    </div>

</div>

</div>
    </div>
  );
}

export default TestList;
