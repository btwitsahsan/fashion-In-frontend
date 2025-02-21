import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { logout, RESET_AUTH } from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import ShowOnLogin, { ShowOnAdmin, ShowOnLogout } from "../hiddenLink/hiddenLink";
import { UserName } from "../../pages/profile/Profile";

export const logo = (
  <div className="logo">
    <Link to="/">
      <h2>
        Fashion<span>In</span>
      </h2>
    </Link>
  </div>
);
const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPage, setScrollPage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fixBar = () => {
    if (window.screenY > 50) {
      setScrollPage(true);
    } else {
      setScrollPage(true);
    }
  };
  window.addEventListener("scroll", fixBar);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };

  const cart = (
    <span className={styles.cart}>
      <Link to="/cart">
        Cart
        <FaShoppingCart size={20} />
        <p>0</p>
      </Link>
    </span>
  );

  const LogoutUser = async () => {
    await dispatch(logout());
    await dispatch(RESET_AUTH());
    navigate("/login");
  };
  return (
    <header className={scrollPage ? `${styles.fixed}` : null}>
      <div className={styles.header}>
        {logo}
        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
            onClick={hideMenu}
          ></div>
          <ul>
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/productList" className={activeLink}>
                All Products
              </NavLink>
            </li>
          </ul>

          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <ShowOnLogin>
                <NavLink to="profile" className={activeLink}>
                  <FaUserCircle size={16} color="orange" />
                  <UserName />
                </NavLink>
              </ShowOnLogin>
              <ShowOnLogout>
                <NavLink to="login" className={activeLink}>
                  login
                </NavLink>
                <NavLink to="register" className={activeLink}>
                  Register
                </NavLink>
              </ShowOnLogout>
              <ShowOnAdmin>
                <NavLink to="/admin/dashboard" className={activeLink}>
                  Dashboard
                </NavLink>
                </ShowOnAdmin>
              <ShowOnLogin>
                <NavLink to="order-history" className={activeLink}>
                  My Order
                </NavLink>
                <Link to={"/"} onClick={LogoutUser}>
                  Logout
                </Link>
              </ShowOnLogin>
            </span>
            {cart}
          </div>
        </nav>
        <div className={styles["menu-icon"]}>
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
