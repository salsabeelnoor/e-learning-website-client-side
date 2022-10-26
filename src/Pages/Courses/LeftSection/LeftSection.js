import React from "react";
import { Link } from "react-router-dom";

const LeftSection = ({ course }) => {
  const { course_id, course_title } = course;
  return (
    <div className="">
      <h2 className="hover:w-full cursor-pointer py-2 text-xl font-semibold hover:text-pink-800 ">
        <Link to={`/courses/${course_id}`}>{course_title}</Link>
      </h2>
    </div>
  );
};

export default LeftSection;
