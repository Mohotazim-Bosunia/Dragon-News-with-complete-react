import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold">Find Us On</h1>
      <div className="join join-vertical w-full mt-2 ">
        <button className="btn join-item justify-start">
          {" "}
          <FaFacebook></FaFacebook>Facebook
        </button>
        <button className="btn join-item justify-start">
          {" "}
          <FaTwitter></FaTwitter>Twitter
        </button>
        <button className="btn join-item justify-start">
          {" "}
          <FaInstagram></FaInstagram>Instragram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
