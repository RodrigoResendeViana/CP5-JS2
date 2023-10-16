import {} from "react";
import { Link } from "react-router-dom";
import "../Css/Nav.Module.css";

function Nav() {

  const handleLogout = async()=>{
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');
    alert("Saindo da sessão");
    window.location.href = '/';
  }

  return (
    <>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/Produtos">Produtos</Link>
            </li>  
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
            
          </ul>
      </nav>
    </>
  )
}

export default Nav;