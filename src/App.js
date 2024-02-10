import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";

import Header from "./components/Header";
import Body from "./components/Body";
import ErrorPage from "./components/ErrorPage";
import Contactus from "./components/Contactus";
import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(() => import("./components/Grocery"));
const AboutUs = lazy(() => import("./components/Aboutus"));

const App = () => {
  return (
    <div className="app">
      <Header></Header>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Lodaing....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/aboutus",
        element: (
          <Suspense fallback={<h1>Lodaing....</h1>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
