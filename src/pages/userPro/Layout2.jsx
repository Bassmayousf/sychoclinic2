import { faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css";
import { faBookmark, faHeart } from "@fortawesome/free-regular-svg-icons";

const Layout2 = () => {
  return (
    <>
   

      <div
        className="wrapper"
        style={{ backgroundColor: "black", color: "white" }}
      >
      
<div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-black">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <div className="d-flex  color-white justify-content-center flex-row align-items-center ">
            <button
              className="toggle-btn"
              style={{
                border: "none",
                paddingLeft:"6px"
              }}
              type="button"
            >
              <FontAwesomeIcon
                style={{ color: "white", fontSize: "20px" }}
                icon={faGear}
              />
            </button>
            <h5 style={{ color: "white", paddingLeft: "0px" }}>setting</h5>
          </div>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item my-3">
                        <Link className=" align-middle px-0" to="/account">
              <button className="px-3 py-2 d-flex flex-row align-items-center btnCustom2 rounded-5">
                <FontAwesomeIcon className="fs-4" icon={faUser}/>
                <span className="ms-1 d-none d-sm-inline">Account</span>

              </button>
            </Link>
                    </li>
                    <li className="nav-item my-2">
                        <Link className=" align-middle px-0" to="/account/favorite">
              <button className="px-3 py-2 d-flex flex-row align-items-center btnCustom2 rounded-5">
                <FontAwesomeIcon className="fs-4" icon={faHeart}/>
                <span className="ms-1 d-none d-sm-inline">Favorite</span>

              </button>
            </Link>
            <Link className=" align-middle px-0" to="/account/save">
              <button className="px-3 py-2 d-flex flex-row align-items-center btnCustom2 rounded-5 my-4">
                <FontAwesomeIcon className="fs-4" icon={faBookmark}/>
                <span className="ms-1 d-none d-sm-inline">Saved</span>

              </button>
            </Link>
                    </li>
                
                  
                </ul>
              
            </div>
        </div>
        <div className="col py-3 border-start">
        <Outlet />
        </div>
    </div>
</div>

        {/* ##################################### */}
        {/* <div className="main border-start">
          <div className="text-center">
            <h1>
              <Outlet />
            </h1>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Layout2;
