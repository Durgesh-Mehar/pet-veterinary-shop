import React, { useContext } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Auth/AuthContext";

function Header() {
  const authCtx = useContext(AuthContext);
  const history = useNavigate();
  const isLogged = authCtx.isLoggedIn;

  const logoutHandler = () => {
    alert("Do you want to Logout")
    authCtx.Logout();
    history("/login");
  };

  return (
    <header className="app-header">
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>

          {isLogged && (
            <li>
              <Link to="/dashboard/pets">Pets</Link>
            </li>
          )}
          {isLogged && (
            <li>
              <Link to="/dashboard/services">Services</Link>
            </li>
          )}

          {!isLogged && (
            <li>
              <Link to="/signup">Create Account</Link>
            </li>
          )}

          {isLogged && (
            <li>
              <Link to="/login" onClick={logoutHandler}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
