import React, { useState } from 'react';

function DeletePost() {
  const [id, setId] = useState('');

  const deletePost = () => {
    fetch(`http://localhost:3000/deletepost/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch((error) => { 
      console.error('Error:', error);
    });
  }

  return (
    <div className="container mx-auto px-4 mt-5">
      <h3 className="text-2xl font-bold mb-2">Delete Post</h3>
      <p className="mb-4">Enter the ID of the post you want to delete.</p>
      <form onSubmit={(e) => {e.preventDefault(); deletePost();}} className="space-y-4">
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
        <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" type="submit">Delete Now</button>
      </form>
    </div>
  );
}

export default DeletePost;