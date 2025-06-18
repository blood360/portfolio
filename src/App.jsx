import { Routes, Route, useLocation } from 'react-router-dom'; // Adicione useLocation
import { AnimatePresence } from 'framer-motion'; // Importe AnimatePresence

import Navbar from './components/Navbar/Navbar';
import PageTransition from './components/PageTransition'; // Seu componente de transição

import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Projetos from './pages/Projetos/Projetos';
import Contato from './pages/Contato/Contato';


function App() {
  const location = useLocation(); // Obtém o objeto de localização atual

  return (
    <div>
      <Navbar />
      <AnimatePresence mode='wait'> {/* Adicione AnimatePresence aqui. 'mode="wait"' espera a saída da animação anterior */}
        <Routes location={location} key={location.pathname}> {/* Passe location e key */}
          <Route 
            path="/" 
            element={
              <PageTransition> {/* Envolva cada elemento da rota */}
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
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;