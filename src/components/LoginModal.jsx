import React, { useState, useEffect } from 'react';
import loginImg from '../assets/login image two.png';
import logoKcr from '../assets/logo_kcr.png';
import './LoginModal.css';

const LoginModal = ({ onClose }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');

  useEffect(() => {
    // Lock body scrolling when modal is open
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email: loginEmail, password: loginPassword });
    alert('Logged in successfully (demo)');
    onClose();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted:', { name: regName, email: regEmail, password: regPassword });
    alert('Account created successfully (demo)');
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('login-modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="login-modal-overlay" onClick={handleOverlayClick}>
      <div className="login-modal-container">
        {/* Left Side: Static Image */}
        <div 
          className="login-modal-image-pane" 
          style={{ backgroundImage: `url("${loginImg}")` }}
        >
          <img src={logoKcr} alt="Logo" className="login-modal-logo" />
        </div>

        {/* Right Side: Form Container */}
        <div className="login-modal-form-pane">
          <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
            {/* Front Side: Login */}
            <div className="flip-card-front">
              <h2 className="modal-title">Sign In</h2>
              <form className="modal-form" onSubmit={handleLoginSubmit}>
                <div className="form-group">
                  <label htmlFor="login-email-input">Email</label>
                  <input
                    type="email"
                    id="login-email-input"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="login-password-input">Password</label>
                  <input
                    type="password"
                    id="login-password-input"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button type="submit" className="modal-submit-btn">
                  Login
                </button>
              </form>
              <p className="modal-switch-text">
                Don't have an account?{' '}
                <button 
                  type="button" 
                  className="modal-switch-link-btn" 
                  onClick={() => setIsFlipped(true)}
                >
                  Create an account
                </button>
              </p>
            </div>

            {/* Back Side: Register */}
            <div className="flip-card-back">
              <h2 className="modal-title">Register</h2>
              <form className="modal-form" onSubmit={handleRegisterSubmit}>
                <div className="form-group">
                  <label htmlFor="reg-name-input">Name</label>
                  <input
                    type="text"
                    id="reg-name-input"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="reg-email-input">Email</label>
                  <input
                    type="email"
                    id="reg-email-input"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="reg-password-input">Password</label>
                  <input
                    type="password"
                    id="reg-password-input"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="Create a password"
                    required
                  />
                </div>
                <button type="submit" className="modal-submit-btn">
                  Create Account
                </button>
              </form>
              <p className="modal-switch-text">
                Already have an account?{' '}
                <button 
                  type="button" 
                  className="modal-switch-link-btn" 
                  onClick={() => setIsFlipped(false)}
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>

        <button 
          type="button" 
          className="login-modal-close-btn" 
          onClick={onClose} 
          aria-label="Close modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default LoginModal;

