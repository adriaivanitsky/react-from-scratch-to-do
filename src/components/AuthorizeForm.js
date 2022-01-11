import React from 'react';

export default function AuthorizeForm({ email, setEmail, password, setPassword, formHandler }) {
  return (
    <div>
      <form onSubmit={formHandler}>
        <label>
          <input
            value={email}
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label>
          <input
            value={password}
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <input type="submit"></input>
      </form>
    </div>
  );
}
