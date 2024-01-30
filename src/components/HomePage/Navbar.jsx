/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import "../css/Navbar.css";
import LoginModal from "./Login/LoginModal";
import SignUpModal from "./SignUp/SignUpModal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [showDropdown, setShowDropdown] = useState(false);
  const [success, setSuccess] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (success) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setSuccess('');
      }, 3000); // Hide after 3 seconds
  
      return () => clearTimeout(timer);
    }
  }, [success]);

  let styles = {
    color: "#f5a425",
    background: "transparent",
    padding: "10px 15px",
    border: "2px solid transparent",
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: "13px",
    letterSpacing: "0.5px",
    marginBottom: "3px",
  };

  let styleNone = {
    display: "none",
  };

  let styleBlock = {
    display: "block",
  };

  const toggleMenu = () => {
    if (window.innerWidth <= 950) {
      setMenuVisible(!menuVisible);
    }
  };

  const handleLoginClick = () => {
    setShowLoginModal(false);
    setShowSignUpModal(true);
    if (window.innerWidth <= 950) {
      setMenuVisible(!menuVisible);
    }
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
    setShowSignUpModal(false);
  };

  const handleSignUpClick = () => {
    setShowSignUpModal(true);
    setShowLoginModal(false);
  };

  const handleSignUpLoginClick = () => {
    setShowSignUpModal(false);
    setShowLoginModal(true);
  };

  const handleSignUpDoneClick = () => {
    setShowLoginModal(false);
    setShowSignUpModal(false);
  };

  const handleHomeClick = () => {
    if (window.innerWidth <= 950) {
      setMenuVisible(!menuVisible);
    }
  };

  const handleCourcesClick = () => {
    if (window.innerWidth <= 950) {
      setMenuVisible(!menuVisible);
    }
  };

  const handleAboutUsClick = () => {
    if (window.innerWidth <= 950) {
      setMenuVisible(!menuVisible);
    }
  };

  const handleMyCourcesClick = () => {
    if (window.innerWidth <= 950) {
      setMenuVisible(!menuVisible);
    }
  };

  const handleUserClick = () => {
    if (window.innerWidth <= 950) {
      setMenuVisible(!menuVisible);
    }
  };

  const handleOnSuccessLogin = (value) => {
    console.log(value);
    setIsLoggedIn(true);
    if (value.error) {
      ("");
    } else {
      setUserData({ name: value.name, email: value.email });
      setSuccess("Logged in successfully");
    }
  };

  const handleSuccessSignUp = (value) => {
    console.log(value);
    setIsLoggedIn(true);
    setUserData({ name: value.name, email: value.email });
    setSuccess("Signed up successfully");
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleMouseLeave = (e) => {
    if (!dropdownRef.current.contains(e.relatedTarget)) {
      setShowDropdown(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set user as logged out
    setUserData({ name: "", email: "" });
    setShowDropdown(!showDropdown);
    setSuccess("Signed out successfully");
  };

  return (
    <>
      <header className="main-header clearfix" role="header">
        <div className="logo">
          <a href="#">
            Phy<em>JEE</em>ics
          </a>
        </div>
        <a href="#menu" className="menu-link" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </a>
        <nav id="menu" className="main-nav" role="navigation">
          <ul
            className="main-menu"
            style={
              window.innerWidth <= 950
                ? menuVisible
                  ? styleBlock
                  : styleNone
                : styleBlock
            }
          >
            <li onClick={handleHomeClick}>
              <a href="#section1">Home</a>
            </li>
            <li onClick={handleCourcesClick}>
              <a href="#section2">Courses</a>
            </li>
            <li onClick={handleAboutUsClick}>
              <a href="#section3">About Us</a>
            </li>
            <li onClick={handleMyCourcesClick}>
              <a href="#section4">My Courses</a>
            </li>
            {!isLoggedIn && (
              <li>
                <Button
                  className="loginButton"
                  style={styles}
                  onClick={handleLoginClick}
                >
                  SignUp / Login
                </Button>
              </li>
            )}
            {isLoggedIn && (
              <li
                style={{ position: "relative" }}
                onClick={handleUserClick}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={(e) => {
                  if (!dropdownRef.current.contains(e.relatedTarget)) {
                    setShowDropdown(false);
                  }
                }}
              >
                <a className="user" style={{ color: "#f5a425" }}>
                  {userData.name} &nbsp; <FontAwesomeIcon icon={faUser} />
                </a>
              </li>
            )}
          </ul>
        </nav>
        {isLoggedIn && showDropdown && (
          <div
            ref={dropdownRef}
            className="user-dropdown"
            onMouseLeave={() => setShowDropdown(false)}
            style={{ position: "absolute", right: "20px", top: "80px" }} // Adjust positioning as needed
          >
            <p style={{ color: "#f5a425", fontWeight: "600" }}>
              {userData.email}
            </p>
            <Button className="handleLogout" onClick={handleLogout}>
              Sign Out
            </Button>
          </div>
        )}
      </header>
      <LoginModal
        show={showLoginModal}
        onHide={handleCloseLoginModal}
        onCloseClick={handleCloseLoginModal}
        onSignUpClick={handleSignUpClick}
        onSuccessLogin={handleOnSuccessLogin}
      />
      <SignUpModal
        show={showSignUpModal}
        onHide={handleCloseLoginModal}
        onCloseClick={handleCloseLoginModal}
        onSignUpDoneClick={handleSignUpDoneClick}
        onLoginClick={handleSignUpLoginClick}
        onSuccessSignUp={handleSuccessSignUp}
      />
      {showLoginModal && (
        <div className="overlay" onClick={handleCloseLoginModal} />
      )}
      <div className="message-container">
        {showSuccess && <div className="success-message">{success}</div>}
      </div>
    </>
  );
};

export default Navbar;
