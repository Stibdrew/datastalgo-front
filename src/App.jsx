import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from "./components/Navbar"
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import EventsPage from './pages/EventsPage';
import EventDescPage from './pages/EventDescPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    
    <Router>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
         <Route path="/" element={<HomePage />} />  
         <Route path="/login" element={<LoginPage />} />
         <Route path="/register" element={<RegisterPage />} /> 
         <Route path="/events" element={<EventsPage />} />
         <Route path="/event-desc/:id" element={<EventDescPage />} />
         <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
    
  )
}

export default App
