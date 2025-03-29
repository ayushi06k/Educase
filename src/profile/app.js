import React from "react";
import profilePic from "../../public/assets/batman.jng"; 

export default function ProfileCard() {
  return (
    <div className="container">
      <div className="card">
        <div className="profile-section">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="camera-icon">📷</div>
          <div className="info">
            <h3>John Doe</h3>
            <p>Software Engineer</p>
          </div>
        </div>
        <p className="bio">
          Passionate about building innovative software solutions. Love coding and design.
        </p>
      </div>
    </div>
  );
}
