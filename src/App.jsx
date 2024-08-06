import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css' 
import LoginForm from './components/LoginForm/Loginform';
import Dashboard from './pages/dashboard';

function App() { 
/**
 * The main application component. 
 * It sets up the routing for the application.
 *
 * @function App
 * @returns {JSX.Element} - The JSX element for the application.
 */
// so i am using react-router-dom for routing so you navigate different pages
// i will give some default values to in login and route to dashboard if user logs in

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginForm />}/>
        <Route path='dashboard' element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
