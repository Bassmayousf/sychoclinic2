import React, { useContext } from "react";
import Brain from "..//assets/brain (1).svg";
import { Link } from "react-router-dom";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { AuthContext } from "../../AuthContext";
const Navv = () => {
  const authContext = useContext(AuthContext);
  return (
    <nav
      id="nav"
      style={{ backgroundColor: "#fff" }}
      className="navbar border-bottom border-opacity-25 border-secondary border-2 shadow  navbar-expand-lg 
     navbar-light bg-light"
    >
      <div className="container w-75   ">
        <div className="d-flex   w-100 justify-content-center  align-items-center">
          <Link className="navbar-brand  " to='/'>
            <img src={Brain} className="w-25" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  d-flex justify-content-between align-items-center  me-auto mb-2 mb-lg-0">
            <li className="nav-item px-3 ">
              <Link className="nav-link  active " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link " to="/chatbot">
                Chatbot
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link " to="/articles">
                Articles
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link to="test" className="nav-link " href="true">
                Test
              </Link>
            </li>
            {authContext.auth.token ? (
              <li className="nav-item ">
                <button
                  className="btn main-color  rounded-pill  px-5  py-1  "
                  type="submit"
                >
                  <Link className="text-white " to="/account">
                    <FontAwesomeIcon icon={faGear} />
                  </Link>
                </button>
              </li>
            ) : (
              <li className="nav-item ">
                <button
                  className="btn main-color  rounded-pill  px-5  py-1  "
                  type="submit"
                >
                  <Link className="text-white " to="/login">
                    Login
                  </Link>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navv;
