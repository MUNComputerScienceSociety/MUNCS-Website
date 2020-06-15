import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello, World!</h1>
    <Link to="/events/">Events</Link>
  </Layout>
);

export default IndexPage;
