import { Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogPostPage from './pages/BlogPostPage';
import { useState } from 'react';
import NotFound from './components/NotFound';
import CardLayout from './components/CardLayout';
import UserReducerPage from './pages/UserReducerPage';
import FetchDataReducer from './pages/FetchDataReducer';
import LoginPage from './pages/LoginPage'
import Register from './pages/Register';
function App() {

  const [post, setPost] = useState([]);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path="/useReducer" element={<UserReducerPage />} />
        <Route path="/apireducer" element={<FetchDataReducer />} />
        <Route
          path="/blogs"
          element={<BlogPage post={post} setPost={setPost} />}
        />

        <Route path="/blogs/:id" element={<BlogPostPage post={post} />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
