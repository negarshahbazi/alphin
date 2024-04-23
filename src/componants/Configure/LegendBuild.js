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

import jant1 from '../../Assets-TP-Alpine-master/images/configurateur/jantes/selection/jante-legende.jpg';
import jant2 from '../../Assets-TP-Alpine-master/images/configurateur/jantes/selection/jante-serac.jpg';
import jant3 from '../../Assets-TP-Alpine-master/images/configurateur/jantes/selection/jante-standard.jpg';

import cuir1 from '../../Assets-TP-Alpine-master/images/configurateur/interieurs/selection/cuir-brun.jpg';
import cuir4 from '../../Assets-TP-Alpine-master/images/configurateur/interieurs/selection/cuir-noir.jpg';

import img1 from '../../Assets-TP-Alpine-master/images/configurateur/equipements/selection/conduite.jpg';
import img2 from '../../Assets-TP-Alpine-master/images/configurateur/equipements/selection/confort.jpg';
import img3 from '../../Assets-TP-Alpine-master/images/configurateur/equipements/selection/design.jpg';
import img4 from '../../Assets-TP-Alpine-master/images/configurateur/equipements/selection/media-nav.jpg';
import img6 from '../../Assets-TP-Alpine-master/images/configurateur/equipements/selection/perso-int.jpg';
import img7 from '../../Assets-TP-Alpine-master/images/configurateur/equipements/selection/securite.jpg';


function LegendBuild() {
  const imagesBlanche = useSelector((state) => state.legend.imagesBlanche);
  const imagesBleu = useSelector((state) => state.legend.imagesBleu);
  const imagesNoire = useSelector((state) => state.legend.imagesNoire);

  const jantsBlanc = useSelector((state) => state.legend.jantsBlanc);
  const jantsBleu = useSelector((state) => state.legend.jantsBleu);
  const jantsNoir = useSelector((state) => state.legend.jantsNoir);

  const CuirBrun = useSelector((state) => state.legend.CuirBrun);
  const CuirNoir = useSelector((state) => state.legend.CuirNoir);

  const images = [img1, img2, img3, img4, img6, img7];
  const imagesName = ['Conduite', 'Confort', 'Design', 'Media', 'Perso', 'Securite'];

  const equipmentsData = useSelector((state) => state.legend.equipmentsData);
  const [totalEquipmentPrice, setTotalEquipmentPrice] = useState(0);

  const accessoriesData = useSelector((state) => state.legend.accessoriesData);
  const [totalAccessoriesPrice, setTotalAccessoriesPrice] = useState(0);


  const [currentIndex, setCurrentIndex] = useState(0); // Index de l'image actuellement affichée
  const [currentImages, setCurrentImages] = useState(imagesNoire); // Tableau d'images actuellement sélectionné
  const [jantVisible, setJantVisible] = useState(false); // État de visibilité de la section "jant"
  const [currentJants, setCurrentJants] = useState(jantsNoir); // Tableau d'images de jantes actuellement sélectionné
  const [sellerieVisible, setSellerieVisible] = useState(false); // État de visibilité de la section "sellerie"
  const [currentSellerie, setCurrentSellerie] = useState(CuirNoir); // Tableau d'images de jantes actuellement sélectionné
  const [prixVisible, setPrixVisible] = useState(false); // Prix personnalisé caché par défaut
  const [arrowIcon, setArrowIcon] = useState(<MdOutlineKeyboardArrowDown />);
  const [currentPrix, setCurrentPrix] = useState(0); // Tableau d'images de jantes actuellement sélectionné
  const [currentPrixJant, setCurrentPrixJant] = useState(0); // Tableau d'images de jantes actuellement sélectionné
  const [CurrentPrixSellerie, setCurrentPrixSellerie] = useState(0); // Tableau d'images de jantes actuellement sélectionné
  const [equipmentsVisible, setEquipmentsVisible] = useState(false); // État de visibilité de la section "sellerie"
  const [accessoriesVisible, setAccessoriesVisible] = useState(false); // État de visibilité de la section "sellerie"


  // Utilisation des sélecteurs pour récupérer les prix depuis Redux
  const prixBlanc = useSelector((state) => state.legend.prix[0].couleur.blanc);
  const prixBleu = useSelector((state) => state.legend.prix[0].couleur.bleu);
  const prixNoir = useSelector((state) => state.legend.prix[0].couleur.noir);

  const Serac = useSelector((state) => state.legend.prix[0].jantes.serac);
  const Standard = useSelector((state) => state.legend.prix[0].jantes.standard);
  const Legend = useSelector((state) => state.legend.prix[0].jantes.legend);

  const Dinamica = useSelector((state) => state.legend.prix[0].interieur.dinamica);
  const Perfore = useSelector((state) => state.legend.prix[0].interieur.perfore);

  const Base = useSelector((state) => state.legend.prix[0].base);

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

    setCurrentImages(selectedImages);
    setCurrentJants(selectedJants);
    setCurrentIndex(0); // Réinitialiser l'index de l'image actuellement affichée
  };

  // Fonction pour changer l'image de jante en fonction de la sélection
  const changeJant = (jant) => {
    let newIndex = 0;

    switch (jant) {
      case 'legend':
        newIndex = 0;
        break;
      case 'serac':
        newIndex = 1;
        break;
      case 'standard':
        newIndex = 2;
        break;
      default:
        newIndex = 0;
        break;
    }

    setCurrentIndex(newIndex);
  };
  // Fonction pour changer les images en fonction de la couleur sélectionnée
  const changeSellerie = (color) => {
    let selectedSellerie = CuirNoir;
    switch (color) {
      case 'brun':
        selectedSellerie = CuirBrun;
        break;
      case 'noir':
      default:
        selectedSellerie = CuirNoir;
        break;
    }

    setCurrentSellerie(selectedSellerie);


  };

  // Fonction pour changer prix de color en fonction de la sélection
  const changePrix = (type) => {
    let newPrix = 0;
  

    switch (type) {
      case 'prixBlanc':
        newPrix = prixBlanc;
        break;
      case 'prixBleu':
        newPrix = prixBleu;
        break;
      case 'prixNoir':
        newPrix = prixNoir;
        break;
      default:
        newPrix = 0;
        break;
    }

    setCurrentPrix(newPrix);
  

  };

  // Fonction pour changer prix de jant en fonction de la sélection
  const changePrixJant = (type) => {
    let newPrixJant = 0;
   

    switch (type) {
      case 'Legend':
        newPrixJant = Legend;
        break;
      case 'Serac':
        newPrixJant = Serac;
        break;
      case 'Standard':
        newPrixJant = Standard;
        break;
      default:
        newPrixJant = 0;
        break;
    }

    setCurrentPrixJant(newPrixJant);
   

  };

  // Fonction pour changer prix de jant en fonction de la sélection
  const changePrixSellerie = (type) => {
    let newPrixSellerie = 0;
  

    switch (type) {
      case 'Dinamica':
        newPrixSellerie = Dinamica;
        break;
      case 'Perfore':
        newPrixSellerie = Perfore;
        break;
      default:
        newPrixSellerie = 0;
        break;
    }

    setCurrentPrixSellerie(newPrixSellerie);
   

  };

  // Fonction pour mettre à jour le prix total des équipements
  const updateTotalPrice = (price) => {
    setTotalEquipmentPrice(totalEquipmentPrice + price);
  };
  // Fonction pour mettre à jour le prix total des accessories
  const updateTotalPriceAccessories = (price) => {
    setTotalAccessoriesPrice(totalAccessoriesPrice + price);
    
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
  // Fonction pour afficher la section "equipment"
  const showEquipmentsSection = () => {
    setEquipmentsVisible(true);
  };

  const [openedItems, setOpenedItems] = useState(new Array(imagesName.length).fill(false));


  const showEquipmentDetails = (index) => {
    const newOpenedItems = [...openedItems];
    newOpenedItems[index] = !newOpenedItems[index];
    setOpenedItems(newOpenedItems);
  };


  // Fonction pour afficher la section "accessories"
  const showAccessoriesSection = () => {
    setAccessoriesVisible(true);
  };


  // Créer un objet pour stocker les accessoires par catégorie
  const accessoriesByCategory = {};

  // Regrouper les accessoires par catégorie
  accessoriesData.forEach(accessory => {
    if (!accessoriesByCategory[accessory.category]) {
      accessoriesByCategory[accessory.category] = [];
    }
    accessoriesByCategory[accessory.category].push(accessory);
  });
    // État pour suivre la catégorie actuellement ouverte
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Fonction pour gérer le clic sur une catégorie
    const handleCategoryClick = (category) => {
      setSelectedCategory(selectedCategory === category ? null : category);
    };


    // État pour suivre si chaque bouton a été ajouté ou non "accessories"
    const [addedButtons, setAddedButtons] = useState(new Array(accessoriesByCategory.length).fill(false));

    // Fonction pour mettre à jour l'état du bouton lorsqu'il est cliqué
    const handleAddClick = (index) => {
      const newAddedButtons = [...addedButtons];
      newAddedButtons[index] = !newAddedButtons[index]; // Inverser la valeur du bouton
      setAddedButtons(newAddedButtons);
    };


    const [addedButtonsByCategory, setAddedButtonsByCategory] = useState({});

    // Fonction pour mettre à jour l'état du bouton lorsqu'il est cliqué
    const handleAddClicke = (category, index) => {
      setAddedButtonsByCategory(prevState => {
        const newAddedButtons = { ...prevState };
        newAddedButtons[category] = { ...(newAddedButtons[category] || {}) };
        newAddedButtons[category][index] = !newAddedButtons[category][index]; // Inverser la valeur du bouton
        return newAddedButtons;
      });
 };
  return (
    <>


      <section className='color backGround'>
        <div className='bg-dark m-0 shadow-blue'>
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
                  <div className="container  button-container d-flex justify-content-center align-items-center" style={{ width: '30vh' }}>
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
                    <img className='p-1 shadowCard rounded shake1' src={color1} style={{ width: '90%', height: '100px', border: '5px solid black' }} onClick={() => { changeImages('blanc'); changePrix('prixBlanc'); }} />
                    <span>Peinture opaque Blanc Glacier</span><br />
                    <b>{prixBlanc} €</b>
                  </div>
                  <div className='col-4'>
                    <img className='p-1 shadowCard rounded shake1' src={color2} style={{ width: '90%', height: '100px', border: '5px solid black' }} onClick={() => { changeImages('bleu'); changePrix('prixBleu'); }} />
                    <span>Teinte spéciale Bleu<br /> Alpine</span><br />
                    <b>{prixBleu} €</b>
                  </div>
                  <div className='col-4'>
                    <img className='p-1 shadowCard rounded shake1' src={color3} style={{ width: '90%', height: '100px', border: '5px solid black' }} onClick={() => { changeImages('noir'); changePrix('prixNoir'); }} />
                    <span>Teinte métallisée Noir Profond</span><br />
                    <b>{prixNoir} €</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton pour afficher le prix personnalisé */}
        <div className='fixed-container '>
          <div className='containerNext d-flex justify-content-start align-items-center ' >
            <button onClick={showPrix} style={{ width: '20vh', height: '7vh', border: '2px solid black', borderRadius: '0 30px 30px 0' }} className='buttonNext'><b>Prix {arrowIcon}</b></button>
          </div>
          {/* Contenu Prix personnalisé */}
          {prixVisible && (
            <div className='containerNext d-flex justify-content-start align-items-center'  >
              <div className='addition' style={{ border: '2px solid black', borderRadius: '0 0 30px 0' }}>
                <ul className="ma-liste">
                  <li>Base:<span className='fs-6'>{Base} €</span></li>
                  <li>Couleur:<span className='fs-6'>{currentPrix}€</span></li>
                  <li>Jantes:<span className='fs-6'>{currentPrixJant}€</span></li>
                  <li>Intérieure:<span className='fs-6'>{CurrentPrixSellerie}€</span></li>
                  <li>Équipements:<span className='fs-6'>{totalEquipmentPrice}€</span></li>
                  <li>Accessoires:<span className='fs-6'>{ totalAccessoriesPrice }€</span></li>
                  <hr />
                  <li>Prix ​​total:<span className='fs-6'><span className='fs-6'></span>{Base + currentPrix + currentPrixJant + CurrentPrixSellerie + totalEquipmentPrice + totalAccessoriesPrice} €</span></li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div class=' d-flex justify-content-end align-items-center mb-5 ' >
          <button onClick={showJantSection} style={{ width: '20vh', height: '7vh', border: '2px solid black', borderRadius: '30px 0 0 30px' }} className='buttonNext'><b>Next</b></button>
        </div>
      </section >


      {jantVisible && (
        <section className='jant backGround'>
          <div className='bg-dark m-0 shadow-blue'>
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
                    <div className='col-4 ' >
                      <img className='p-1 shadowCard rounded shake1' src={jant1} style={{ width: '90%', height: '100px', border: '5px solid black' }} onClick={() => { changeJant('legend'); changePrixJant('Legend'); }} />
                      <span>Legende</span><br />
                      <b>{Legend} €</b>
                    </div>
                    <div className='col-4'>
                      <img className='p-1 shadowCard rounded shake1' src={jant2} style={{ width: '90%', height: '100px', border: '5px solid black' }} onClick={() => { changeJant('serac'); changePrixJant('Serac'); }} />
                      <span>Serac</span><br />
                      <b>{Serac} €</b>
                    </div>
                    <div className='col-4'>
                      <img className='p-1 shadowCard rounded shake1' src={jant3} style={{ width: '90%', height: '100px', border: '5px solid black' }} onClick={() => { changeJant('standard'); changePrixJant('Standard'); }} />
                      <span>Standard</span><br />
                      <b>{Standard}€</b>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 image-container d-flex justify-content-center align-items-center">
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img  src={currentJants[currentIndex]} alt={`Image ${currentIndex}`} style={{ width: '100%', height: 'auto', marginLeft: 'auto', marginRight: 'auto', zIndex: -1 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=' d-flex justify-content-end align-items-center mb-5 ' >
            <button onClick={showSellerieSection} style={{ width: '20vh', height: '7vh', border: '2px solid black', borderRadius: '30px 0 0 30px' }} className='buttonNext'><b>Next</b></button>
          </div>
        </section>
      )}

      {sellerieVisible && (
        <section className='sellerie backGround'>
          <div className='bg-dark m-0 shadow-blue'>
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
                    <img className='shadowCard' src={currentSellerie[currentIndex]} alt={`Image ${currentIndex}`} style={{ width: '100%', height: 'auto', marginLeft: 'auto', marginRight: 'auto', zIndex: -1, border: '4px solid black', padding: '7px', marginBottom: '20px' }} />
                    <div className="container  button-container d-flex justify-content-center align-items-center" style={{ width: '30vh' }}>
                      <button onClick={prevImage} style={{ border: 'none', background: 'none', padding: '0', cursor: 'pointer' }}><IoIosArrowDropleftCircle style={{ width: '50', height: 'auto' }} /></button>
                      <Tb360View style={{ width: '50', height: 'auto', marginLeft: 'auto', marginRight: 'auto' }} /> {/* Icone pour l'effet de rotation à 360 degrés */}
                      <button onClick={nextImage} style={{ border: 'none', background: 'none', padding: '0', cursor: 'pointer' }}><IoIosArrowDroprightCircle style={{ width: '50', height: 'auto' }} /></button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6  container d-flex justify-content-center align-items-center ">
                  <div className='row d-flex justify-content-center align-items-center text-center  mb-5' >
                    <h1 className='text-primary'>Couleurs</h1>

                    <div className='col-3 ' >
                      <img className='p-1 shadowCard rounded shake1' src={cuir1} style={{ width: '90%', height: '100px', border: '5px solid black' }} onClick={() => { changeSellerie('brun'); changePrixSellerie('Dinamica'); }} />
                      <span>Sièges Confort en cuir brun</span><br />
                      <b>{Dinamica} €</b>
                    </div>
                    <div className='col-3'>
                      <img className='p-1 shadowCard rounded shake1' src={cuir4} style={{ width: '90%', height: '100px', border: '5px solid black' }} onClick={() => { changeSellerie('noir'); changePrixSellerie('Perfore'); }} />
                      <span>Sièges Confort en cuir noir</span><br />
                      <b>{Perfore} €</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=' d-flex justify-content-end align-items-center mb-5 ' >
            <button onClick={showEquipmentsSection} style={{ width: '20vh', height: '7vh', border: '2px solid black', borderRadius: '30px 0 0 30px' }} className='buttonNext'><b>Next</b></button>
          </div>
        </section>
      )}

      {equipmentsVisible && (
        <section className='sellerie backGround'>
          <div className='bg-dark m-0 shadow-blue'>
            <h1 className='text-white p-5'>04.Equipments</h1>
          </div>
          <div className='  m-5 p-0'>
            <div className=''  >
            </div>
            <div className='container'>
              <div className='row d-flex justify-content-between '>
                {/* Utilisez map() pour afficher chaque image */}
                {images.map((image, imageIndex) => (
                  // Utilisez imageIndex au lieu de index
                  <div key={imageIndex} className='col-md-6 mb-3 shadowCard' style={{  padding: '10px' }}>
                    <div className='row d-flex justify-content-between align-items-center'>
                      <div className='col-3'>
                        <img className='shadowCard' style={{ border: '2px solid black', width: '200px', padding: '10px', marginBottom: '5px' }} src={image} alt={`Image ${imageIndex + 1}`} />
                      </div>
                      <div className="col-7">
                        <h1 onClick={() => showEquipmentDetails(imageIndex)}>{imagesName[imageIndex]} {openedItems[imageIndex] ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</h1>
                      </div>
                      {openedItems[imageIndex] && (
                        <div className='d-flex justify-content-center align-items-center'>
                          <ul style={{ listStyleType: 'none', padding: 0 }}>
                            {/* Affiche les détails de l'équipement en fonction de sa catégorie */}
                            {equipmentsData.filter((equipment) => equipment.category === imagesName[imageIndex]).map((equipment, equipmentIndex) => (
                              // Utilisez equipmentIndex au lieu de index
                              <li className='shadowCard ' style={{ textAlign: 'center', marginBottom: '10px', borderRadius: '10px', border: '1px solid black', padding: '10px', display: 'flex', alignItems: 'center' }} key={equipmentIndex}>
                                <img className='shadowCard' style={{ width: '100px', height: '100px', border: '2px solid black', padding: '10px' }} src={equipment.src} alt={equipment.name} />
                                <div className="d-flex flex-column align-items-start justify-content-center mx-3">
                                  <p>{equipment.name}</p>
                                  <div className="price-container">
                                    <p className="price">Price: <b>{equipment.price}€</b></p>
                                  </div>
                                </div>
                                <button 
                                onClick={() => { 
                                  if (!addedButtonsByCategory[imagesName[imageIndex]] || !addedButtonsByCategory[imagesName[imageIndex]][equipmentIndex]) {

                                  updateTotalPrice(equipment.price); 
                                  handleAddClicke(imagesName[imageIndex], equipmentIndex); // Appeler la fonction pour mettre à jour l'état du bouton avec la catégorie correspondante
                                  }
                                }} 
                                className='btn btn-primary buttonPlace rounded shake1' 
                                style={{ marginLeft: 'auto', marginRight: '5px', backgroundColor: (addedButtonsByCategory[imagesName[imageIndex]] && addedButtonsByCategory[imagesName[imageIndex]][equipmentIndex]) ? 'green' : 'blue' }}>
                                {(addedButtonsByCategory[imagesName[imageIndex]] && addedButtonsByCategory[imagesName[imageIndex]][equipmentIndex]) ? 'Added' : 'Add'} 
                              </button>                        </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
          <div class=' d-flex justify-content-end align-items-center mb-5 ' >
            <button onClick={showAccessoriesSection} style={{ width: '20vh', height: '7vh', border: '2px solid black', borderRadius: '30px 0 0 30px' }} className='buttonNext'><b>Next</b></button>
          </div>
        </section>
      )}
      {accessoriesVisible && (
   <section className='sellerie backGround'>
   <div className='bg-dark m-0 shadow-blue'>
     <h1 className='text-white p-5'>05.Accessoires</h1>
   </div>
   {/* Autres éléments de votre composant */}
   <div className='container'>
     <div className='row d-flex justify-content-between m-5'>
       {/* Utiliser map() pour afficher chaque catégorie */}
       {Object.keys(accessoriesByCategory).map((category, index) => (
         <div key={index} className=' m-1 shadowCard' style={{ padding: '10px' }}>
           <div className='row d-flex justify-content-between align-items-center'>
             <div>
               <h1 onClick={() => handleCategoryClick(category)}>
                 {category} {selectedCategory === category ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
               </h1>
             </div>
             {/* Utiliser selectedCategory pour afficher les détails de la catégorie sélectionnée */}
             {selectedCategory === category && (
               <div className='d-flex justify-content-center align-items-center '>
                 <ul style={{ listStyleType: 'none', padding: 0 }}>
                   {/* Utiliser map() pour afficher chaque accessoire de la catégorie sélectionnée */}
                   {accessoriesByCategory[category].map((accessory, accessoryIndex) => (
                     <li className='shadowCard' key={accessoryIndex} style={{ textAlign: 'center', marginBottom: '10px', borderRadius: '10px', border: '1px solid black', padding: '10px', display: 'flex', alignItems: 'center' }}>
                       {/* Afficher les détails de l'accessoire */}
                       <img className='shadowCard ' style={{ width: '200px', height: 'auto', border: '2px solid black', padding: '10px' }} src={accessory.src} alt={accessory.name} />
                       <div className="d-flex flex-column align-items-start justify-content-center mx-3">
                         <p>{accessory.name}</p>
                         <div className="price-container">
                           <p className="price">Price: <b>{accessory.price}€</b></p>
                         </div>
                       </div>
                       <button 
                         onClick={() => { 
                          if (!addedButtonsByCategory[category] || !addedButtonsByCategory[category][accessoryIndex]) {

                           updateTotalPriceAccessories(accessory.price); 
                           handleAddClick(accessoryIndex); // Appeler la fonction pour mettre à jour l'état du bouton
                          }
                         }} 
                         className='btn btn-primary buttonPlace rounded shake1' 
                         style={{ marginLeft: 'auto', marginRight: '5px', backgroundColor: addedButtons[accessoryIndex] ? 'green' : 'blue' }}>
                         {addedButtons[accessoryIndex] ? 'Added' : 'Add'} 
                       </button>
                     </li>
                   ))}
                 </ul>
               </div>
             )}
           </div>
         </div>
       ))}
     </div>
   </div>
   {/* Autres éléments de votre composant */}
 </section>
      )}

    </>
  );
}

export default LegendBuild;
