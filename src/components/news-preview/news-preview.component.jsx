import React, { useEffect, useState } from "react";

import "./news-preview.styles.scss";
import { Link } from "react-router-dom";
import NewsBlock from "../news-block/news-block.component";

const NewsPreview = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.news);
      });
  }, []);

  return (
    <div className="news-preview" id="news-preview">
      <h2>
        <Link to="/news">Новини</Link>
      </h2>

      <div className="news-wrapper">
        {news
          ?.filter((p) => p.id < 4)
          .map((post) => {
            return (
              <Link key={post.id} to={`/news/${post.id}`}>
                <NewsBlock
                  image={post.featuredImage}
                  title={post.title}
                  text={post.description}
                  date={post.date}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default NewsPreview;
