import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    var url = "https://cdn.foodandwineespanol.com/2021/08/fotografos-de-comida-mexicanos.jpg"; 
    return (
<div className="mainContainer">
    <div className="cardProfile glass">
    <div className="cotainerImg">
        <img className="mainBackContent__img"src={url} ></img>
    </div>
    <div className="aboutPhotographer">
     <Link to ="/" ></Link>
     <div className="mainBackInfo">
      <h3 className="mainBack_h3">
       Fotografo  
       </h3>
       <a href="https://www.instagram.com/" className="buttonInstagram"><i className="fa-brands fa-instagram"></i></a>
       </div>
       <br></br>
        <p className="">
        <br></br>
           Biografia: 
           Con la fotografia puedo retratar momentos y sentimientos que una vez viví, mis interese son: 
           Mis caracteristicas son:   
        </p>
        <br></br>
        <address className="card__addrs"> example@gmail.com</address>
       <div className="buttonChange">
      <Link to="/Gallery" className= "buttonNext" xs={12}>
        Galería
      </Link>
      </div>
    </div>
   </div>
</div>
    ); 
}

export default Profile