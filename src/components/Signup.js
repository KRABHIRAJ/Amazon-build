import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth  from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import "./Signup.css";
import { useStateValue } from '../context/StateProvider';


function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [{ user, basket }, dispatch] = useStateValue();
    const handleSignup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
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

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
             navigate("/");

            } 
        })
    }, [])

   
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
                    <h1>Sign up</h1>
                    <h4>Email</h4>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                    <h4>Password</h4>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                    <h4>Confirm Password</h4>
                    <input type="password" />
                    <button onClick={handleSignup} className="submit__button">Continue</button>
                </form>
                <span>By continuing, you agree to Amazon's <a  href='#'>Conditions of Use</a> and <a href="#">Privacy Notice.</a></span>
            </div>

            <span>Registered on Amazon?</span>
            <button onClick={() => navigate("/login")} className='signup__button'>LogIn to Amazon</button>
   
    </div>
  )
}

export default Signup
