import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import styles from './CreatePostForm.module.css'; // Importing the CSS module

export default function CreatePostForm({ onPostCreated }) {
  const { user } = useAuth();
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!localStorage.getItem('token')) return alert('Please log in to create a post.');
    try {
      const { data } = await axios.post(
        process.env.NEXT_PUBLIC_API_URL+'/posts',
        { content },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setContent('');
      window.location.reload();
      // onPostCreated(data.post);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit" className={styles.submitButton} disabled={!content.trim()}>
          Post
        </button>
      </form>
    </div>
  );
}
