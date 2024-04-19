import React, { useEffect, useState } from 'react';
import Legend from '../../Assets-TP-Alpine-master/images/configurateur/modele/selection/legende.png';
import Pure from '../../Assets-TP-Alpine-master/images/configurateur/modele/selection/pure.png';
import { Link } from 'react-router-dom';
import img1 from '../../Assets-TP-Alpine-master/images/configurateur/equipements/selection/conduite.jpg';
import img2 from '../../Assets-TP-Alpine-master/images/configurateur/equipements/selection/confort.jpg';
import img3 from '../../Assets-TP-Alpine-master/images/configurateur/equipements/selection/design.jpg';
import img4 from '../../Assets-TP-Alpine-master/images/configurateur/equipements/selection/media-nav.jpg';
import img5 from '../../Assets-TP-Alpine-master/images/configurateur/equipements/selection/perso-ext.jpg';
import img6 from '../../Assets-TP-Alpine-master/images/configurateur/equipements/selection/perso-int.jpg';
import img7 from '../../Assets-TP-Alpine-master/images/configurateur/equipements/selection/securite.jpg';





function Versions() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6, img7];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className='bg-dark '>
        <h1 className='text-white p-5'>01.Version</h1>
      </div>

      <div className=''  >
            <h2 className='mb-5 text-center mt-5 '>Configurateur de modèle Alpine A110 Legend</h2>
          </div>

      <div className='d-flex justify-content-center align-items-center'><img style={{ border:'5px solid black',padding: '10px' }} className='' src={images[currentImageIndex]} href="#" /></div>
      <h1 className='text-primary mt-5'>CONFIGURATEUR OFFICIEL ALPINE</h1>
      <p className='mb-5'>Choisessez le Modèle que vous souhaitez...</p>

      <div className="wrapper">
        <div className="media">
          <div className="layer">
            <Link to="/Configure/LegendBuild" href="#">
              <p>+ A110 LEGEND</p>
              <p>À partir de: 58 500€ </p>
            </Link>
          </div>
          <img className='m-5' src={Legend} alt="" />

        </div>
        <div className="media ">
          <div className="layer">
            <Link to="/Configure/PureBuild" href="#">
              <p>+ A110 PURE</p>
              <p>À partir de: 54 700€ </p>
            </Link>
          </div>
          <img className='m-5' src={Pure} alt="" />
        </div>

      </div>
    </>
  );
}

export default Versions;
