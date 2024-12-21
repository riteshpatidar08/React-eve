import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import axios from 'axios';

function BlogPage({ post, setPost }) {
  console.log(post);

  const [data, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );

  console.log(data);

  return (
    <div>
      <h1 className="text-center text-2xl m-4 font-semibold">Blogs</h1>
      {post.map((post) => (
        <div key={post.id}>
          <Link
            to={`/blogs/${post.id}`}
            className="text-center font-medium block hover:underline cursor-pointer text-lg"
          >
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
