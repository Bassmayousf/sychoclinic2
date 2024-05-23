import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({name,feedback}) => {
  return (
    
  
        
          <div className="card p-3 bg-light shadow-sm border border-3 text-start  rounded-4" style={{maxHeight:"390px",minHeight:"280px"}}>
            <div className="  p-3  d-flex flex-column justify-content-center align-items-center">
              <h4 className="tag text-center py-2  fw-bold"> {name}</h4>
              <span
                className="d-flex justify-content-around"
                style={{color:"#ee0"}}
              >
                <FontAwesomeIcon className="px-1" icon={faStar} />
                <FontAwesomeIcon className="px-1" icon={faStar} />
                <FontAwesomeIcon className="px-1" icon={faStar} />
                <FontAwesomeIcon className="px-1" icon={faStar} />
                <FontAwesomeIcon className="px-1" icon={faStar} />
              </span>
            </div>
            <p className="text-lead">
              {feedback}
            </p>
        
        </div>
  
      





    
  );
};

export default Card;
