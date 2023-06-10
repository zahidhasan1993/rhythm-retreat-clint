import React from "react";
import { useRouteError } from "react-router-dom";
import useChangeTitle from "../Hooks/useChangeTitle";
import Lottie from 'react-lottie';
import ErrorSvg from "../assets/Images/Lottie/error.json"

const Error = () => {
  useChangeTitle("ERROR")
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: ErrorSvg,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page" className="text-center">
      <Lottie options={defaultOptions}></Lottie>
        <i className="text-red-700 text-2xl font-bold">{error.statusText || error.message}</i>
      
    </div>
  );
};

export default Error;
