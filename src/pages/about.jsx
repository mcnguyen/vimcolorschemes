import React from "react";

import { useNavigation } from "../hooks/useNavigation";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => {
  useNavigation();
  return (
    <Layout>
      <SEO title="About" />
      <h1 className="title">About vimcs</h1>
      <h2 className="subtitle">What is it?</h2>
      <p>What vimcs is.</p>
      <h2 className="subtitle">Motivation</h2>
      <p>What the motivatin behind vimcs is.</p>
      <h2 className="subtitle">How was it made?</h2>
      <p>How vimcs was made.</p>
      <h2 className="subtitle">Your repo doesn't show up?</h2>
      <p>Instructions</p>
    </Layout>
  );
};

export default AboutPage;
