import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../Assets-TP-Alpine-master/images/sources-homepage/interieur/interieur_2_desktop.png';
import centre from '../../Assets-TP-Alpine-master/images/sources-homepage/design/Visuel_1_desktop.jpg';


function Configure() {
  return (
    <div className="gallery-box-container d-flex justify-content-center align-items-center m-5">
      <Link to="/versions" href="#" className="gallery-box m-5">
        <span className="gallery-box__img-container">
          <img src={chair} alt="" className="gallery-box__img" />
        </span>
        <span className="gallery-box__text-wrapper">
          <span className="gallery-box__text">
         CONFIGURATEUR
          </span>
        </span>
      </Link>

      <Link to="./Configure/ConfigureCentre" href="#" className="gallery-box m-5">
        <span className="gallery-box__img-container">
          <img src={centre} alt="" className="gallery-box__img" />
        </span>
        <span className="gallery-box__text-wrapper">
          <span className="gallery-box__text">
            CENTRES ALPINE
          </span>
        </span>
      </Link>

  

    </div>
  );
}

export default Configure;
