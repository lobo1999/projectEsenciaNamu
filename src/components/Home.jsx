import React from "react";
import Footer from "./Footer";

const Home = () => {

  const [isClicked, setIsClicked] = React.useState(false);

  const clickWindow = () => {
    setIsClicked(true);
  };


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
        <img className= {`${isClicked ? "disable" : ""} mainContent__img`} src={url}></img>
        <video className= {`${isClicked ? "" : "disable"} mainContent__vid`} src="https://res.cloudinary.com/esencianamu-resonanciagaia/video/upload/v1658473245/Video/EsenciaNamu_wcvsmk.mp4" controls autoplay loop muted width="400px" height="300px" ></video>
      </div>
      <div id="vid" className="videoContent glass blur">
        <span onClick={clickWindow}>Ver video <i class="fa-solid fa-play"></i></span>
      </div>
      </div>
      <Footer/>
    </>    
  );
};

export default Home;
