import { useState } from 'react';
import API from '../utils/auth';
import styles from './Post.module.css'; // Importing the CSS module

const Post = ({ post, refreshPosts }) => {
  const [liked, setLiked] = useState(false);

  const likePost = async () => {
    try {
      await API.post(`/posts/${post.id}/like`);
      setLiked(true);
      refreshPosts();
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  return (
    <div className={styles.post}>
      <div className={styles.postContent}>
        <p className={styles.content}>{post.content}</p>
        <small className={styles.author}>By: {post.username}</small>
      </div>
      <button onClick={likePost} className={liked ? styles.likedButton : styles.likeButton} disabled={liked}>
        {liked ? 'Liked' : 'Like'}
      </button>
    </div>
  );
};

export default Post;
