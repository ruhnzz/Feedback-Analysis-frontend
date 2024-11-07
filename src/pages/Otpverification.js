import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import './Otpverification.css';

const Otpverification = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();  // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Logic for OTP verification, e.g., sending OTP to the server
    console.log("OTP Submitted: ", otp);
    
    // Simulate successful OTP verification
    const isOtpValid = otp === "123456";  // Example validation (you should replace it with actual logic)
    
    if (isOtpValid) {
      navigate('/');  // Redirect to home page on successful OTP verification
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  return (
    <div className="signin-container">
      <h1>OTP Verification</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={handleChange}
          required
        />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default Otpverification;
