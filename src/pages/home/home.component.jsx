import React, { useEffect } from "react";
import Landing from "../../components/landing/landing.component";
import NewsPreview from "../../components/news-preview/news-preview.component";
import StatsPreview from "../../components/stats-preview/stats-preview.component";

import "./home.styles.scss";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <Landing />
      <NewsPreview />
      <StatsPreview />
    </div>
  );
};

export default Home;
