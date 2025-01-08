import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { message } from 'antd';

const useLogin = () => {

  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginUser = async (values) => {

    try {
      setError(null);
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_SERVER_PORT}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });

      const data = await res.json();

      // if(res.status === 201) {
      //   message.success(data.message);
      //   login(data.token, data.user);
      // } else if(res.status === 400) {
      //   setError(data.message);
      // } else {
      //   message.error("Registration failed")
      // }

      if(res.ok) {
        message.success(data.message);
        login(data.token, data.user);
      } else {
        setError(data.message || "An unexpected error occurred.");
        message.error(data.message || "Registration failed!");
      }
    }
    catch(error) {
      message.error(error);
    } finally {
      setLoading(false);
    }
  }

  return {loading, error, loginUser};
}

export default useLogin