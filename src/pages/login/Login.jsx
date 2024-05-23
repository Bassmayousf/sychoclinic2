import React, { useContext, useState } from "react";
import './login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../AuthContext";


const Login = () => {
  const navigate = useNavigate()
  const[email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [errorEmail,setErrorEmail]=useState(false)
  const [errorPassword,setErrorPassword]=useState(false)
  const[errorMessage,setErrorMessage]=useState('')
  const authContext= useContext(AuthContext)


    const handleLogin= async(e)=>{
  e.preventDefault()
  try{
      const response = await axios.post('http://sychoclinicapi2.runasp.net/api/accounts/login',{
        email,
        password,
      })
  console.log(response.data.token)
  const token = response.data.token
  const emailAcc =response.data.email
  const user =response.data.userName
  localStorage.setItem('token',token)
  localStorage.setItem('email',emailAcc)
  localStorage.setItem('user',user)
  authContext.setAuth({token,emailAcc,user})
  navigate('/')

  }catch(error){
console.log(error.response.data)
if(error.response.data ==="Email is incorrect!"){
  setErrorEmail(true)
  setErrorPassword(false)
  setErrorMessage(error.response.data)

}else{
  console.log(errorEmail)
  setErrorEmail(false)
  setErrorPassword(true)
  setErrorMessage(error.response.data)
}


  }
  setEmail('')
  setPassword('')
    }
 
    const handleInputEmailChange=(e)=>{
         setEmail(e.target.value)
    }
     
    const handleInputPasswordChange=(e)=>{
         setPassword(e.target.value)
    }
     
  
  return (
    <section className="d-flex justify-content-center align-items-center vh-100">
      <div className="container w-75  d-flex justify-content-center align-items-center">
        <div className="contant bg-light rounded-4  text-center p-5">
          <h2 className="fw-bold">Welcome again</h2>
          <span className="">Create new account! </span>
          <Link to='/register' >
            <p className="fw-bold d-inline-block"> sign up for free</p>
          </Link>
          <form onSubmit={handleLogin}>
            <div className="input-group flex-nowrap pt-2 m-auto ">
              <span
                className="input-group-text  rounded-pill rounded-end bg-border main-color text-white "
                id="addon-wrapping"
              >
                <FontAwesomeIcon icon={faUser} />
              </span>
              <label htmlFor="validationCustom03" className="form-label"></label>
              <input
                type="email"
                required
                className="form-control  rounded-pill rounded-start border-start-0  bg-border"
                placeholder="email address*"
                name="email"
                value={email}
                onChange={handleInputEmailChange}
                aria-label="email"
                aria-describedby="addon-wrapping"
              />
            </div>
        { errorEmail&&   <div className="error text-start ms-5">
              <span className="">
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className="text-danger"
                />
              </span>
              <h6 className=" text-danger d-inline-block  p-1    ">
                {errorMessage}
              </h6>
            </div>}
            <div className="input-group flex-nowrap pt-2 m-auto ">
              <span
                className="input-group-text  rounded-pill rounded-end bg-border main-color text-white"
                id="addon-wrapping"
              >
                <FontAwesomeIcon
                  icon={faLock}
                  className="border border-2 rounded-circle p-1"
                />
              </span>
              <input
                id="password4"
                type="password"
                className="form-control input border-start-0   border-end-0 bg-border"
                placeholder="password (+8 characters)*"
                name="password"
                value={password}
                onChange={handleInputPasswordChange}
                aria-label="password"
                aria-describedby="addon-wrapping"
              />
              <span
                className="input-group-text   rounded-pill border-start-0 bg-light px-4 rounded-start bg-border  "
                id="addon-wrapping"
              >
                <i
                  id="pass_eye"
                  className=" cursor-icon fa-regular fs-4 fa-eye"
                ></i>
              </span>
            </div>
        {  errorPassword&&  <div className="error text-start ms-5">
              <span className="">
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className="text-danger"
                />
              </span>
              <h6 className="text-danger d-inline-block  p-1  ">
                {errorMessage}
              </h6>
            </div>}

            <div className="form-check py-2 d-flex justify-content-center align-items-center">
              <input
                className="form-check-input p-2  "
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label className="form-check-label p-2 " htmlFor="flexCheckIndeterminate">
                I agree to Sychoclinic 
                <Link to='/term' className="text-decoration-underline text-black" >
                  Terms Conditions
                </Link>
                 and acknowledge the 
                <Link to='/policy' className="text-decoration-underline text-black" >
                  Privacy Policy
                </Link>
              </label>
              <Link to='/' className="ms-5" href="">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="btn my-2 main-color text-white d-block  w-50 m-auto rounded-5"
            >
              Login
            </button>
            {/* <div className="p my-2  ">
              <p className=" fs-2 social  m-auto bg-border rounded-circle  d-inline-block ">
                or
              </p>
            </div> */}
            {/* <div className=" d-flex justify-content-evenly">
              <a
                className="social main-color  d-flex justify-content-center align-items-center rounded-circle"
                href="#"
              >
                {" "}
                <FontAwesomeIcon icon={faApple} classNameName="fs-3 text-white " />
              </a>
              <a
                className="social main-color d-flex justify-content-center align-items-center rounded-circle  "
                href="#"
              >
                {" "}
                <FontAwesomeIcon
                  classNameName="text-white fs-3"
                  icon={faFacebookF}
                />
              </a>
              <a
                className="social main-color d-flex justify-content-center align-items-center rounded-circle"
                href="#"
              >
                {" "}
                <FontAwesomeIcon classNameName="fs-3 text-white" icon={faGoogle} />
              </a>
            </div> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
