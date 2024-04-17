import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Tb360View } from "react-icons/tb";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import './build.css';
import color1 from '../../Assets-TP-Alpine-master/images/configurateur/couleurs/selection/blanc.jpg';
import color2 from '../../Assets-TP-Alpine-master/images/configurateur/couleurs/selection/bleu.jpg';
import color3 from '../../Assets-TP-Alpine-master/images/configurateur/couleurs/selection/noir.jpg';

function PureBuild() {
  const imagesBlanche = useSelector((state) => state.pures.imagesBlanche);
  const imagesBleu = useSelector((state) => state.pures.imagesBleu);
  const imagesNoire = useSelector((state) => state.pures.imagesNoire);


  const [currentIndex, setCurrentIndex] = useState(0); // Index de l'image actuellement affichée
  const [currentImages, setCurrentImages] = useState(imagesBlanche); // Tableau d'images actuellement sélectionné
  const [jantVisible, setJantVisible] = useState(false); // État de visibilité de la section "jant"

  // Fonction pour afficher l'image suivante
  const nextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1));
  };
  // Fonction pour afficher l'image précédente
  const prevImage = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1));
  };
  // Fonction pour changer les images en fonction de la couleur sélectionnée
  const changeImages = (color) => {
    switch (color) {
      case 'blanc':
        setCurrentImages(imagesBlanche);
        break;
      case 'bleu':
        setCurrentImages(imagesBleu);
        break;
      case 'noir':
        setCurrentImages(imagesNoire);
        break;
      default:
        setCurrentImages(imagesBlanche);
        break;
    }
    setCurrentIndex(0); // Réinitialiser l'index de l'image actuellement affichée
  };
  // Fonction pour afficher la section "jant"
  const showJantSection = () => {
    setJantVisible(true);
  };

  return (
    <>
      <section className='color'>
        <div className='bg-dark m-0'>
          <h1 className='text-white p-5'>02.Couleur</h1>
        </div>
        <div className='backGround m-0 p-0'>
          <div className=''  >
            <h1 className=''>Alpine A110 Pure Model Configurator</h1>
          </div>
          <div className='container'>
            <div className='row'>

              <div className="col-md-6 image-container d-flex justify-content-center align-items-center">
                <div className='d-flex flex-column justify-content-center align-items-center'>
                  <img src={currentImages[currentIndex]} alt={`Image ${currentIndex}`} style={{ width: '100%', height: 'auto', marginLeft: 'auto', marginRight: 'auto', zIndex: -1 }} />
                  <div className="container  button-container d-flex justify-content-center align-items-center" style={{ width: '20vh' }}>
                    <button onClick={prevImage} style={{ border: 'none', background: 'none', padding: '0', cursor: 'pointer' }}><IoIosArrowDropleftCircle style={{ width: '50', height: 'auto' }} /></button>
                    <Tb360View style={{ width: '50', height: 'auto', marginLeft: 'auto', marginRight: 'auto' }} /> {/* Icone pour l'effet de rotation à 360 degrés */}
                    <button onClick={nextImage} style={{ border: 'none', background: 'none', padding: '0', cursor: 'pointer' }}><IoIosArrowDroprightCircle style={{ width: '50', height: 'auto' }} /></button>
                  </div>
                </div>
              </div>

              <div className="col-md-6  container d-flex justify-content-center align-items-center ">
                <div className='row d-flex justify-content-center align-items-center text-center  mb-5' >
                  <h1>Couleurs</h1>
                  <div className='col-4 ' >
                    <img src={color1} style={{ width: '90%', height: '100px', border: '5px solid black' }} onClick={() => changeImages('blanc')} />
                    <span>Peinture opaque Blanc Glacier</span><br />
                    <b>0 €</b>
                  </div>
                  <div className='col-4'>
                    <img src={color2} style={{ width: '90%', height: '100px', border: '5px solid black' }} onClick={() => changeImages('bleu')} />
                    <span>Teinte spéciale Bleu <br/>Alpine</span><br />
                    <b>1800 €</b>
                  </div>
                  <div className='col-4'>
                    <img src={color3} style={{ width: '90%', height: '100px', border: '5px solid black' }} onClick={() => changeImages('noir')} />
                    <span>Teinte métallisée Noir Profond</span><br />
                    <b>840 €</b>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      <div class='containerNext d-flex justify-content-end align-items-center mt-5 ' >
        <button onClick={showJantSection} style={{ width: '20vh', height: '7vh', border: '2px solid black', borderRadius: '30px 0 0 30px' }} className='buttonNext'><b>Next</b></button>
      </div>

      {jantVisible && (
        <section className='jant'>
          <div className='bg-dark m-0'>
            <h1 className='text-white p-5'>03.Jants & Roues</h1>
          </div>
        </section>
      )}
    </>
  );
}

export default PureBuild;
