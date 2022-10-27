import React from "react";
import { useLoaderData } from "react-router-dom";

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
    <div>
      <h2>This is checkOut page: {course_id}</h2>
    </div>
  );
};

export default CheckOut;
