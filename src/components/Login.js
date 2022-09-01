import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import auth from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import "./Login.css";

function Login() {
    const [{ user }, dispatch] = useStateValue();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

   
    
    const handleSignin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((authUser) => {
                dispatch({
                    type: "login",
                    user: authUser.user.email,
                })
                navigate("/");
            })
            .catch((err) => {
                alert(err.message);
        })
    }

    return (
      
    <div className='login'>
        <div className='logo__container'>
             <Link to="/"> 
                <img
                    className='login__logo'
                    src='https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png'
                    alt='login__logo'
                 />
              </Link>
            </div>
            

          <div className='login__container'>
              <form>
                    <h1>Sign in</h1>
                    <h4>Email</h4>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                    <h4>Password</h4>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                    <button onClick={handleSignin} className="submit__button">Continue</button>
                </form>
                <span>By continuing, you agree to Amazon's <a  href='#'>Conditions of Use</a> and <a href="#">Privacy Notice.</a></span>
            </div>

            <span>New to Amazon?</span>
            <button onClick={() => navigate("/signup")} className='signup__button'>Create your Amazon account</button>
    </div>
  )
}

export default Login;
