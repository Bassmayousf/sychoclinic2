import React, { useState } from "react";
import Brains from "../assets/brain (1).svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLongArrowAltUp,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [submit, setSubmit] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://sychoclinicapi2.runasp.net/api/ContactUs",
        formData
      );
      console.log(response);
      setSubmit(true);
    } catch (error) {
      console.log(error);
    }
    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };
  return (
    <footer className="bg-black bg-opacity-75 py-4  ">
      <div className=" row    d-flex justify-content-center m-auto ">
        <div className="col-md-3 py-2   ">
          <h3 className="fw-bold text-start text-white">Contact us</h3>
          <p className="text-white text-opacity-75 ">Send us a message</p>
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <input
              className=" px-2 w-50"
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <input
              className="my-2 px-2 w-50"
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              className=" px-2 w-75 "
              placeholder="Your Message"
              name="message"
              id=""
              cols=""
              rows="3"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>

            {!submit ?   <button
              className="btn bg-dark w-50  rounded-pill my-2   py-1  "
              type="submit"
            >
              <span className="text-white ">
                 submit
              </span>
            </button>:  <button
              className="btn bg-primary w-50  rounded-pill my-2   py-1  "
              type="submit"
            >
              <span className="text-white ">
                 submited
              </span>
            </button> }
          
          </form>
        </div>
        <div className="col-md-2 py-2  ">
          <h3 className="fw-bold text-white">Sitemap</h3>
          <p className="text-white text-opacity-75 fs-5">All our pages</p>
          <ul>
            <li className="py-1 text-white text-opacity-75 ">
              <Link
                to="/"
                className="text-white text-opacity-75"
                href="index.html"
              >
                Home
              </Link>
            </li>
            <li className="py-1 text-white text-opacity-75 ">
              <Link
                to="chatbot"
                className="text-white text-opacity-75"
                href="true"
              >
                ChatBot
              </Link>
            </li>
            <li className="py-1 text-white text-opacity-75 ">
              <Link to="test" className="text-white text-opacity-75" href="tru">
                Test
              </Link>
            </li>
            <li className="py-1 text-white text-opacity-75 ">
              <Link
                to="articles"
                className="text-white text-opacity-75"
                href="true"
              >
                Articles
              </Link>
            </li>
            <li className="py-1 text-white text-opacity-75 ">
              <Link
                to="aboutus"
                className="text-white text-opacity-75"
                href="about-us.html"
              >
                About Us
              </Link>
            </li>
            <li className="py-1 text-white text-opacity-75 ">
              <Link
                to="register"
                className="text-white text-opacity-75"
                href="register-form.html"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 d-flex flex-column align-items-start  text-center ">
          <img src={Brains} className="w-25 ms-md-5 " alt="logo" />
          <div className="d-flex justify-content-start align-items-center">
            <FontAwesomeIcon
              style={{ fontSize: "22px", color: "white" }}
              icon={faPhoneAlt}
            />
            <p className="m-3 text-white text-opacity-75">(02)458-594-96</p>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <FontAwesomeIcon
              style={{ fontSize: "22px", color: "white" }}
              icon={faEnvelope}
            />
            <p className="m-3 text-white text-opacity-75">Email@address.com</p>
          </div>
          <h3 className="fw-bold ms-md-5 py-4 text-white"> follow</h3>
          <div className="d-flex justify-content-around w-50">
            <a href="true">
              <FontAwesomeIcon
                style={{ fontSize: "22px", color: "white" }}
                icon={faFacebook}
              />
            </a>
            <a href="true">
              <FontAwesomeIcon
                style={{ fontSize: "22px", color: "white" }}
                icon={faInstagram}
              />
            </a>
            <a href="true">
              <FontAwesomeIcon
                style={{ fontSize: "22px", color: "white" }}
                icon={faXTwitter}
              />
            </a>
          </div>
        </div>
        <div className="col-md-1 my-5  text-center d-flex justify-content-center align-items-center ">
          <a href="#nav">
            <div className="arrow border ms-sm-auto  border-5 border-white rounded-circle  d-flex justify-content-center align-items-center">
              <FontAwesomeIcon
                style={{ fontSize: "22px", color: "white" }}
                icon={faLongArrowAltUp}
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
