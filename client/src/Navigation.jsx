import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navigation() {
  const [parameter, setParameter] = useState('');
  const navigate = useNavigate();

  const openURL = (path) => {
    navigate(`${path}/${parameter}`);
  }

  return (
    <div className="container mx-auto px-4 mt-5 text-center">
      <h3 className="text-2xl font-bold mb-2">Welcome to FEWV's Blog APP</h3>
      <p className="mb-4">A web app for testing Blogs...</p>
      <input
        value={parameter}
        onChange={(e) => setParameter(e.target.value)}
        name="parameter"
        placeholder="Enter Parameter..."
        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
      />
      <div className="btn-section flex space-x-4 mt-4">
        <Link to="/postform" className="py-2 px-4 bg-blue-500 text-white text-sm rounded hover:bg-blue-700">Create Post</Link>
        <Link to="/posts" className="py-2 px-4 bg-blue-500 text-white text-sm rounded hover:bg-blue-700">Get Posts</Link>
        <Link to="/postupdate" className="py-2 px-4 bg-blue-500 text-white text-sm rounded hover:bg-blue-700">Update Post</Link>
        <Link to="/deletepost" className="py-2 px-4 bg-blue-500 text-white text-sm rounded hover:bg-blue-700">Delete Post</Link>
      </div>
      <div className="btn-section flex space-x-4 mt-8 mb-5">
        <button onClick={() => openURL('/post-by-id')} className="py-2 px-4 bg-green-500 text-white text-sm rounded hover:bg-green-700">Get Post By ID</button>
        <button onClick={() => openURL('/posts-by-title')} className="py-2 px-4 bg-green-500 text-white text-sm rounded hover:bg-green-700">Get Post By Title</button>
        <button onClick={() => openURL('/posts-by-tags')} className="py-2 px-4 bg-green-500 text-white text-sm rounded hover:bg-green-700">Get Posts By tags</button>
        <button onClick={() => openURL('/posts-by-category')} className="py-2 px-4 bg-green-500 text-white text-sm rounded hover:bg-green-700">Get Posts By Category</button>
      </div>
    </div>
  );
}

export default Navigation;