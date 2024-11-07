import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false); // State to handle show/hide password

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle user sign-up, e.g., sending data to the server
    // After successful sign-up, navigate to the OTP verification page
    navigate('/otp-verification');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);  // Toggle password visibility
  };

  return (
    <div className="signin-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type={showPassword ? 'text' : 'password'}  // Toggle between text and password
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <div>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={handleCheckboxChange}
          />
          <label>Show Password</label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
