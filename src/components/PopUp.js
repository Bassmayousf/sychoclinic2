import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { } from 'react';

const PopUp = ({serverError}) => {
  return (
    <div className="alert alert-danger d-flex align-items-center justify-content-between alert-dismissible fade show" role="alert">
    <span>{serverError}</span>
    <span><FontAwesomeIcon icon={faClose} className="btn-close" data-bs-dismiss="alert" aria-label="Close"  /></span>
  </div>
  );
}

export default PopUp;
