import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PostByTitle() {
  let { title } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/posts-by-title/${title}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error:', error));
  }, [title]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
}

export default PostByTitle;