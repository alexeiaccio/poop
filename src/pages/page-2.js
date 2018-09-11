import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Img from "../components/Img";

export default () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Img
      src={
        "https://i1.wp.com/www.lbarroisjr.com/wp-content/uploads/2016/10/seduction_small.gif?w=1070"
      }
    >
      <p style={{ color: "white" }}>Другой текст</p>
    </Img>
  </Layout>
);
