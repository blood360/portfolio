import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Adriano</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/sobre" onClick={toggleMenu}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="/projetos" onClick={toggleMenu}>
            Projetos
          </Link>
        </li>
        <li>
          <Link to="/contato" onClick={toggleMenu}>
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
