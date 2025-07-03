import { Routes, Route, useLocation } from 'react-router-dom'; 
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import PageTransition from './components/PageTransition';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Projetos from './pages/Projetos/Projetos';
import Contato from './pages/Contato/Contato';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import Login from './pages/Login/Login';
import ProtectedRoute from './Routes/ProtectedRoute'; // Caminho certo pro seu componente

function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            } 
          />
          <Route 
            path="/sobre" 
            element={
              <PageTransition>
                <Sobre />
              </PageTransition>
            } 
          />
          <Route 
            path="/projetos" 
            element={
              <PageTransition>
                <Projetos />
              </PageTransition>
            } 
          />
          <Route 
            path="/contato" 
            element={
              <PageTransition>
                <Contato />
              </PageTransition>
            } 
          />
          <Route
            path="/login"
            element={
              <PageTransition>
                <Login />
              </PageTransition>
            }
          />
          <Route
            path="/admin"
            element={
              <PageTransition>
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
