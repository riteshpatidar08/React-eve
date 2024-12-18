import { Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogPostPage from './pages/BlogPostPage';
import { useState } from 'react';
import NotFound from './components/NotFound';
function App() {

  const [post, setPost] = useState([]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/blogs"
          element={<BlogPage post={post} setPost={setPost} />}
        />

        <Route path="/blogs/:id" element={<BlogPostPage post={post} />} />


        <Route path="/about" element={<AboutPage />} />

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
