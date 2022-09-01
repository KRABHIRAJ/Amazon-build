import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from '../context/StateProvider';
import auth from '../firebase';
import { signOut } from "firebase/auth";


function Header() {
    const [{ user, basket }, dispatch] = useStateValue();
    const navigate = useNavigate();
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                dispatch({
                    type: "logout",
                    user: null,
                })
                navigate("/login");
            }).catch((err) => {
                alert(err.message);
        })
    }
  return (
    <div className='header'>
        <div className='header__left'>
              <Link to="/">
                <img 
                    alt=''
                    className='header__logo'
                    src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    />
            </Link>
        </div>
        <div className='header__search'>
              <input type="text" className='header__input'/>
              <SearchIcon className='search__icon'/>   
        </div>
        <div className='header__options'>
                <div className='header__option'>
                      {user ?
                          <div onClick={handleLogout}>
                            <span className='headerOption__lineOne'>Hello, {user} </span>
                            <strong className='headerOption__lineTwo'>Log out</strong>
                          </div> : <div onClick={() => navigate("/login")}>
                            <span className='headerOption__lineOne'>Hello, Sign in </span>
                            <strong className='headerOption__lineTwo'>Account & Lists</strong>
                          </div>}
                      

                </div>
            <div className='header__option'>
                <span className='headerOption__lineOne'>Returns</span>
                <strong className='headerOption__lineTwo'>& Orders</strong>
              </div>  
              <Link style = {{textDecoration: 'none'}} to="/checkout">
                    <div className='header__cart'>
                        <ShoppingCartOutlinedIcon />
                      <strong>{ basket?.length }</strong>
                    </div>
              </Link>
        </div>
    </div>
  )
}

export default Header
