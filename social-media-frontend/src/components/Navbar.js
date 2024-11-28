import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import styles from './Navbar.module.css'; // Importing the CSS module

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">SocialApp</Link>
      </div>
      <div className={styles.links}>
        {user ? (
          <>
            <button onClick={logout} className={styles.logoutButton}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className={styles.link}>
              Login
            </Link>
            <Link href="/register" className={styles.link}>
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
