import React from 'react';
import { logout } from '../services/users';
import './header.css';

export default function Header({ setType }) {
  return (
    <header>
      <button onClick={() => setType('signIn')}>login </button>
      <button onClick={() => setType('signUp')}>sign up</button>
      <button id="logout" onClick={logout}>
        logout
      </button>
    </header>
  );
}
