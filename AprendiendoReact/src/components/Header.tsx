import logo from "../assets/images/react.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  
  const location = useLocation()

  return (
    <header id="header">
      <div className="center">
        {/* LOGO */}
        <div id="logo">
          <img src={logo} className="app-logo" alt="Logotipo" />
          <span id="brand">
            <strong>Curso</strong>React
          </span>
        </div>

        {/* MENU */}
        <nav id="menu">
          <ul>
            <li>
              <Link to="/home" className={location.pathname == '/home' ? 'active' : ''}>Inicio</Link>
            </li>
            <li>
              <Link to="/blog" className={location.pathname == '/blog' ? 'active' : ''}>Blog</ Link>
            </li>
            <li>
              <Link to="/formulario" className={location.pathname == '/formulario' ? 'active' : ''}>Formulario</Link>
            </li>
            <li>
              <Link to="/peliculas" className={location.pathname == '/peliculas' ? 'active' : ''}>Peliculas</Link>
            </li>
            <li>
              <Link to="#" className={location.pathname == '' ? 'active' : ''}>Pagina 2</Link>
            </li>
          </ul>
        </nav>

        {/* LIMPIAR FLOTADOS */}
        <div className="clearfix"></div>
      </div>
    </header>
  );
}
