import React, { useEffect, useState } from "react";
import "./login.css";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    // Parse the URL to extract the token
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");
    
    // Set the token in the component's state
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    }
  }, []);
  console.log("token"+ token)
  return (
    <div className="w-full h-fit bg-black">
      <div className="head-div">
        <img
          className="logo"
          src="https://s3-alpha-sig.figma.com/img/37f3/2626/1680d9613629542a2474f79f92f7c022?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ExDHJzIbIg-VW1nGMW3-eJ9CNLPdVNSVMokBbJOrtIVi3755XAtardu7TqGztt-n-RC5O0cas5OrR3ngwBiJuftHiaFSgyVuOCkPU~eD09ktGTpihJfYaAfTAA1C-jcizylPTzk7hAuLKZSa4weUTCqU3ZQHeHxOtPyKg2fTGjmBCtMF7qfnWQM1YtUxs5s-lTn6QaGFVvB6UchGHf7Z2SwWdfRfYmBOwM9oXRGbfaHALEXuM2XcFGEk3aTx1HVxNIwgnXGqgjMul5~bo2~gommPavsKripEo5HVO-W-nEFyu5Dy7BHh0afOYCF1i9N39mgcz9k89cmrwUA2rxP~MA__"
          alt=""
        />
        <img src="" alt="" />
      </div>
      <div className="mid-div">
        <div className="data-div">
          <h1>Create a new account</h1>

          <Link to="/home"><a href="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com">
            <div className="google">
              <FaGoogle  className="google-icon text-white" />
              <button className="google-text">Sign Up with Google</button>
            </div>
          </a></Link>
          <div className="account-btn">
            <button>Create an Account</button>
          </div>
          <div className="sign-div">
            <p>
             <Link to="/home">Already have an account?<span>Sign In</span></Link> 
            </p>
          </div>
        </div>
      </div>
      <div className="foot-div">
        <p>© 2023 Reachinbox. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;
