import React from "react";
import { Link } from "react-router-dom";

const CourseSection = ({ course }) => {
  const {
    course_id,
    course_title,
    course_duration,
    course_details,
    course_image,
    course_price,
    rating,
  } = course;
  return (
    <div>
      <div className="card w-full bg-[#e8e3ea] shadow-xl p-4 border-2 border-violet-900">
        <figure>
          <img src={course_image} alt="..." />
        </figure>
        <div className="card-body p-0 pt-6">
          <h2 className="card-title pb-2 text-2xl font-semibold text-pink-900">
            {course_title}
          </h2>
          <p className="text-start text-gray-500 pb-5">
            {course_details.length > 100 ? (
              <>{course_details.slice(0, 100) + "..."}</>
            ) : (
              course_details
            )}
          </p>
          <div className="card-actions justify-center w-full mb-0">
            <Link
              className="btn w-full mb-0 bg-transparent text-gray-800 text-lg normal-case hover:text-white hover:bg-fuchsia-900"
              to={`/courses/${course_id}`}
            >
              <button className="">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
