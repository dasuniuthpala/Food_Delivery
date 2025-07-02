import React, { useState } from 'react'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

const Login = ({ onClose }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  // Registration state
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regTerms, setRegTerms] = useState(false);
  const [regError, setRegError] = useState("");
  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginTerms, setLoginTerms] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Registration handler
  const handleRegister = (e) => {
    e.preventDefault();
    if (!regName.trim() || !regEmail.trim() || !regPassword.trim()) {
      setRegError("All fields are required.");
      return;
    }
    if (!validateEmail(regEmail)) {
      setRegError("Invalid email address.");
      return;
    }
    if (regPassword.length < 6) {
      setRegError("Password must be at least 6 characters.");
      return;
    }
    if (!regTerms) {
      setRegError("You must agree to the terms.");
      return;
    }
    setRegError("");
    // Submit registration (add your API call here)
  };

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setLoginError("All fields are required.");
      return;
    }
    if (!validateEmail(loginEmail)) {
      setLoginError("Invalid email address.");
      return;
    }
    if (loginPassword.length < 6) {
      setLoginError("Password must be at least 6 characters.");
      return;
    }
    if (!loginTerms) {
      setLoginError("You must agree to the terms.");
      return;
    }
    setLoginError("");
    // Submit login (add your API call here)
  };

  if (showSignUp) {
    return (
      <div className='login-modal-backdrop' onClick={onClose}>
        <div className='login-modal' onClick={e => e.stopPropagation()}>
          <button className='login-modal-close' onClick={onClose}>×</button>
          <h2>Sign Up</h2>
          <form onSubmit={handleRegister}>
            <input type='text' placeholder='Your name' value={regName} onChange={e => setRegName(e.target.value)} required />
            <input type='email' placeholder='Your email' value={regEmail} onChange={e => setRegEmail(e.target.value)} required />
            <input type='password' placeholder='Password' value={regPassword} onChange={e => setRegPassword(e.target.value)} required />
            <button type='submit' className='login-modal-submit'>Create account</button>
            {regError && <div style={{color: 'red', marginBottom: 8}}>{regError}</div>}
            <div className='login-modal-checkbox'>
              <input type='checkbox' id='terms-signup' checked={regTerms} onChange={e => setRegTerms(e.target.checked)} />
              <label htmlFor='terms-signup'>
                By continuing, i agree to the terms of use & privacy policy.
              </label>
            </div>
            <div className='login-modal-footer'>
              Already have an account? <a href="#" onClick={e => {e.preventDefault(); setShowSignUp(false);}}>Login here</a>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className='login-modal-backdrop' onClick={onClose}>
      <div className='login-modal' onClick={e => e.stopPropagation()}>
        <button className='login-modal-close' onClick={onClose}>×</button>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type='email' placeholder='Your email' value={loginEmail} onChange={e => setLoginEmail(e.target.value)} required />
          <input type='password' placeholder='Password' value={loginPassword} onChange={e => setLoginPassword(e.target.value)} required />
          <button type='submit' className='login-modal-submit'>Login</button>
          {loginError && <div style={{color: 'red', marginBottom: 8}}>{loginError}</div>}
          <div className='login-modal-checkbox'>
            <input type='checkbox' id='terms' checked={loginTerms} onChange={e => setLoginTerms(e.target.checked)} />
            <label htmlFor='terms'>
              By continuing, i agree to the terms of use & privacy policy.
            </label>
          </div>
          <div className='login-modal-footer'>
            Create a new account? <a href="#" onClick={e => {e.preventDefault(); setShowSignUp(true);}}>Click here</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
