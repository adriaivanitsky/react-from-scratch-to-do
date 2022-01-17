import React from 'react';
import './header.css';
import activeClass from 'classnames';

export default function Header({ setType, type }) {
  return (
    <header>
      <h1 className={activeClass({ active: type === 'signIn' })} onClick={() => setType('signIn')}>
        login{' '}
      </h1>
      <h1 className={activeClass({ active: type === 'signUp' })} onClick={() => setType('signUp')}>
        sign up
      </h1>
    </header>
  );
}
