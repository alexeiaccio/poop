import React from "react";

import Layout from "../components/Layout";
import Img from "../components/Img";
import soup from "../img/Brennnesselspinat.jpg";

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Img src={soup}>Один текст</Img>
  </Layout>
);

export default IndexPage;
