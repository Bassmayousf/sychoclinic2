import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcPaypal, faCcVisa,  } from '@fortawesome/free-brands-svg-icons';

const SupportUs = () => {
  return (
    <div id="SUPPORT" className="container py-5">
    <div className=" py-3 d-flex justify-content-center align-items-center flex-column">
      <h2 className="pb-1 fw-bold after position-relative">SUPPORT US</h2>

      <div className="w-75 bgHome border-bottom border-opacity-25 border-secondary border-3 shadow rounded-4 p-3 mt-4 ">
        <p className="fw-bold">
          sub-Title Description There are many variations of passages of Lorem
          Ipsum available, but the
          majority have suffered alteration in some form, by injected humour,
          or randomised words which don't
          look even sli
        </p>
      </div>
      <div className="d-flex  ">
        <a href='any' className="costumSupport px-3 "> <FontAwesomeIcon icon={faCcPaypal} /></a>
        <a href='any' className="costumSupport px-3 "> <FontAwesomeIcon icon={faCcVisa} /></a>
      </div>
      <div></div>
    </div>
  </div>

  


  );
}

export default SupportUs;
