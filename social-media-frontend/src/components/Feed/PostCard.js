import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import styles from './PostCard.module.css'; // Importing CSS module
import * as jwtDecode from 'jwt-decode'

export default function PostCard({ post, onLike }) {
  const { user } = useAuth();

  const handleLike = async () => {
    if (!localStorage.getItem('token')) return alert('Please log in to like a post.');
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/posts/like?postId=${post.id}`, null, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      // onLike(post.id);
      window.location.reload();
      // onLike();
    } catch (error) {
      console.log(error, error.response.data.error);
      alert(error.response.data.error ? error.response.data.error : "Something went wrong")
    }
  };

  const handleFollow = async (id) => {
    console.log(id, "IIIIIIIIIIIIIIII")
    if (!localStorage.getItem('token')) return alert('Please log in to like a post.');
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/${id.user_id}/follow`, null, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      window.location.reload();
    } catch (error) {
      console.log(error, error.response.data.error);
      alert(error.response.data.error ? error.response.data.error : "Something went wrong")
    }
  };

  return (
    <div className={styles.postCard}>
      <h4 onClick={()=>handleFollow(post)} className={styles.author}>{post.username + " " + (post && post.following==1 ? "Following" : "")}</h4>
      <p className={styles.content}>{post.content}</p>
      <button
        className={styles.likeButton}
        onClick={handleLike}
        disabled={post.likes >= 100} // Example condition for disabling
      >
        Like ({post.likes})
      </button>
    </div>
  );
}
