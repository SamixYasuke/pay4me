import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import type React from "react";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
