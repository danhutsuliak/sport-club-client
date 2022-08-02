import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsBlock from "../../components/news-block/news-block.component";

import "./news.styles.scss";

const News = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.news);
        window.scrollTo(0, 0);
      });
  }, []);

  return (
    <div className="news">
      <h1>Новини </h1>

      <div className="news-wrapper">
        {news?.map((post) => {
          return (
            <Link to={`/news/${post.id}`}>
              <NewsBlock
                key={post.id}
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

export default News;
