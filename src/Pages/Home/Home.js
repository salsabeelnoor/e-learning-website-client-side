import React from "react";
import "./Home.css";
import teacher from "../../assets/images/teacher2.png";
import unlimited from "../../assets/images/infinity.png";
import clock from "../../assets/images/time_thumbnail.png";

const Home = () => {
  return (
    <div className="">
      <section className="hero"></section>
      <section className="mx-auto container grid lg:grid-cols-3 grid-cols-1 gap-10 mt-36 border-2 border-red-600 items-center justify-items-center">
        <div className="flex flex-col justify-center items-center w-auto border-2 border-red-600">
          <div className="w-64 ">
            <img className="w-full" src={teacher} alt="" />
          </div>
          <h1>Great Teachers</h1>
          <p>
            Effective & passionate teachers that will help you ace your class
            and dominate that standardize test.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-auto border-2 border-blue-600">
          <div className="w-64">
            <img
              className="w-full border-2 border-green-600 "
              src={clock}
              alt=""
            />
          </div>
          <div className="w-full text-center mt-5">
            <h1 className="font-bold text-2xl text-pink-900">Available 24/7</h1>
            <p className="text-base text-gray-500 pt-1">
              Unlike private tutors or your own teachers, they are available
              24/7 through Educator's online library.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-auto border-2 border-red-600">
          <div>
            <img
              className="w-[150px] border-2 border-red-600"
              src={unlimited}
              alt=""
            />
          </div>
          <h1>Unlimited Access</h1>
          <p>
            Best of all, you get unlimited access to all out 100+ courses so you
            can learn what you want at your own place
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
