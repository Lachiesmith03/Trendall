import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../index.js';
import SignIn from './SignIn'; // Import SignIn component
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../authSlice'; // Import logout action

function Header() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const currentAccount = useSelector((state) => state.auth.currentAccount);
  const dispatch = useDispatch();
  const [showSignIn, setShowSignIn] = useState(false); // State để kiểm soát việc hiển thị SignIn
  const [showAccountList, setShowAccountList] = useState(false); // State để kiểm soát việc hiển thị danh sách tài khoản
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  const handleSignOut = () => {
    dispatch(logout()); // Dispatch logout action
  };

  const handleSignInClick = () => {
    setShowSignIn(true); // Hiển thị SignIn khi click vào nút Sign In
  };

  const handleAccountClick = () => {
    setShowAccountList(!showAccountList); 
  };

  return (
    <header className="header">
      <div className="grid">
        <nav className="header__navbar">
          <Link to="/" onClick={scrollToTop} className="header__navbar-logo">
            <img src="assets/images/logo.png" alt="" className="header__navbar-logo-img"/>
            <span className="header__navbar-logo-company">TRENDALL</span>
          </Link>
          <ul className="header__navbar-list">
            <li className="header__navbar-item header__navbar-item--disabled header__navbar-item--pc">
              <Link to="/" onClick={scrollToTop} className="header__navbar-link header__navbar-link--primary">HOME</Link>
            </li>
            <li className="header__navbar-item header__navbar-item--pc">
              <Link to="/news#" onClick={scrollToTop} className="header__navbar-link">ARTICLE</Link>
            </li>
            <li className="header__navbar-item header__navbar-item--pc">
              <a href="/gallery" onClick={scrollToTop} className="header__navbar-link">GALLERY</a>
            </li>
            <li className="header__navbar-item header__navbar-item--pc">
              <Link to="/search-tool" onClick={scrollToTop} className="header__navbar-link">SEARCH</Link>
            </li>
            <li className="header__navbar-item header__navbar-item--pc">
              <a href="https://www.latrobe.edu.au/research/centres/trendall" onClick={scrollToTop} className="header__navbar-link">ABOUT US</a>
            </li>
            {loggedIn ? (
              <li className="header__navbar-item-account" >
                <div className="header__navbar-link" onClick={handleAccountClick}>
                  <div className='header__navbar-account'>
                    <img className='account-avatar' src={currentAccount.avatar || 'https://i.pinimg.com/736x/d0/86/1e/d0861efc9e33896635341936b2e555c8.jpg'} alt="Avatar"></img>
                    <span className='account-username'>{currentAccount.username}</span>
                    <i class="fa-solid fa-caret-down" style={{color: 'white', margin: '0 10px'}}></i>
                  </div>
                  
                  {showAccountList && (
                    <ul className='account-list'>
                      <li className="header__navbar-link link-sign-out" onClick={handleSignOut}>Sign Out</li>
                    </ul>
                  )}
                </div>
              </li>
            ) : (
              <li className="header__navbar-item header__navbar-item--pc">
                <button className="header__navbar-link link-sign-in " onClick={handleSignInClick}>SIGN IN</button>
              </li>
            )}
            <li className=" header__navbar-item-menu">
              <i className="header__navbar-menu fas fa-bars"></i> 
            </li>
          </ul>
        </nav>
      </div>
      {showSignIn && <SignIn setShowSignIn={setShowSignIn} />} {/* Nếu showSignIn là true, thì hiển thị SignIn */}
    </header>
  );
}

export default Header;
