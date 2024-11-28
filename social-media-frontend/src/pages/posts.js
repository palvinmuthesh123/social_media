import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import CreatePostForm from '../components/Feed/CreatePostForm';
import PostCard from '../components/Feed/PostCard';
import * as jwtDecode from 'jwt-decode'

export default function Posts() {
//   const { user } = useAuth();
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);

  // Fetch posts on page load
  useEffect(() => {
    const decoded = jwtDecode.jwtDecode(localStorage.getItem('token'))
    setUser(decoded);
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        console.log(data, "DDDDDDDDDDDDDDDDDDD");
        setPosts(data);
      } catch (error) {
        setPosts([])
        console.log(error, "EEEEEEEEEEEEEEEEE");
      }
    };
    fetchPosts();
  }, []);

  // Refresh posts after a new post is created
  const refreshPosts = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setPosts(data && data.posts ? data.posts : []);
  };

  return (
    <div className="posts-page">
      <center><h1>Welcome, {user && user.username ? user.username : ""}</h1></center>
      <CreatePostForm onPostCreated={refreshPosts} />
      <div className="posts-list">
        {posts ? posts.map((post) => (
          <PostCard key={post.id} post={post} onLike={refreshPosts} />
        )) : null}
      </div>
    </div>
  );
}
