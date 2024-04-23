import React from 'react';
import { FaFacebook, FaTwitter, FaDribbble, FaLinkedin } from 'react-icons/fa'; // Import React icons

import '../componants/App.css';
import logo2 from '../Assets-TP-Alpine-master/images/sources-homepage/logo/logo.png';



function Footer() {
    return (
        <>
        
        <a href="#" className='align-items-center justify-content-center d-flex m-5 '>retour en haut de page</a>
         
            <footer className="site-footer shadow-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About <img className='logoFooter' src={logo2} /> </h6>
                            <p className="text-justify">Alpine est en effet une marque automobile française, célèbre pour ses voitures de sport et de course. Fondée en 1955, Alpine a connu son apogée dans les années 1960 et 1970 avec des modèles emblématiques tels que l'Alpine A110.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories Equipements</h6>
                            <ul className="footer-links">
                                <li><a href="/category/c-language/">Conduite</a></li>
                                <li><a href="/category/front-end-development/">Confort</a></li>
                                <li><a href="/category/back-end-development/">Design</a></li>
                                <li><a href="/category/java-programming-language/">Media et navigation</a></li>
                                <li><a href="/category/android/">Perso. exterieure</a></li>
                                <li><a href="/category/templates/">Perso. interieure</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="/about/">A propos nous</a></li>
                                <li><a href="/contact/">Contacter Alpine</a></li>
                                <li><a href="/contribute-at-scanfcode/">Accueil</a></li>
                                <li><a href="/privacy-policy/">Privacy Policy</a></li>
                                <li><a href="/sitemap/">Modéles</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by 
                                <a href="#"> Alpine</a>.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="#"><FaFacebook /></a></li>
                                <li><a className="twitter" href="#"><FaTwitter /></a></li>
                                <li><a className="linkedin" href="#"><FaLinkedin /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
