import React from "react";
import art from "../assets/31c8ba160265427ed823e59e71d06ae1.jpeg";
import art2 from "../assets/5292be15fdacc619a48bfcbb1d90aecb.jpeg";
import art3 from "../assets/download.jpeg";
const CardGroub = () => {
  return (
    <div className="card-group "
    style={{backgroundColor:"#fff",
      borderRadius:"50px",
      padding:"20px",
    }}
    >
      <div className="card d-flex flex-column  justify-content-center align-items-center border-0 "
      style={{
        minHeight:"310px",
          height:"420px",
          minwidth:"314px",
          maxwidth:"390px",
      }}
      >
        <img
          src={art}
          style={{ width: "90%", height: "45%", borderRadius: "70px" }}
          className="card-img-top  mt-4"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title"
          style={{fontSize:"18px"}}
          >
            Mental health inequality in young LGBT+ people demands early
            universal interventions{" "}
          </h5>
          <p className="card-text "
                    style={{fontSize:"14px"}}
                    >
          Mental health inequality in young LGBT+ people demands early universal interventions
          </p>
        </div>
      </div>
      <div className="card d-flex flex-column  justify-content-center align-items-center border-0"
        style={{
          minHeight:"310px",
          maxHeight:"520px",
          minwidth:"314px",
          maxwidth:"470px",
        }}>
        <img
          src={art3}
          style={{ width: "90%", height: "45%", borderRadius: "70px" }}
          className="card-img-top img-fluid   mt-3"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title"
          style={{fontSize:"18px"}}
          >
            Mental health inequality in young LGBT+ people demands early
            universal interventions{" "}
          </h5>
          <p className="card-text "
                    style={{fontSize:"14px"}}
                    >
          Mental health inequality in young LGBT+ people demands early universal interventions
          </p>
        </div>
      </div>
      <div className="card d-flex flex-column  justify-content-center align-items-center border-0"
        style={{
          minHeight:"310px",
          maxHeight:"520px",
          minwidth:"314px",
          maxwidth:"390px",
        }}
      >
        <img
          src={art2}
          style={{ width: "90%", height: "45%", borderRadius: "70px" }}
          className="card-img-top img-fluid   mt-3"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title"
          style={{fontSize:"18px"}}
          >
            Mental health inequality in young LGBT+ people demands early
            universal interventions{" "}
          </h5>
          <p className="card-text "
                    style={{fontSize:"14px"}}
                    >
          Mental health inequality in young LGBT+ people demands early universal interventions
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardGroub;
