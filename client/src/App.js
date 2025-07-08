import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import './App.css';
import AppNavbar from './Components/Navbar';
import RegisterPage from './Pages/RegistrationPage.jsx';
import Dashboard from './Components/Dashboard.jsx';
function App() {
  return (
    <Router>
    <div className="App">
    <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;