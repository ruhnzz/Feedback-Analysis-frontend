import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Feedback from './pages/Feedback';
import OtpVerification from './pages/Otpverification';  // Import the OTP verification page
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/otp-verification" element={<OtpVerification />} /> {/* Add OTP verification route */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
