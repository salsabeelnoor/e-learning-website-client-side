import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSection from "../../Shared/CourseSection/CourseSection";
import LeftSection from "../LeftSection/LeftSection";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="grid lg:grid-cols-layout grid-cols-mobile_layout px-4">
      <div className="mt-20 shadow-xl rounded-xl h-[500px] flex flex-col items-center justify-center bg-gradient-to-b from-[#c798bf] to-indigo-300 lg:ml-7">
        {courses.map((course) => (
          <LeftSection key={course.course_id} course={course}></LeftSection>
        ))}
      </div>
      <div className="lg:px-36 grid lg:grid-cols-3 grid-cols-1 gap-5 py-6 items-center justify-items-center">
        {courses.map((course) => (
          <CourseSection key={course.course_id} course={course}></CourseSection>
        ))}
      </div>
    </div>
  );
};

export default Courses;
