import React, { useContext, useEffect, useState } from "react";
import Man from "../../components/assets/man.jpg";
import { AuthContext } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const authContext=useContext(AuthContext)
  const [firstname, setFirstname] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("user");
    if (storedUsername) {
      setFirstname(storedUsername.charAt(0));
    }
  
  }, []);
  
  console.log(authContext)
  const handleLogout =()=>{
    localStorage.clear()
    authContext.setAuth({})
    
    navigate('/');
  }
  console.log(firstname)
  return (
    <div id="account">
      <section className="vh-100  w-100 bg-black row justify-content-center align-items-center flex-column ">
        <div className=" col-lg-8 col-md-6 col-sm-12 h-75 w-sm-100 w-md-50 w-lg-50 ">
          <div className=" d-flex justify-content-center align-items-center flex-column  bgHome p-5  rounded-5">
            <div className=" d-flex justify-content-center align-items-center ">
              <div style={{width:"130px"}} className="  border border-2 rounded-circle border-secondary ">
                <div src={Man} className="w-100 bg-black rounded-circle d-flex align-items-center justify-content-center"style={{color:"blue",fontSize:'80px',fontWeight:"bold"}} alt="man" >{firstname}</div>
              </div>
            </div>
            <div className="text-black py-4 justify-content-between ">
              <div>
                <span>Account: </span>
                <span>{authContext.auth.user}</span>
              </div>
              <div>
                <span>Email: </span>
                <span>{authContext.auth.emailAcc?authContext.auth.emailAcc:authContext.auth.email}</span>
              </div>
              {/* <div>
                <span>Gender </span>
                <span>male</span>
              </div> */}
            </div>
            <button
                  className="btn main-color  rounded-pill  px-5  py-1  "
                  type="submit"
                >
                  <span onClick={handleLogout} className="text-white " >
                    LogOut
                  </span>
                </button>

          </div>
        </div>
      </section>
      {/* <Outlet/> */}
    </div>
  );
};

export default Account;
