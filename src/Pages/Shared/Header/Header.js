import React from "react";
import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/e-symbol.png";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  //logOut
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="bg-[#b47bc3]">
      <div className="navbar px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact bg-[#b47bc3] dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              <li>
                <Link to="/" className="text-lg font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-lg font-medium">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/FAQ" className="text-lg font-medium">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-lg font-medium">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="btn flex lg:hidden bg-transparent border-2 border-purple-900 text-black hover:text-white hover:bg-fuchsia-900 hover:border-2 mb-2"
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="btn flex lg:hidden bg-transparent border-2 border-purple-900 text-black hover:text-white hover:bg-fuchsia-900 hover:border-2 hover:mr-2"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex">
            <img className="h-16 w-16 z-30 " src={logo} alt="..." />
            <h1 className="pl-0 ml-0 pt-2 z-50 left-5">
              <span className="text-4xl font-bold mr-[2px] text-gray-800">
                <i>E</i>
              </span>
              <span className="mt-3 text-xl text-gray-800 font-semibold">
                ducator
              </span>
            </h1>
          </div>
        </div>
        <div className="navbar-center flex lg:hidden">
          <h1 className="pl-0 ml-0 pt-0 z-50 left-5">
            <span className="text-4xl font-bold mr-[2px] text-gray-800">
              <i>E</i>
            </span>
            <span className="mt-3 text-xl text-gray-800 font-semibold">
              ducator
            </span>
          </h1>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:block">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/" className="text-lg font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-lg font-medium">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/FAQ" className="text-lg font-medium">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="blog" className="text-lg font-medium">
                  Blog
                </Link>
              </li>
              <li>
                <h2>
                  {user?.uid ? (
                    <>
                      <span className="text-lg font-medium">
                        {user?.displayName}
                      </span>
                      <Link
                        onClick={handleLogOut}
                        to="/"
                        className="btn modal-button hidden lg:flex mr-2 bg-transparent border-2 border-purple-900 text-black hover:text-white hover:bg-fuchsia-900 hover:border-2"
                      >
                        Log out
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="btn modal-button hidden lg:flex mr-2 bg-transparent border-2 border-purple-900 text-black hover:text-white hover:bg-fuchsia-900 hover:border-2"
                      >
                        Log in
                      </Link>

                      <Link
                        to="/register"
                        className="btn hidden lg:flex mr-2 bg-transparent border-2 border-purple-900 text-black hover:text-white hover:bg-fuchsia-900 hover:border-2 hover:mr-2"
                      >
                        Register
                      </Link>
                    </>
                  )}
                </h2>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="">
                {user?.photoURL ? (
                  <img
                    className="w-10 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <FaUser></FaUser>
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
