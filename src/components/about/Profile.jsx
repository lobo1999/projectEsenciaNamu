import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Photographers } from "./Photographers";

const API_PHOTOGRAPHERS = "https://namu-app-backend.herokuapp.com/api/photographers";
var photograper = [];

const GET_PHOTOGRAPHERS = (id) => {

    
    const getApi = async () => {
        
        const response = await fetch(`${API_PHOTOGRAPHERS}/${id}`);
        const jsonResponse = await response.json();
        photograper = jsonResponse;
    }
    
    getApi();
}


export default function Profile({passToProfile}) {

    var url = "https://cdn.foodandwineespanol.com/2021/08/fotografos-de-comida-mexicanos.jpg"; 
    photograper = GET_PHOTOGRAPHERS();
    console.log(passToProfile);
    
    return (

        <div className="mainContainer">
            <div className="cardProfile glass">
                <div className="cotainerImg">
                    <img className="mainBackContent__img"></img>
                </div>
                <div className="aboutPhotographer">
                    <Link to="/" ></Link>
                    <div className="mainBackInfo">
                        <h3 className="mainBack_h3">
                            Harold Rivas
                        </h3>
                        <a href="https://www.instagram.com/harolsblog/" className="buttonInstagram"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                    <br></br>
                    <p className="">
                        <br></br>
                        Biografia:
                        Lo importante es ver aquello que resuelta invisible para los demás, soy un entusiasta de la fotografía, me encanta descrubir lugares del país y poder compartir mis experiencias con los demás.
                    </p>
                    <br></br>
                    <address className="card__addrs"> @TicoPortraits @IG.Portraits</address>
                    <div className="buttonChange">
                        <Link to="/Gallery" className="buttonNext" xs={12}>
                            Galería
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    ); 
};
