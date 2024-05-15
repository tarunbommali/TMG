import React from "react";
import { Body } from "./routes/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import AboutUs from "./routes/AboutUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Navbar/>
      <div className="min-h-[80vh]">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);
