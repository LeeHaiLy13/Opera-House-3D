import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./loginregister.module.css";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple password matching validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Additional client-side validation (e.g., email format)
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Clear any previous errors
    setError('');

    // Proceed with registration logic
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <section className={styles.loginregisterPage}>
      <div className={styles.authContainer}>
        <h2>Đăng kí</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Mật khẩu:</label>
            <input
              type="password"
              id="password"
              aria-label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Nhập lại mật khẩu:</label>
            <input
              type="password"
              id="confirmPassword"
              aria-label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Đăng kí</button>
        </form>
        <p>Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>
      </div>
    </section>
  );
};

export default Register;
