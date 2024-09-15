import React from "react";
import logos from "../assests/logos.png";
import fingerprint from "../assests/fingerprint.png";
import { useNavigate } from 'react-router-dom';


const Auth = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home'); // Navigate to /home route
  };

  return (
    <div className="mx-auto  h-[55rem] md:w-[36rem] w-100% bg-gray-50 flex flex-col justify-evenly items-center">
      <h6 className="text-3xl font-semibold">Login</h6>
      <p className="w-[15rem] text-center">
        By signing in you are agreeing our{" "}
        <a href="" className="text-blue-600">
          Term and privacy policy
        </a>
      </p>

      <div>
        <button className="mx-2 underline text-blue-600">Login</button>
        <button className="mx-2">Register</button>
      </div>

      <input
        className="border-b-2 w-[18rem]"
        type="text"
        placeholder="Email Address"
      />
      <input
        className="border-b-2 w-[18rem]"
        type="password"
        placeholder="Password"
      />

      <div className="flex items-center border-2 text-sm w-[18rem]">
        <input type="checkbox" />{" "}
        <span className="mr-4">Remember password</span>
        <a href="" className="text-blue-600">
          Forget password
        </a>
      </div>

      <button className="bg-blue-500 w-[18rem] px-4 py-2 rounded text-white" onClick={ handleLogin }>
        Login
      </button>

      <span>or connect with</span>

      <img className="h-[4rem]" src={logos} alt="" />
      <img className=" h-[5rem]" src={fingerprint} alt="" />
    </div>
  );
};

export default Auth;