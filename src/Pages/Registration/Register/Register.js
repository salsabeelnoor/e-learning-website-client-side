import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
// import book_img from "../../../assets/images/book_pic.jpg";
import "./Register.css";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        handleUpdateUserProfile(name, photoURL);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="reg-container">
      <div className="bgImage w-full lg:min-h-[800px] min-h-[800px] flex flex-col justify-center items-center">
        {/* header  */}
        <div className="lg:mt-[-20px] lg:pb-[18px] mt-[-20px] pb-[28px] lg:text-5xl text-2xl text-center text-gray-200 font-semibold lg:text-gray-900">
          <h2>Get access to All our Course Contents</h2>
        </div>
        {/* form card  */}
        <div className=" card lg:w-[500px] mb-[-20px] w-80 bg-inherit border-2 shadow-2xl shadow-indigo-500/80">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block mb-2 text-base font-medium text-gray-200">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-base font-medium text-gray-200">
                  Your PhotoURL
                </label>
                <input
                  type="text"
                  id="photoURL"
                  name="photoURL"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Your PhotoURL"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-base font-medium text-gray-200">
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
                <label className="block mb-2 text-base font-medium text-gray-200">
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
                className="btn font-normal text-base normal-case text-white bg-transparent border-2 rounded-md border-purple-400 hover:text-white hover:bg-fuchsia-900 hover:border-2 w-full px-5 py-2.5 text-center"
              >
                Sign Up
              </button>
            </form>
            <div className="mb-3">
              <h2 className="text-base text-red-400 text-left font-medium ">
                {error}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
