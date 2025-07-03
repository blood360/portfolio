import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">Adriano <span>Santos</span></NavLink>
      </div>
      <div className="menu-icon" onClick={toggleMenu} end>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
        <li>
          <NavLink to="/" onClick={toggleMenu} className="NavLink" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/sobre" onClick={toggleMenu} className="NavLink">
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink to="/projetos" onClick={toggleMenu} className="NavLink">
            Projetos
          </NavLink>
        </li>
        <li>
          <NavLink to="/contato" onClick={toggleMenu} className="NavLink">
            Contato
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={toggleMenu} className="NavLink admin-link">
            Área do Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
