import React from "react";

import "./styles.css";
import Menu from "./Menu";

const Layout = ({ children }) => (
  <>
    <Menu />
    <div className="container">{children}</div>
  </>
);

export default Layout;
