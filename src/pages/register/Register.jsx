import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pref from "../../components/assets/undraw_preferences_popup_re_4qk0.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import PopUp from "../../components/PopUp";
import Popup2 from "../../components/Popup2";

const Register = () => {
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
    policy:false
  });

  const [errorMessages, setErrorMessages] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    policy:''
  });

  const [singUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [serverError,setServerError]=useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [submitted,setSubmitted]=useState('')
  const [submitt,setSubmitt]=useState(false)
  

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();

    const newErrors = {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      confirmPassword: false,
      policy:false
    };

    const newErrorMessages = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      policy:''
    };

    let hasErrors = false;

    if (singUpData.firstName === "") {
      newErrors.firstName = true;
      newErrorMessages.firstName = "This field is required";
      hasErrors = true;
    }

    if (singUpData.lastName === "") {
      newErrors.lastName = true;
      newErrorMessages.lastName = "This field is required";
      hasErrors = true;
    }

    if (singUpData.email === "") {
      newErrors.email = true;
      newErrorMessages.email = "This field is required";
      hasErrors = true;
    }

    if (
      singUpData.password.length < 8 ||
      singUpData.password === "" ||
      !/[A-Z]/.test(singUpData.password) ||
      !/[a-z]/.test(singUpData.password) ||
      !/[0-9]/.test(singUpData.password)||
      ! /[!@#$%^&*()]/.test(singUpData.password)
    ) {
      newErrors.password = true;
      newErrorMessages.password =
        "Password must contain at least 8 characters, including uppercase, lowercase, digits, and special characters.";
      hasErrors = true;
    }

    if (singUpData.password !== singUpData.confirmPassword) {
      newErrors.confirmPassword = true;
      newErrorMessages.confirmPassword =
        "The confirmed password does not match";
      hasErrors = true;
    }
    if(!isChecked){
      newErrors.policy = true;
      newErrorMessages.policy =
        "You must agree to the terms and policy before submitting the form.";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      setErrorMessages(newErrorMessages);
      return;
    }

    try {
      const response = await axios.post(
        "http://sychoclinicapi2.runasp.net/api/accounts/register",
        singUpData
      );
      setSubmitt(true)
      setSubmitted('successful submit')
      
      console.log(response);
      
    } catch (error) {
        console.log(error);
      if (error.response && error.response.data) {
        setServerError(error.response.data);
      } else {
        setServerError("An unexpected error occurred,please try again");
      }
    }

    console.log(singUpData);
    setSignUpData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrorMessages('')
  };

  return (
    <section className="container w-75 py-5" id="register">
      {serverError && <PopUp serverError={serverError} />} 
      {submitt && <Popup2 submitted ={submitted}/>}
      <div className="row p-3 " style={{zIndex:"0"}}>
        <div className="col-xl-5 p-3 d-flex flex-column align-items-center">
          <h2 className="fw-bolder">Sign up for an account</h2>

          <p className="text-muted">
            Already Have An Account?
            <Link to="/login" className="text-decoration-underline text-black ">
              <span className="text-black">Log In</span>
            </Link>
          </p>
          <form onSubmit={submitData} className="w-md-75">
            <input
              type="text"
              className={`py-2 my-3  px-3  rounded-pill  w-100  bg-border formcontrol ${
                errors.firstName ? "is-invalid" : ""
              }`}
              placeholder="First Name"
              name="firstName"
              value={singUpData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && (
              <div className="invalid-feedback">{errorMessages.firstName}</div>
            )}
            <input
              type="text"
              className={`py-2 my-3  px-3  rounded-pill    bg-border form-control ${
                errors.lastName ? "is-invalid" : ""
              }`}
              placeholder="Last Name"
              name="lastName"
              value={singUpData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && (
              <div className="invalid-feedback">{errorMessages.lastName}</div>
            )}
            <input
              type="email"
              className={`py-2 my-3  px-3  rounded-pill    bg-border form-control ${
                errors.email ? "is-invalid" : ""
              }`}
              placeholder="Email"
              name="email"
              value={singUpData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errorMessages.email}</div>
            )}

            <div className="input-group flex-nowrap  m-auto my-3  ">
              <span
                className="input-group-text  rounded-pill rounded-end bg-border main-color text-white"
                id="addon-wrapping"
              >
                <i className="fa-solid border border-2 rounded-circle p-1 fa-lock"></i>
              </span>
              <input
                id="password2"
                type={showPassword ? "text" : "password"}
                className={`py-2 input border-start-0   border-end-0 bg-border form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                placeholder="password (+8 characters)*"
                name="password"
                value={singUpData.password}
                onChange={handleInputChange}
                aria-label="password"
                aria-describedby="addon-wrapping"
              />

              <span
                className="input-group-text   rounded-pill border-start-0 bg-white px-4 rounded-start bg-border  "
                id="addon-wrapping"
                onClick={handlePasswordToggle}
              >
                <FontAwesomeIcon icon={faEye} />
              </span>
            </div>
            {errors.password && (
              <div style={{color:"red"}} className="text-red">{errorMessages.password}</div>
            )}

            <div className="input-group flex-nowrap  m-auto my-3  ">
              <span
                className="input-group-text  rounded-pill rounded-end bg-border main-color text-white"
                id="addon-wrapping"
              >
                <FontAwesomeIcon
                  className="border border-2 rounded-circle p-1"
                  icon={faLock}
                />
              </span>
              <input
                id="password3"
                type={showPassword ? "text" : "password"}
                className={`py-2 input border-start-0   border-end-0 bg-border form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={singUpData.confirmPassword}
                onChange={handleInputChange}
              />

              <span
                className="input-group-text   rounded-pill border-start-0 bg-white px-4 rounded-start bg-border  "
                id="addon-wrapping"
                onClick={handlePasswordToggle}
              >
                <FontAwesomeIcon icon={faEye} />
              </span>
            </div>
            {errors.confirmPassword && (
              <div className="" style={{color:"red"}}>
                {errorMessages.confirmPassword}
              </div>
            )}
            {/* <input
              type="password"
              className={`form-control ${errors.confirmpassword ? "is-invalid" : ""}`}
              placeholder="Confirm Password"
              name="confirmpassword"
              value={singUpData.confirmpassword}
              onChange={handleInputChange}
            />
            {errors.confirmpassword && <div className="invalid-feedback">{errorMessages.confirmpassword}</div>} */}
            <div className="check d-flex justify-content-evenly align-items-center">
              <h6>Gender*</h6>
              <div className="form-check">
                <input
                  type="radio"
                  className={`form-check-input 
                  `}
                  name="gender"
                  value="male"
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className={`form-check-input `}
                  name="gender"
                  value="female"
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>

            <div className="form-check py-2    d-flex justify-content-start align-items-center">
              <input
                className="form-check-input p-2  "
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                id="flexCheckIndeterminate"
              />

              <label
                className="  form-check-label p-2  "
                htmlFor="flexCheckIndeterminate"
              >
                I agree to Sychoclinic{" "}
                <Link
                  to="/term"
                  className="text-decoration-underline  text-black"
                  href="#"
                >
                  Terms & Conditions{" "}
                </Link>{" "}
                and acknowledge the{" "}
                <Link
                  to="/policy"
                  className="text-decoration-underline text-black"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.policy && <div style={{color:"red"}}>{errorMessages.policy}</div>}
            <button
              type="submit"
              className="btn my-2 main-color text-white d-block  w-75 m-auto rounded-5"
            >
              Register
            </button>
          </form>
        </div>
        <div className="col-xl-7 p-3">
          <img src={Pref} alt="preferences" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Register;
