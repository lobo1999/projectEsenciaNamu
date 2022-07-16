import React from "react";
import $ from 'jquery';
import { Link } from "react-router-dom";

$('.photograpers').click(function() {
    $('photographer_card').animate({
        backgroundColor: "#aa0000"
    }, 1000);
});

const Photographers = () => {
    
    return (
        <div className="cotainer--90 photograpers">
            <div className="photographer_card pc-r pc-u text--center flex--center">
                <Link to="/profile" className="photographer_card_a">
                    <h3>Nombre Apellido</h3>
                    <span>Fotográfo </span>
                </Link>
            </div>
            <div className="photographer_card pc-r pc-u text--center flex--center">
                <Link to="/profile" className="photographer_card_a">
                    <h3>Nombre Apellido</h3>
                    <span>Fotográfo</span>
                </Link>
            </div>
            <div className="photographer_card pc-u text--center flex--center">
                <Link to="/" className="photographer_card_a">
                    <h3>Nombre Apellido</h3>
                    <span>Fotográfo</span>
                </Link>
            </div>
            <div className="photographer_card pc-r text--center flex--center">
                <Link to="/" className="photographer_card_a">
                    <h3>Nombre Apellido</h3>
                    <span>Fotográfo</span>
                </Link>
            </div>
            <div className="photographer_card pc-r text--center flex--center">
                <Link to="/" className="photographer_card_a">
                    <h3>Nombre Apellido</h3>
                    <span>Fotográfo</span>
                </Link>
            </div>
            <div className="photographer_card text--center flex--center">
                <Link to="/" className="photographer_card_a">
                    <h3>Nombre Apellido</h3>
                    <span>Fotográfo</span>
                </Link>
            </div>
        </div>
    )
}

export default Photographers;