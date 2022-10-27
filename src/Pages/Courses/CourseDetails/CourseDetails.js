import React from "react";
import { FaFileDownload, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const courseDetail = useLoaderData();
  const {
    course_id,
    course_title,
    course_duration,
    course_details,
    course_image,
    course_price,
    rating,
  } = courseDetail;

  const ref = React.createRef();
  return (
    <div className="mx-auto container pb-9 px-4 flex flex-col justify-center items-center">
      <div className="card w-auto bg-[#e8e3ea] shadow-xl p-4 border-2 border-violet-900 my-16">
        <div className="flex justify-end pb-3">
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <FaFileDownload
                onClick={toPdf}
                className="h-6 w-6 cursor-pointer"
                title="Download PDF"
              ></FaFileDownload>
            )}
          </Pdf>
        </div>
        <figure>
          <img src={course_image} alt="..." />
        </figure>
        <div ref={ref} className="card-body p-0 pt-6">
          <h2 className="card-title pb-2 text-2xl font-semibold text-pink-900">
            {course_title}
          </h2>
          <p className="text-start text-gray-500 pb-5">{course_details}</p>
          <div className="card-actions justify-center w-full mb-0"></div>
        </div>
        <hr className="border-1 border-gray-300" />
        <div className="flex lg:flex-row flex-col lg:justify-between items-center pt-3">
          <h1 className="lg:py-0 py-2">
            <span className="font-medium pr-2 ">Course Duration:</span>
            {courseDetail.course_duration} months
          </h1>
          <h1 className="lg:py-0 py-2">
            <span className="font-medium pr-2 ">Course price:</span>{" "}
            {courseDetail.course_price} tk
          </h1>
          <h1 className="flex justify-between lg:py-0 py-2">
            <h1 className="pr-1 font-medium ">{courseDetail.rating}</h1>
            <FaStar className="pt-1 w-5 h-5"></FaStar>
          </h1>
        </div>
      </div>
      <Link
        to={`/checkout/${course_id}`}
        className="btn w-2/4 border-purple-800 mb-0 bg-transparent text-gray-800 text-lg normal-case hover:text-white hover:bg-fuchsia-900 "
      >
        Checkout For This Course
      </Link>
    </div>
  );
};

export default CourseDetails;
