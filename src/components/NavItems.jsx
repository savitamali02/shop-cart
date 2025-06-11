import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from "../contexts/AuthProvider";
import { FaUser, FaBox, FaSignOutAlt } from "react-icons/fa"; // ← Add this at the top


const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        setDropdownOpen(false);
      })
      .catch((err) => {
        console.error("Logout error:", err.message);
      });
  };

  const getUserInitial = () => {
    if (user?.displayName) return user.displayName.charAt(0).toUpperCase();
    if (user?.email) return user.email.charAt(0).toUpperCase();
    return "?";
  };

  useEffect(() => {
    const onScroll = () => {
      setHeaderFixed(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* Mobile Top Section */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            {!user ? (
              <>
                <Link to="/signup" className="lab-btn nm-3">
                  <span>Create Account</span>
                </Link>
                <Link to="/login">Log in</Link>
              </>
            ) : (
              <div className="position-relative" ref={dropdownRef}>
                <div
                  className="user-avatar text-dark fw-bold d-flex align-items-center justify-content-center"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    fontSize: "16px",
                    backgroundColor: "#FFD700",
                    color: "#000",
                  }}
                >
                  {getUserInitial()}
                </div>
                {dropdownOpen && (
                  <div
                    className="position-absolute bg-white shadow p-2 rounded"
                    style={{ top: "40px", right: "0", zIndex: 999 }}
                  >
                    <ul className="list-unstyled m-0">
                      <li>
                        <Link to="/profile" className="dropdown-item text-dark">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/orders" className="dropdown-item text-dark">
                          Orders
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="dropdown-item text-danger"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Header Bottom Section */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* Logo */}
            <div className="logo-search area">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>

            {/* Menu Area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* Auth Actions */}
              {!user ? (
                <>
                  <Link
                    to="/sign-up"
                    className="lab-btn me-1 d-none d-md-block"
                  >
                    Create Account
                  </Link>
                  <Link to="/login" className="d-none d-md-block">
                    Log in
                  </Link>
                </>
              ) : (
                <div
                  className="d-none d-md-flex align-items-center gap-2 position-relative"
                  ref={dropdownRef}
                >
                  <div
                    className="user-avatar text-dark fw-bold d-flex align-items-center justify-content-center"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      fontSize: "16px",
                      backgroundColor: "#FFD700",
                      color: "#000",
                    }}
                  >
                    {getUserInitial()}
                  </div>
                  {dropdownOpen && (
                    <div
                      className="position-absolute bg-white shadow p-2 rounded"
                      style={{
                        top: "40px",
                        right: "0",
                        zIndex: 999,
                        minWidth: "150px",
                      }}
                    >
                      <Link
                        to="/profile"
                        className="d-flex align-items-center gap-2 dropdown-item py-1 px-2"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <FaUser /> Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="d-flex align-items-center gap-2 dropdown-item py-1 px-2"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <FaBox /> Orders
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="btn btn-link text-start w-100 d-flex align-items-center gap-2 py-1 px-2"
                        style={{ color: "#dc3545", textDecoration: "none" }}
                      >
                        <FaSignOutAlt /> Logout
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Toggler Buttons */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
