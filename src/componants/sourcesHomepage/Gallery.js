import React from 'react';
import Image1 from '../../Assets-TP-Alpine-master/images/sources-homepage/galerie/A110_LEGENDE_1.jpg';
import Image2 from '../../Assets-TP-Alpine-master/images/sources-homepage/galerie/A110_LEGENDE_5.jpg';
import Image3 from '../../Assets-TP-Alpine-master/images/sources-homepage/galerie/A110_LEGENDE_9.jpg';
import Image4 from '../../Assets-TP-Alpine-master/images/sources-homepage/galerie/A110_PE_1.jpg';
import Image5 from '../../Assets-TP-Alpine-master/images/sources-homepage/galerie/A110_PE_7.jpg';
import Image6 from '../../Assets-TP-Alpine-master/images/sources-homepage/galerie/A110_PE_9.jpg';
import Image7 from '../../Assets-TP-Alpine-master/images/sources-homepage/galerie/A110_PURE_4.jpg';
import Image8 from '../../Assets-TP-Alpine-master/images/sources-homepage/galerie/A110_PURE_6.jpg';
import Image9 from '../../Assets-TP-Alpine-master/images/sources-homepage/galerie/A110_PURE_8.jpg';

function Gallery() {
  return (
    <div className="container">
      <div className="row m-2">
        <a href="#" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
          <img src={Image1} className="img-fluid rounded shadow-blue" alt="Gallery 1" />
        </a>
        <a href="#" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
          <img src={Image2} className="img-fluid rounded shadow-blue" alt="Gallery 2" />
        </a>
        <a href="#" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
          <img src={Image3} className="img-fluid rounded shadow-blue" alt="Gallery 3" />
        </a>
      </div>
      <div className="row m-2">
        <a href="#" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
          <img src={Image4} className="img-fluid rounded shadow-blue" alt="Gallery 4" />
        </a>
        <a href="#" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
          <img src={Image5} className="img-fluid rounded shadow-blue" alt="Gallery 5" />
        </a>
        <a href="#" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
          <img src={Image6} className="img-fluid rounded shadow-blue" alt="Gallery 6" />
        </a>
        </div>
        <div className="row m-2">
          <a href="#" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
            <img src={Image7} className="img-fluid rounded shadow-blue" alt="Gallery 6" />
          </a>
          <a href="#" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
            <img src={Image8} className="img-fluid rounded shadow-blue" alt="Gallery 6" />
          </a>
          <a href="#" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
            <img src={Image9} className="img-fluid rounded shadow-blue" alt="Gallery 6" />
          </a>    
      </div>
    </div>
  );
}

export default Gallery;
