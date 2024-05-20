import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PostsByCategory() {
  let { category } = useParams();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/posts-by-category/${category}`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error:', error));
  }, [category]);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}

export default PostsByCategory;