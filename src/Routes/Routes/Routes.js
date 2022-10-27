import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseSection from "../../Pages/Shared/CourseSection/CourseSection";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Courses from "../../Pages/Courses/Courses/Courses";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import Register from "../../Pages/Registration/Register/Register";
import Login from "../../Pages/Registration/Login/Login";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorRoute from "../../Pages/ErrorRoute/ErrorRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://e-learning-website-server.vercel.app/courses"),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () =>
          fetch(`https://e-learning-website-server.vercel.app/courses`),
      },
      {
        path: "courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(
            `https://e-learning-website-server.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/FAQ",
        element: <FAQ></FAQ>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://e-learning-website-server.vercel.app/courses/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorRoute></ErrorRoute>,
  },
]);
