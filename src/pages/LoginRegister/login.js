import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./loginregister.module.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic đăng nhập
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset error if credentials are provided
    setError('');
    // Add actual login logic here
  };

  return (
    <section className={styles.loginregisterPage}>
      <div className={styles.authContainer}>
        <h2>Đăng nhập</h2>
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
          <button type="submit">Đăng nhập</button>
        </form>
        <p>Chưa có tài khoản? <Link to="/register">Đăng kí</Link></p>
      </div>
    </section>
  );
}

export default Login;
