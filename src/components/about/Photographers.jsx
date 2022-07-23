import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const Photographers = () => {
  const [photograper, setPhotograper] = useState("");
  const passToProfile = (id) => {
    setPhotograper(id);
  };

  return (
    <>
      <div className="cotainer--90 photograpers">
        <div className="photographer_card pc-r pc-u text--center flex--center">
          <Link
            to="/profile"
            className="photographer_card_a"
            id="3"
          >
            <h3>Harold Rivas</h3>
            <span>@harolsblog </span>
          </Link>
        </div>
        <div className="photographer_card pc-r pc-u text--center flex--center">
          <a
            href="https://www.instagram.com/karo_trips/"
            className="photographer_card_a"
          >
            <h3>Karo Céspedes</h3>
            <span>@karo_trips</span>
          </a>
        </div>
        <div className="photographer_card pc-u text--center flex--center">
          <a
            href="https://www.instagram.com/el_montanaro/"
            className="photographer_card_a"
          >
            <h3>Jean Montanaro</h3>
            <span>@el_montanaro</span>
          </a>
        </div>
        <div className="photographer_card pc-r text--center flex--center">
          <a
            href="https://www.instagram.com/jose_costarica/"
            className="photographer_card_a"
          >
            <h3>José Hernández</h3>
            <span>@jose_costarica</span>
          </a>
        </div>
        <div className="photographer_card pc-r text--center flex--center">
          <a
            href="https://www.instagram.com/josemelecr/"
            className="photographer_card_a"
          >
            <h3>Jose Meléndez</h3>
            <span>@josemele.cr</span>
          </a>
        </div>
        <div className="photographer_card text--center flex--center">
          <a
            href="https://www.instagram.com/eckotraveler/"
            className="photographer_card_a"
          >
            <h3>Erick Barahona</h3>
            <span>@eckotraveler</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Photographers;
