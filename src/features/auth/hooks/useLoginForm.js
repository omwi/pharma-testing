import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { useLoginMutation } from '@/app/api';

export function useLoginForm() {
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

  return { formData, handleInputChange, handleSubmit, isLoading };
}
