import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/e-symbol.png";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#6e9bd3] text-center w-full h-auto">
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-[200px] gap-3 h-auto container mx-auto pt-5">
        <div className="flex flex-col justify-start items-start lg:pl-9 pl-5 pb-3">
          <div className="flex items-center justify-center">
            <img className="h-28 w-28 " src={logo} alt="..." />
            <h2 className="font-semibold ml-[-34px] mt-8 ">Educator</h2>
          </div>
          <div>
            <h2 className="text-left font-medium text-gray-800 mt-[-20px] pl-5">
              An open platform for enthusiastic students for growing and gaining
              abilities
            </h2>
          </div>
          <div>
            <h2 className="font-medium py-3 pl-5">
              <span className="pr-1">Copyright</span>
              {/*  <span className="font-bold text-lg">©</span> */}
              <FaRegCopyright className="inline"></FaRegCopyright>
              <span className="pl-1">2022. All Rights Reserved</span>
            </h2>
          </div>
        </div>
        <div className="flex items-center justify-center h-auto pb-2">
          <div className=" border-sky-700 border-l-2 lg:p-6 pl-6">
            <div className="flex flex-col w-1/5 ">
              <Link to="/" className="font-medium pb-2 hover:text-gray-100">
                Home
              </Link>
              <Link
                to="/courses"
                className="font-medium pb-2 hover:text-gray-100"
              >
                Courses
              </Link>
              <Link to="/FAQ" className="font-medium pb-2 hover:text-gray-100">
                FAQ
              </Link>
              <Link to="/blog" className="font-medium pb-2 hover:text-gray-100">
                Blog
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-auto lg:pb-0 pb-3">
          <div className="border-sky-700 border-l-2 p-6">
            <div className="flex flex-col w-1/5">
              <Link to="/" className="mb-2">
                <FaFacebook className="h-7 w-7"></FaFacebook>
              </Link>
              <Link to="/" className="mb-2">
                <FaInstagram className="h-7 w-7"></FaInstagram>
              </Link>
              <Link to="/" className="mb-2">
                <FaTwitter className="h-7 w-7"></FaTwitter>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
