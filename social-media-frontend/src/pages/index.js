import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function HomePage() {
  const { user, loading } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
    else if(user) {
      router.push('/posts');
    }
  }, [user, router]);

  return (
    <div>
      {/* <h1>Welcome {user ? user.username : 'Guest'}</h1> */}
    </div>
  );
}
