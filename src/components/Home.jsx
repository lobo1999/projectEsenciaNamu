import React from "react";
import Footer from "./Footer";



const Home = () => {
  var url = "https://images.unsplash.com/photo-1616128417743-c3a6992a65e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80";
  return (
    <>
    <div className="mainContent glass">
      <div className="mainContent__about glass blur">
        <h1 className="mainContent__h1">
          Bienvenido a Costa Rica 
        </h1>
        <p>
          Aquí, los visitantes disfrutarán de hermosas playas tropicales, emocionantes aventuras, maravillas de la naturaleza y una interesante cultura, todos los elementos necesarios para vacacionar. ¡Motívese como los miles de personas que han hecho de Costa Rica su mejor opción de viaje! ¡Pura Vida!
        </p>
      </div>
      <div className="mainContentHolder__img glass blur">
        <img className="mainContent__img" src={url}></img>
      </div>
      </div>
      <Footer/>
    </>    
  );
};

export default Home;
