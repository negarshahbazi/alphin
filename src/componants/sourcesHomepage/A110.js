import React from 'react';
import Image1 from '../../Assets-TP-Alpine-master/images/sources-homepage/A110/Alpine-A110-1.jpg';

import Image3 from '../../Assets-TP-Alpine-master/images/sources-homepage/design/Moteur_desktop.png';
import { Link } from 'react-router-dom';

function A110() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" >
          <img src={Image1} className="d-block " alt="..." style={{ width: '100%', height: 'auto' }} />
          <div className="row  d-md-block d-flex flex-column justify-content-center align-items-center " style={{  borderRadius: '10px'}}>
            <div className='col-4 carousel-caption  shadow-blue'>
            <h3 className='textWhite text-primary'>Construisez votre propre Alpine</h3>
            <p>Avec l'intelligence artificielle, la technologie révolutionnaire de capot transparent et la conception intuitive, c'est une toute nouvelle Alpine que vous n'avez jamais vue auparavant. Choisissez entre votre modèle préféré et commencez ci-dessous</p>
            <Link to="/versions" className='btn btn-light shadow-blue'>Commencer</Link>
          </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Image3} className="d-block mx-auto " alt="..." style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  );
}

export default A110;
