import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./post.styles.scss";

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchPost = () => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => {
          setPost(data.news[postId]);
          console.log(postId);
        });
    };

    fetchPost();
  }, [postId]);

  return (
    <div className="post">
      <h1>{post?.title}</h1>
      <img src={post?.featuredImage} className="float-left" alt="post" />
      {post?.text.split("\n").map((p) => (
        <p>{p}</p>
      ))}
      <Link
        type="button"
        to="/news"
        style={{
          fontSize: "40px",
          margin: "40px",
        }}
      >
        Назад
      </Link>
    </div>
  );
};

export default Post;
