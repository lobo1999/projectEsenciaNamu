import React from "react";
import { Link } from "react-router-dom";


const Photographers = () => {
    
    return (
        <div className="cotainer--90 photograpers">
            <div className="photographer_card pc-r pc-u text--center flex--center">
                <Link to="/profile" className="photographer_card_a" id="3">
                    <h3>Harold Rivas</h3>
                    <span>@harolsblog </span>
                </Link>
            </div>
            <div className="photographer_card pc-r pc-u text--center flex--center">
                <Link to="/profile" className="photographer_card_a" id="4">
                    <h3>Karo Céspedes</h3>
                    <span>@karo_trips</span>
                </Link>
            </div>
            <div className="photographer_card pc-u text--center flex--center">
                <Link to="/profile" className="photographer_card_a" id="6">
                    <h3>Jean Montanaro</h3>
                    <span>@el_montanaro</span>
                </Link>
            </div>
            <div className="photographer_card pc-r text--center flex--center">
                <Link to="/profile" className="photographer_card_a" id="5">
                    <h3>José Hernández</h3>
                    <span>@jose_costarica</span>
                </Link>
            </div>
            <div className="photographer_card pc-r text--center flex--center">
                <Link to="/profile" className="photographer_card_a" id="1">
                    <h3>Jose Meléndez</h3>
                    <span>@josemele.cr</span>
                </Link>
            </div>
            <div className="photographer_card text--center flex--center">
                <Link to="/profile" className="photographer_card_a" id="2">
                    <h3>Erick Barahona</h3>
                    <span>@eckotraveler</span>
                </Link>
            </div>
        </div>
    )
}

export default Photographers;