import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCircleArrowUp, faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './chatbot.css'
import { Link } from 'react-router-dom';
const Chatbot = () => {
  return (
    <div className="container-fluid " id='chatbot'>
        <div className="row justify-content-around  ">
            <div className="col-md-6">
                <h5 className="mt-4">ChatBot 1.0</h5>
            </div>

            <div className="col-md-6">

                <div className="mt-3 d-flex justify-content-end test-btn-container">
    
                    <Link to='/' className="btn w-25  test-btn ">End
                    </Link>
                </div>
            </div>
        
        </div>

        <div className="row">
            
            <div className="col-md-8  m-auto">
            <h5 className="mt-4">ChatBot 1.0</h5>
       <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</p>
       
            <div className="row  justify-content-end  ">
        <div className="col-md-1 text-end  ">
          <FontAwesomeIcon icon={faThumbsUp}/>

        </div>

        <div className=" col-md-1">
          <FontAwesomeIcon icon={faComment}/>

        </div>
        
       </div>
       
        </div>

        </div>


        <h6 className="text-center">user message................</h6>
 
        <div className="row">
            
            <div className="col-md-8  m-auto">
            <h5 className="mt-4">ChatBot 1.0</h5>
       <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</p>
       
            <div className="row  justify-content-end  ">
        <div className="col-md-1 text-end  ">
        <FontAwesomeIcon icon={faThumbsUp}/>

        </div>

        <div className=" col-md-1">
        <FontAwesomeIcon icon={faComment}/>

        </div>
        
       </div>
       
        </div>

        </div>


          <form className="inline">

              <div className="text-center m-5   ">
    
                  <input className="chat-input w-50" type="text " placeholder="message...."  />
                  <FontAwesomeIcon icon={faCircleArrowUp}/>

                </div>
          </form>
              
          
    </div>
  );
}

export default Chatbot;
