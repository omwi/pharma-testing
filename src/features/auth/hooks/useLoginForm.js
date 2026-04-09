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

  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage(null);
    const { username, password } = formData;
    try {
      await login({ username, password }).unwrap();
      navigate(from, { replace: true });
    } catch (error) {
      if (error.status === 400) {
        setErrorMessage(error.data.message);
      } else {
        setErrorMessage('Something went wrong');
      }
    }
  }

  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return { formData, handleInputChange, handleSubmit, isLoading, errorMessage };
}
