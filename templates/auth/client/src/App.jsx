
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import ProtectedRoute from "./Components/ProtectedRoute"




export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem' }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
             path="/dashboard" element={
             <ProtectedRoute>
                <Dashboard />
             </ProtectedRoute>
  }
/>



      </Routes>
    </BrowserRouter>
  )
}
