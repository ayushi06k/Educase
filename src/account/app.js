import React from "react";
import "./App.css";

const SignupForm = () => {
  return (
    <div className="container">
      <div className="card">
        <h2>Create your <br /> <span>PopX account</span></h2>
        
        <form>
          <label>Full Name<span className="required">*</span></label>
          <input type="text" placeholder="Marry Doe" />

          <label>Phone number<span className="required">*</span></label>
          <input type="text" placeholder="Marry Doe" />

          <label>Email address<span className="required">*</span></label>
          <input type="email" placeholder="Marry Doe" />

          <label>Password<span className="required">*</span></label>
          <input type="password" placeholder="Marry Doe" />

          <label>Company name</label>
          <input type="text" placeholder="Marry Doe" />

          <p>Are you an Agency?<span className="required">*</span></p>
          <div className="radio-group">
            <label>
              <input type="radio" name="agency" checked />
              <span className="custom-radio"></span> Yes
            </label>
            <label>
              <input type="radio" name="agency" />
              <span className="custom-radio"></span> No
            </label>
          </div>

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
