import React from "react";

const LeftSection = ({ course }) => {
  const { course_id, course_title } = course;
  return (
    <div className="">
      <h2 className="cursor-pointer py-2 text-xl font-semibold hover:text-pink-800">
        {course_title}
      </h2>
    </div>
  );
};

export default LeftSection;
