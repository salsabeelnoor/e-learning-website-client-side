import React from "react";
// import book_img from "../../../assets/images/book_pic.jpg";
import "./Register.css";

const Register = () => {
  return (
    <div className="reg-container">
      <div className="bgImage w-full lg:min-h-[800px] min-h-[800px] flex flex-col justify-center items-center">
        {/* header  */}
        <div className="lg:mt-[-20px] lg:pb-[28px] mt-[-20px] pb-[28px] lg:text-5xl text-2xl text-center text-gray-200 font-semibold lg:text-gray-900">
          <h2>Get access to All our Course Contents</h2>
        </div>
        {/* form card  */}
        <div className=" card lg:w-[500px] w-80 bg-inherit border-2 shadow-2xl shadow-indigo-500/80">
          <div className="card-body">
            <form>
              <div class="mb-6">
                <label
                  for="name"
                  class="block mb-2 text-base font-medium text-gray-200"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="photoURL"
                  class="block mb-2 text-base font-medium text-gray-200"
                >
                  Your PhotoURL
                </label>
                <input
                  type="text"
                  id="photoURL"
                  name="photoURL"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Your PhotoURL"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-base font-medium text-gray-200"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="password"
                  class="block mb-2 text-base font-medium text-gray-200"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Your Password"
                  required
                />
              </div>
              <button
                type="submit"
                class="btn font-normal text-base normal-case text-white bg-transparent border-2 rounded-md border-purple-400 hover:text-white hover:bg-fuchsia-900 hover:border-2 w-full px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
