import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const courseCheckOut = useLoaderData();
  const {
    course_id,
    course_title,
    course_duration,
    course_details,
    course_image,
    course_price,
    rating,
  } = courseCheckOut;
  return (
    <div className="min-h-[800px] flex justify-center items-center flex-col mx-auto container">
      <div className=" card w-full bg-inherit border-2 shadow-lg shadow-indigo-500/30">
        <div className="card-body">
          <form className="flex flex-col px-14">
            <h2 className="mb-2 text-lg font-medium text-gray-500">
              Course Information
            </h2>
            <div className="mb-4">
              <label className="block mb-2 text-base font-medium text-gray-600">
                Course ID
              </label>
              <input
                type="name"
                value={course_id}
                id="name"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                readonly
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-base font-medium text-gray-600">
                Course Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                value={course_title}
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                readOnly
              />
            </div>
            <hr className="border-1 border-gray-300" />
            <h2 className="my-2 text-lg font-medium text-gray-500">
              User Information
            </h2>
            <div className="mb-4">
              <label className="block mb-2 text-base font-medium text-gray-600">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-base font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter Your Email Address"
                required
              />
            </div>
            <div className="mb-3"></div>
            <button
              type="submit"
              className="btn font-medium text-base normal-case text-violet-900 bg-transparent border-2 rounded-md border-purple-400 hover:text-white hover:bg-fuchsia-900 hover:border-2 w-[100px] px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
