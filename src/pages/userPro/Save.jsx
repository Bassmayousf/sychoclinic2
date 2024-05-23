import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Save = () => {
  return (
    <div id='save'>
        <section className="vh-100 w-100 bg-black row justify-content-center align-items-center flex-column ">
      

      <div className=" col-lg-8 col-md-6 col-sm-8  h-75  w-sm-100 w-md-75 w-lg-50 ">
        <div className="h-75 d-flex justify-content-center align-items-center  bgHome p-5  rounded-5">
          <a href="an" className="w-75 my-3">
            <button
              type="submit"
              className="   py-3  d-block w-100  btnCustom m-auto rounded-4"
            >
              Saved Articles
              <FontAwesomeIcon className='ms-2 fs-5' icon={faCirclePlus}/>
            </button>
          </a>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Save;
