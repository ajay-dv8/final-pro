
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import './Loginform.css'

const LoginForm = () => {
  // State variables for username and password
  // to store te state of te inputs to know if its been updated
  // an update for an input can be a user typing in te input 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // useNavigate hook from react-router-dom to navigate
  const navigate = useNavigate();

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    // check if the entered username and password match the default one here
    if (username === 'user' && password === 'pass') {
      navigate('/dashboard'); // Navigate to the dashboard if username and pass are correct
    } else {
      alert('Invalid username or password'); // Show an alert if credentials are incorrect
    }
  };

  return (
    <div className="wrapper">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div  className="input-box"> 
          <input
            type="text"
            value={username}
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box"> 
          <input
            type="password"
            value={password}
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#"> Forgot Password?</a>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
