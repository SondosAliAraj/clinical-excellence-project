import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ContactsSection from "../components/ContactsSection";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <ContactsSection />
    </>
  );
};

export default Layout;
