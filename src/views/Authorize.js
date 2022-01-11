import React from 'react';
import { useState } from 'react';
import AuthorizeForm from '../components/AuthorizeForm';
import { signInUser, signupUser } from '../services/users';
import Header from '../components/Header';

export default function Authorize({ setCurrentUser }) {
  // const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('signIn');

  async function formHandler(e) {
    e.preventDefault();
    try {
      const response =
        type === 'signIn' ? await signInUser(email, password) : await signupUser(email, password);
      setCurrentUser(response);
    } catch {
      alert('oops! something went wrong. please try again');
    }
  }

  // if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <Header type={type} setType={setType} />
      <AuthorizeForm {...{ email, setEmail, password, setPassword, formHandler }} />
    </div>
  );
}
