import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BlogPage({ post, setPost }) {
  console.log(post);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((data) => {
        setPost(data.data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-center text-2xl m-4 font-semibold">Blogs</h1>
      {post.map((post) => (
        <Link
          to={`/blogs/${post.id}`}
          className="text-center font-medium block hover:underline cursor-pointer text-lg"
        >
          {post.title}
        </Link>
      ))}
    </div>
  );
}

export default BlogPage;
