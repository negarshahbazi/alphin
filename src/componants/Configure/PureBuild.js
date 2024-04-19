import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Tb360View } from "react-icons/tb";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import './build.css';
import color1 from '../../Assets-TP-Alpine-master/images/configurateur/couleurs/selection/blanc.jpg';
import color2 from '../../Assets-TP-Alpine-master/images/configurateur/couleurs/selection/bleu.jpg';
import color3 from '../../Assets-TP-Alpine-master/images/configurateur/couleurs/selection/noir.jpg';

import jant2 from '../../Assets-TP-Alpine-master/images/configurateur/jantes/selection/jante-serac.jpg';
import jant3 from '../../Assets-TP-Alpine-master/images/configurateur/jantes/selection/jante-standard.jpg';

import cuir2 from '../../Assets-TP-Alpine-master/images/configurateur/interieurs/selection/cuir-noir_dinamica.jpg';
import cuir3 from '../../Assets-TP-Alpine-master/images/configurateur/interieurs/selection/cuir-noir_perfore.jpg';

function PureBuild() {
  
  const imagesBlanche = useSelector((state) => state.pures.imagesBlanche);
  const imagesBleu = useSelector((state) => state.pures.imagesBleu);
  const imagesNoire = useSelector((state) => state.pures.imagesNoire);

  const jantsBlanc = useSelector((state) => state.pures.jantsBlanc);
  const jantsBleu = useSelector((state) => state.pures.jantsBleu);
  const jantsNoir = useSelector((state) => state.pures.jantsNoir);

  const CuirNoirDinamica = useSelector((state) => state.legend.CuirNoirDinamica); 
  const CuirNoirPerfore = useSelector((state) => state.legend.CuirNoirPerfore); 


  const [currentIndex, setCurrentIndex] = useState(0); // Index de l'image actuellement affichée
  const [currentImages, setCurrentImages] = useState(imagesBlanche); // Tableau d'images actuellement sélectionné
  const [jantVisible, setJantVisible] = useState(false); // État de visibilité de la section "jant"
  const [sellerieVisible, setSellerieVisible] = useState(false); // État de visibilité de la section "sellerie"
  const [currentSellerie, setCurrentSellerie] = useState(CuirNoirDinamica); // Tableau d'images de jantes actuellement sélectionné
  const [prixVisible, setPrixVisible] = useState(false); // Prix personnalisé caché par défaut
  const [arrowIcon, setArrowIcon] = useState(<MdOutlineKeyboardArrowDown />);
  const [currentJants, setCurrentJants] = useState(jantsBlanc); // Tableau d'images de jantes actuellement sélectionné



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
    let selectedImages = imagesNoire;
    let selectedJants = jantsNoir;
    switch (color) {
      case 'blanc':
        selectedImages = imagesBlanche;
        selectedJants = jantsBlanc;
        break;
      case 'bleu':
        selectedImages = imagesBleu;
        selectedJants = jantsBleu;
        break;
      case 'noir':
      default:
        selectedImages = imagesNoire;
        selectedJants = jantsNoir;
        
        break;
    }
    setCurrentIndex(0); // Réinitialiser l'index de l'image actuellement affichée
    setCurrentImages(selectedImages);
    setCurrentJants(selectedJants);
  };

  // Fonction pour changer l'image de jante en fonction de la sélection
  const changeJant = (jant) => {
    let newIndex = 0;

    switch (jant) { 
      case 'serac':
        newIndex = 0;
        break;
      case 'standard':
        newIndex = 1;
        break;
      default:
        newIndex = 0;
        break;
    }

    setCurrentIndex(newIndex);
  };
  // Fonction pour changer les images en fonction de la couleur sélectionnée
  const changeSellerie = (color) => {
    let selectedSellerie = [];
    switch (color) {
      case 'dinamica':
        selectedSellerie = CuirNoirDinamica;
        break;
      case 'perfore':
      default:
        selectedSellerie = CuirNoirPerfore;
        break;
    }

    setCurrentSellerie(selectedSellerie);


  };
  // Fonction pour afficher la section "jant"
  const showJantSection = () => {
    setJantVisible(true);
  };
  // Fonction pour afficher la section "sellerie"
  const showSellerieSection = () => {
    setSellerieVisible(true);
  };

  const showPrix = () => {
    setPrixVisible(!prixVisible);
    setArrowIcon(prixVisible ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />);
  };
  return (
    <>
      <section className='color backGround'>
        <div className='bg-dark m-0 '>
          <h1 className='text-white p-5 '>02.Couleur</h1>
        </div>
        <div className=' m-0 p-0'>
          <div className=''  >
            <h2 className='mb-5 text-center mt-5 '>Extérieure</h2>
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
                  <h1 className='text-primary'>Couleurs</h1>
                  <div className='col-4 ' >
                    <img className='p-1' src={color1} style={{ width: '90%', height: '100px', border: '5px solid black' }} onClick={() => changeImages('blanc')} />
                    <span>Peinture opaque Blanc Glacier</span><br />
                    <b>0 €</b>
                  </div>
                  <div className='col-4'>
                    <img className='p-1' src={color2} style={{ width: '90%', height: '100px', border: '5px solid black' }} onClick={() => changeImages('bleu')} />
                    <span>Teinte spéciale Bleu<br /> Alpine</span><br />
                    <b>1800 €</b>
                  </div>
                  <div className='col-4'>
                    <img className='p-1' src={color3} style={{ width: '90%', height: '100px', border: '5px solid black' }} onClick={() => changeImages('noir')} />
                    <span>Teinte métallisée Noir Profond</span><br />
                    <b>840 €</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton pour afficher le prix personnalisé */}
        <div className='fixed-container '>
          <div className='containerNext d-flex justify-content-start align-items-center ' >
            <button onClick={showPrix} style={{ width: '20vh', height: '7vh', border: '2px solid black', borderRadius: '0 30px 30px 0' }} className='buttonNext'><b>Prix personnalisé {arrowIcon}</b></button>
          </div>
          {/* Contenu Prix personnalisé */}
          {prixVisible && (
            <div className='containerNext d-flex justify-content-start align-items-center' >
              <div className='addition' style={{ border: '2px solid black', borderRadius: '0 0 30px 0' }}>
                <ul className="ma-liste">
                  <li>Base:<span className='fs-6'>58 500 €</span></li>
                  <li>Couleur:</li>
                  <li>Jantes:</li>
                  <li>Intérieure:</li>
                  <li>Équipements:</li>
                  <li>Accessoires:</li>
                  <hr />
                  <li>Prix ​​total:<span className='fs-6'>58 500 €</span></li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div class='containerNext d-flex justify-content-end align-items-center mb-5 ' >
          <button onClick={showJantSection} style={{ width: '20vh', height: '7vh', border: '2px solid black', borderRadius: '30px 0 0 30px' }} className='buttonNext'><b>Next</b></button>
        </div>
      </section >

      {jantVisible && (
        <section className='jant backGround'>
          <div className='bg-dark m-0'>
            <h1 className='text-white p-5'>03.Jants & Roues</h1>
          </div>
          <div className=' m-0 p-0'>
            <div className=''  >
              <h2 className='mb-5 text-center mt-5 '>Jantes</h2>
            </div>
            <div className='container '>
              <div className='row'>
                <div className="col-md-6  container d-flex justify-content-center align-items-center ">
                  <div className='row d-flex justify-content-center align-items-center text-center  mb-5' >
                    <h1 className='text-primary'>Jantes</h1>
                  
                    <div className='col-4'>
                      <img className='p-1' src={jant2} style={{ width: '90%', height: '100px', border: '5px solid black' }} onClick={() => changeJant('serac')} />
                      <span>Serac</span><br />
                      <b>1000 €</b>
                    </div>
                    <div className='col-4'>
                      <img className='p-1' src={jant3} style={{ width: '90%', height: '100px', border: '5px solid black' }} onClick={() => changeJant('standard')} />
                      <span>Standard</span><br />
                      <b>0 €</b>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 image-container d-flex justify-content-center align-items-center">
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={currentJants[currentIndex]} alt={`Image ${currentIndex}`} style={{ width: '100%', height: 'auto', marginLeft: 'auto', marginRight: 'auto', zIndex: -1 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='containerNext d-flex justify-content-end align-items-center mb-5 ' >
            <button onClick={showSellerieSection} style={{ width: '20vh', height: '7vh', border: '2px solid black', borderRadius: '30px 0 0 30px' }} className='buttonNext'><b>Next</b></button>
          </div>
        </section>
      )}
      
      {sellerieVisible && (
        <section className='sellerie backGround'>
          <div className='bg-dark m-0 '>
            <h1 className='text-white p-5'>03.Sellerie</h1>
          </div>
          <div className=' m-0 p-0'>
            <div className=''  >
              <h2 className='mb-5 text-center mt-5 '>Intérieure</h2>
            </div>
            <div className='container'>
              <div className='row'>
                <div className="col-md-6 image-container d-flex justify-content-center align-items-center">
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                  {/* <img src={currentSellerie[currentIndex]} alt={'image' } style={{ width: '100%', height: 'auto', marginLeft: 'auto', marginRight: 'auto', zIndex: -1, border: '4px solid black', padding: '7px', marginBottom: '20px' }} /> */}
                    <div className="container  button-container d-flex justify-content-center align-items-center" style={{ width: '20vh' }}>
                      <button onClick={prevImage} style={{ border: 'none', background: 'none', padding: '0', cursor: 'pointer' }}><IoIosArrowDropleftCircle style={{ width: '50', height: 'auto' }} /></button>
                      <Tb360View style={{ width: '50', height: 'auto', marginLeft: 'auto', marginRight: 'auto' }} /> {/* Icone pour l'effet de rotation à 360 degrés */}
                      <button onClick={nextImage} style={{ border: 'none', background: 'none', padding: '0', cursor: 'pointer' }}><IoIosArrowDroprightCircle style={{ width: '50', height: 'auto' }} /></button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6  container d-flex justify-content-center align-items-center ">
                  <div className='row d-flex justify-content-center align-items-center text-center  mb-5' >
                    <h1 className='text-primary'>Couleurs</h1>

                    <div className='col-4 ' >
                      <img className='p-1' src={cuir2} style={{ width: '100%', height: 'auto', border: '5px solid black' }} onClick={() => changeSellerie('dinamica')} />
                      <span>Sièges baquets en cuir noir et Dinamica</span><br />
                      <b>0 €</b>
                    </div>
                    <div className='col-4'>
                      <img className='p-1' src={cuir3} style={{ width: '100%', height: 'auto', border: '5px solid black' }} onClick={() => changeSellerie('perfore')} />
                      <span>Sièges Confort en cuir noir perforé</span><br />
                      <b>800 €</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='containerNext d-flex justify-content-end align-items-center mb-5 ' >
            <button onClick={showSellerieSection} style={{ width: '20vh', height: '7vh', border: '2px solid black', borderRadius: '30px 0 0 30px' }} className='buttonNext'><b>Next</b></button>
          </div>
        </section>
      )}
    </>
  );
}

export default PureBuild;
