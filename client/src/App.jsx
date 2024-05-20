import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';
import DeletePost from './DeletePost';
import Posts from './Posts';
import PostByTitle from './PostByTitle';
import PostByCategory from './PostByCategory'
import PostById from './PostById';
import PostByTag from './PostByTag';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <Routes>
              <Route path="/" element={<Navigation />} />
              <Route path="/postform" element={<CreatePost />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/postupdate" element={<UpdatePost />} />
              <Route path="/deletepost" element={<DeletePost />} />
              <Route path="/posts-by-title/:title" element={<PostByTitle />} />
              <Route path="/posts-by-category/:category" element={<PostByCategory />} />
              <Route path="/post-by-id/:id" element={<PostById />} />
              <Route path="/posts-by-tags/:tag" element={<PostByTag />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;