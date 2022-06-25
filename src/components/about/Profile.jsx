import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    var url = "https://cdn.foodandwineespanol.com/2021/08/fotografos-de-comida-mexicanos.jpg"; 
    return (
<div className="mainBack glass">
    <div className="mainBack__about">
     <Link to ="/" ></Link>
      <h3 className="mainBack_h3">
       Fotografo  
       </h3>
       <br></br>
        <p className="">
        <br></br>
           Biografia: 
           Con la fotografia puedo retratar momentos y sentimientos que una vez viví, mis interese son: 
           Mis caracteristicas son:   
        </p>
        <br></br>
        <address className="card__addrs"> example@gmail.com</address>
    </div>
      <button className= "activateLasers">
        Galería
      </button>
    <div className="mainBackContentHolder__img glass blur">
        <img className="mainBackContent__img" src={url}></img>
    </div>
</div>
    ); 
}

export default Profile