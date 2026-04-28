import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../services/firebase';
import Login from './login';
import SignUp from './signup';
import './styles.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/dashboard');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <>
      {isLogin ? (
        <Login toggleMode={() => setIsLogin(false)} />
      ) : (
        <SignUp toggleMode={() => setIsLogin(true)} />
      )}
    </>
  )
}

export default Auth;