import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import Dashboardmain from './pages/Dashboardmain.jsx'
import Authentication from './pages/authentication.jsx'
import { AuthProvider, AuthContext } from './contexts/AuthContext.jsx'
import { useContext } from 'react'
import './App.css'

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) return <Navigate to="/auth" replace />;
  return children;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/dashboard/*' element={<ProtectedRoute><Dashboardmain/></ProtectedRoute>} />
          <Route path='/auth' element={<Authentication/>}/>
          <Route path='/*' element={<LandingPage/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
