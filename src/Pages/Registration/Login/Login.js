import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import "../Register/Register.css";

const Login = () => {
  return (
    <div>
      <div className="reg-container">
        <div className="bgImage w-full lg:min-h-[800px] min-h-[800px] flex flex-col justify-center items-center">
          {/* header  */}
          <div className="lg:mt-[-20px] lg:pb-[28px] mt-[-20px] pb-[28px] lg:text-5xl text-2xl text-center text-gray-200 font-semibold lg:text-gray-900">
            <h2>Thanks For Choosing Us</h2>
          </div>
          {/* form card  */}
          <div className=" card w-80 lg:w-96 bg-inherit border-2 shadow-2xl shadow-indigo-500/80">
            <div className="card-body">
              <form className="flex flex-col">
                <div className="mb-6">
                  <label
                    for="email"
                    className="block mb-2 text-base font-medium text-gray-200"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="password"
                    className="block mb-2 text-base font-medium text-gray-200"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Your Password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn font-normal text-base normal-case text-white bg-transparent border-2 rounded-md border-purple-400 hover:text-white hover:bg-fuchsia-900 hover:border-2 lg:w-full w-auto px-5 py-2.5 text-center"
                >
                  Submit
                </button>
                <h2 className=" text-base font-medium text-gray-200 mt-3 text-center">
                  Also
                </h2>
                <button
                  type="submit"
                  className="btn font-normal text-base text-white bg-transparent border-2 rounded-md border-purple-400 hover:text-white hover:bg-fuchsia-900 hover:border-2 lg:w-full w-auto px-5 py-2.5 my-5 text-center normal-case"
                >
                  <FaGoogle className="mr-2"></FaGoogle>
                  <h2>Google</h2>
                </button>
                <button
                  type="submit"
                  className="btn font-normal text-base text-white bg-transparent border-2 rounded-md border-purple-400 hover:text-white hover:bg-fuchsia-900 hover:border-2 lg:w-full w-auto px-5 py-2.5 text-center normal-case"
                >
                  <FaGithub className="mr-2"></FaGithub>
                  Github
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
