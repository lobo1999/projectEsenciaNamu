import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  
  const [isNavbarActive, setIsNavbarActive] = React.useState(false);
  const [isDestinations, setIsDestinations] = React.useState(false);

  const clickWindow = () => {
    setIsNavbarActive(true);
    setIsDestinations(false);
  };

  const menuWindow = () => {
    setIsNavbarActive(false);
    setIsDestinations(false);
  };

  const destWindow = () => {
    setIsDestinations(true);
  }
  
  return (
    <nav id="navbar" className={`glass blur${isNavbarActive ? " nav--top" : "nav--principal"} ${isDestinations ? "nav--top-destinations" : "nav--principal"}`}>
      <div className="nav--container">
        <NavLink to="/" onClick={menuWindow}>
          <span><i className="icon-namu"></i></span>
        </NavLink>
        <div className="menu">
          <NavLink to="/destinations" onClick={destWindow}>Destinos</NavLink>
          <NavLink to="/photographers" onClick={clickWindow}>Colaboradores</NavLink>
          <NavLink to="/about" onClick={clickWindow}>Quiénes Somos</NavLink>
        </div>
        <button className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );

  

  // eslint-disable-next-line no-unreachable
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function () {
    this.hamburger.toggle("is-active");
  });
};




export default Navbar;
