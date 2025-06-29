import React, { useState } from 'react'
import './Login.css'

const Login = ({ onClose }) => {
  const [showSignUp, setShowSignUp] = useState(false);

  if (showSignUp) {
    return (
      <div className='login-modal-backdrop' onClick={onClose}>
        <div className='login-modal' onClick={e => e.stopPropagation()}>
          <button className='login-modal-close' onClick={onClose}>×</button>
          <h2>Sign Up</h2>
          <form>
            <input type='text' placeholder='Your name' required />
            <input type='email' placeholder='Your email' required />
            <input type='password' placeholder='Password' required />
            <button type='submit' className='login-modal-submit'>Create account</button>
            <div className='login-modal-checkbox'>
              <input type='checkbox' id='terms-signup' />
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
        <form>
          <input type='email' placeholder='Your email' required />
          <input type='password' placeholder='Password' required />
          <button type='submit' className='login-modal-submit'>Login</button>
          <div className='login-modal-checkbox'>
            <input type='checkbox' id='terms' />
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
