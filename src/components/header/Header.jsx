import React from 'react';
import Undrew from '../assets/undraw_medicine_b-1-ol.svg'

const Header = () => {
  return (
    <div className="container pt-5 ">
    <div className="row  d-flex justify-content-center  align-items-center ">
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
      <div className="col-md-5 col-8 pt-3 ">
        <img className="w-100" src={Undrew} alt='m'/>
      </div>
    </div>
  </div>
  );
}

export default Header;
