import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  
    return (
        <section>
            <div className="aboutUs glass">
                <div className="flex--center">
                    <h2 className="aboutUs__h2 glass blur">Esencia Namú</h2>
                </div>
                <div className="aboutUs__main">
                    <div className="flex--center aboutUs__main_proyect">
                        <p>Namú proviene de la lengua Bribrí y su significado es Jaguar,
                            se utiliza este animal al ser uno de los más caracteristícos de Costa Rica
                            debido a su imponencia física. <br/>
                            El objetivo de este proyecto es incentivar el turismo nacional e internacional, 
                            mostrando las bellezas turísticas con las que cuenta el territorio nacional, brindando
                            información general de estos lugares y mostrando fotografías de la mano de 
                            <Link to="/photographers"> nuestro equipo fotográfico.</Link>
                        </p>    
                    </div>
                    <div className="aboutUs__main_proyectInf">
                    <span className="flex--center"><i className="icon-nnamu"></i></span>
                    </div>
                </div>
                <div className="aboutUs__i flex--center glass blur">
                    <i className="fa-solid fa-angles-down i-arrow"></i>
                </div>
            </div> 
            <div className="aboutUs__wkgroup">
                <div className="wkgrop__title text--center">
                    <h2>Equipo de trabajo</h2>
                </div>
                <div className="cotainer--90 wkgp">
                    <div className="wkgroup__card text--center glass">
                        <div className="card__content">
                            <h3>Alana Atencio</h3>
                            <span>
                                <i className="icon-avatar icon-avatar--alana"></i>
                            </span>
                            <a href="https://www.linkedin.com/in/alana-rusalka-atencio-mar%C3%ADn-77650a224/" className="linkedin_a"><i className="fa-brands fa-linkedin"></i></a>
                            <p>Desarrolladora de Software en Gorilla Logic</p>
                            <address className="card__addrs">alanacostari@gmail.com</address>
                        </div>
                    </div>
                    <div className="wkgroup__card text--center glass">
                        <div className="card__content">
                            <h3>Manuel Ulate</h3>
                            <span>
                                <i className="icon-avatar icon-avatar--manu"></i>
                            </span>
                            <a href="https://www.linkedin.com/in/manuel-ulate-sancho/" className="linkedin_a"><i className="fa-brands fa-linkedin"></i></a>
                            <p>CEO & Co-Founder de Gumalu Inc. Desarrollador de Software en GPI Consultores</p>
                            <address className="card__addrs">imanuel.ulate@gmail.com</address>
                        </div>
                    </div>
                    <div className="wkgroup__card text--center glass">
                        <div className="card__content">
                            <h3>Vanessa Guido</h3>
                            <span>
                                <i className="icon-avatar icon-avatar--vane"></i>
                            </span>
                            <a href="https://www.linkedin.com/in/sof%C3%ADa-vanessa-guido-chac%C3%B3n-876a2b21a/" className="linkedin_a"><i className="fa-brands fa-linkedin"></i></a>
                            <p>Desarrolladora de Software en Snap Compliance</p>
                            <address className="card__addrs">sofia.guido@ucrso.info</address>
                        </div>
                    </div>
                    <div className="wkgroup__card text--center glass">
                        <div className="card__content">
                            <h3>Luis Lobo</h3>
                            <span>
                                <i className="icon-avatar icon-avatar--lobo"></i>
                            </span>
                            <a href="https://www.linkedin.com/in/luis-lobo-zamora/" className="linkedin_a"><i className="fa-brands fa-linkedin"></i></a>
                            <p>CFO & Co-Founder de Gumalu Inc. Desarrollador de RPA en Equifax</p>
                            <address className="card__addrs">llobozamora@gmail.com</address>
                        </div>
                    </div>
                    <div className="wkgroup__card text--center glass">
                        <div className="card__content">
                            <h3>Yurguen Campos</h3>
                            <span>
                                <i className="icon-avatar icon-avatar--jur"></i>
                            </span>
                            <a href="https://www.linkedin.com/in/yurguen-campos-cr506/" className="linkedin_a"><i className="fa-brands fa-linkedin"></i></a>
                            <p>Desarrollador de Software  en H&CO</p>
                            <address className="card__addrs">yurguen.campos@ucrso.info</address>
                        </div>
                    </div>
                </div>
        </div>
        </section>
    );
};


export default About;