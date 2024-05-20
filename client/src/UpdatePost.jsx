import React, { useState } from 'react';

function UpdatePost() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');

  const updatePost = (event) => {
    event.preventDefault();

    const postData = { id, title, content, category, tags };

    fetch(`http://localhost:3000/postupdate/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert(`Post with id ${id} updated successfully`);
      } else {
        alert(data.message);
      }
    })
  }

  return (
    <div className="container mx-auto px-4 mt-5">
      <h3 className="text-2xl font-bold mb-2">Update Post</h3>
      <p className="mb-4">You can update your post with your post ID.</p>
      <form onSubmit={updatePost} className="space-y-4">
        <div>
          <label htmlFor="ID" className="block text-sm font-medium text-gray-700">ID</label>
          <input 
            type="number" 
            name="id" 
            id="id" 
            placeholder="Enter Post ID here..."
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Write Post Title</label>
          <input 
            type="text" 
            name="title" 
            id="title" 
            placeholder="Enter Post title here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="post-content" className="block text-sm font-medium text-gray-700">Post Content</label>
          <textarea 
            name="content" 
            id="content" 
            cols="30" 
            rows="10" 
            placeholder="Enter Content Here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <input 
            type="text" 
            id="category" 
            name="category" 
            placeholder="Enter Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags</label>
          <input 
            type="text" 
            id="tags" 
            name="tags" 
            placeholder="Enter Tags Here"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Update Now</button>
      </form>
    </div>
  );
}

export default UpdatePost;