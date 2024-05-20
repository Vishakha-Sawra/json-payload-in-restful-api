import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PostById() {
  let { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/post-by-id/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
}

export default PostById;