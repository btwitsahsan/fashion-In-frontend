import React, { useState } from "react";
import styles from "./auth.module.scss";
import registerImg from "../../assets/register.png";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, cpassword } = formData;

  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  };

  const registerUser = () => {};



  return (
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <h2>Register</h2>
          <form onSubmit={registerUser}>
            <input
              type="text"
              placeholder="Email"
              required
              name="name"
              value={name}
              onChange={onChangeHandler}
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={onChangeHandler}
            />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={onChangeHandler}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              name="cpassword"
              value={cpassword}
              onChange={onChangeHandler}
            />
            <button type="submit" className="anmoBTN2 anmoBTN2WithFull">
              Login
            </button>
          </form>
          <span className={styles.register}>
            <p>Don't have an account?</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>
      <div className={styles.img}>
        <img src={registerImg} alt="Login" width="400" />
      </div>
    </section>
  );
};

export default Register;
