import React from "react";
import "./Home.css";
import teacher from "../../assets/images/teacher2.png";
import unlimited from "../../assets/images/infinity.png";
import clock from "../../assets/images/time_thumbnail.png";
import { useLoaderData } from "react-router-dom";
import CourseSection from "../Shared/CourseSection/CourseSection";

const Home = () => {
  // loader
  const courses = useLoaderData();
  // if (this.props.location.state.showToast) {
  //   //show toast
  //   showToast
  // }
  return (
    <div className="">
      {/* img  */}
      <section className="hero bg-cover bg-no-repeat lg:min-h-[800px] min-h-[200px] "></section>
      <h1 className="mt-28 text-5xl font-semibold text-red-900 text-center">
        We Offer
      </h1>
      {/* service section  */}
      <section className="mx-auto container grid lg:grid-cols-3 grid-cols-1 gap-10 my-24  items-center justify-items-center">
        <div className="flex flex-col justify-center items-center w-auto">
          <div className="w-64 ">
            <img className="w-full" src={teacher} alt="" />
          </div>
          <div className="w-full text-center mt-5">
            <h1 className="font-bold text-2xl text-pink-900">Great Teachers</h1>
            <p className="text-base text-gray-500 pt-1">
              Effective & passionate teachers that will help you ace your class
              and dominate that standardize test.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-auto">
          <div className="w-64">
            <img className="w-full" src={clock} alt="" />
          </div>
          <div className="w-full text-center mt-5">
            <h1 className="font-bold text-2xl text-pink-900">Available 24/7</h1>
            <p className="text-base text-gray-500 pt-1">
              Unlike private tutors or your own teachers, they are available
              24/7 through Educator's online library.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-auto">
          <div>
            <img className="w-[150px]" src={unlimited} alt="" />
          </div>
          <div className="w-full text-center mt-5">
            <h1 className="font-bold text-2xl text-pink-900">
              Unlimited Access
            </h1>
            <p className="text-base text-gray-500 pt-1">
              Best of all, you get unlimited access to all out 100+ courses so
              you can learn what you want at your own place
            </p>
          </div>
        </div>
      </section>
      {/* course section  */}
      <section className="">
        <h1 className="mt-28 text-5xl font-semibold text-red-900 text-center">
          Our Courses
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 justify-items-center items-center gap-28 mx-auto container m-16">
          {courses.slice(0, 3).map((course) => (
            <CourseSection
              key={course.course_id}
              course={course}
            ></CourseSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
