import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import logoImage from "../Assets/logo.png";

const Login = () => {
  const [user, setUser] = useState({
    UserName: '',
    Password: ''
  });

  const navigate = useNavigate();

  // Calling function here of useauth
  const { storeTokenInLs } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        const res_data = await response.json();
        console.log('response from server', res_data);

        // Assuming you have a login function in useAuth
        storeTokenInLs(res_data.token);

        setUser({ UserName: '', Password: '' });
        navigate('/');
      } else {
        alert('Invalid credentials');
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="Section-login">
            <img src={logoImage} alt="Logo" className="registration-logo" />
            <div className="Login-grid">
              <div className="login-form">
                <h1 className="main-heading">Login</h1>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="UserName">Username</label>
                  <input
                    type="text"
                    name="UserName"
                    placeholder="Username"
                    id="UserName"
                    required
                    autoComplete="off"
                    value={user.UserName}
                    onChange={handleInput}
                  />
                  <div className="password-container">
                    <label htmlFor="Password">Password</label>
                    <input
                      type="password"
                      name="Password"
                      placeholder="Password"
                      id="Password"
                      required
                      autoComplete="off"
                      value={user.Password}
                      onChange={handleInput}
                    />
                  </div>
                  <button type="submit" className="loginbutton">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
      {/* Link to registration page */}
      <div className="not-registered">
        <p>
          Not registered? <a href="/registration">Register here</a>
        </p>
      </div>
    </>
  );
};

export default Login;
