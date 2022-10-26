import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseSection from "../../Pages/Shared/CourseSection/CourseSection";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/courses",
        element: <CourseSection></CourseSection>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/FAQ",
        element: <FAQ></FAQ>,
      },
    ],
  },
]);
