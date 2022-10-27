import React from "react";
import notFound_image from "../../assets/images/notFound_image_thumbnail.png";

const ErrorRoute = () => {
  return (
    <div className="flex justify-center pt-10">
      <img src={notFound_image} alt="" />
    </div>
  );
};

export default ErrorRoute;
