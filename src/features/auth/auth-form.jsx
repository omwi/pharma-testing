import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { useLoginMutation } from '@/app/api';

import * as styles from './auth-form.module.css';

export default function AuthForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const [login, { isLoading }] = useLoginMutation();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const { username, password } = formData;
    try {
      await login({ username, password }).unwrap();
    } catch (error) {
      console.error(error);
    }
    navigate(from, { replace: true });
  }

  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit} className={isLoading ? styles.loading : ''}>
      <label htmlFor="name">Name</label>
      <input
        value={formData.username}
        onChange={handleInputChange}
        id="name"
        name="username"
        type=""
        placeholder="Name"
        required
      />

      <label id="password" htmlFor="password">
        Password
      </label>
      <input
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
