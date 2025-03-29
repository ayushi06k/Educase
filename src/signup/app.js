import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="login-box">
        <h2>Signin to your <br /> <span className="brand">PopX account</span></h2>
        <p className="description">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
        </p>

        <label className="input-label">Email Address</label>
        <input type="email" placeholder="Enter email address" className="input-field" />

        <label className="input-label">Password</label>
        <input type="password" placeholder="Enter password" className="input-field" />

        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default App;
