import React, { Fragment } from "react";
import CustomFooter from "./CustomFooter";
import CustomNavbar from "./CustomNavbar";

const SinglePage = ({ children, isNavbar, isFooter }) => {
  return (
    <div className="border d-flex flex-column" style={{ minHeight: "100vh" }}>
      {!isNavbar && <CustomNavbar />}
      <div className="container h-100 mb-2">{children}</div>
      {!isFooter && <CustomFooter />}
    </div>
  );
};

export default SinglePage;
