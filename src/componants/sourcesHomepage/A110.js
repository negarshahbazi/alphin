import React from 'react';
import Image1 from '../../Assets-TP-Alpine-master/images/sources-homepage/A110/Alpine-A110-1.jpg';

import Image3 from '../../Assets-TP-Alpine-master/images/sources-homepage/design/Moteur_desktop.png';

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
          <img src={Image1} className="d-block " alt="..." style={{ width: '100%', height: 'auto' }}/>
        </div>
        <div className="carousel-item">
          <img src={Image3} className="d-block mx-auto" alt="..." style={{ width: '100%', height: 'auto' }}/>
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
