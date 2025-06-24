import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file

function LoginPage() {
  return (
    <div className="container">
      <div className="box">
        <h2>Welcome</h2>
        <input
          type="text"
          placeholder="Username"
        /><br />
        <input
          type="password"
          placeholder="Password"
        /><br />
        <button>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
