import React from 'react';
import A110 from './A110';
import Gallery from './Gallery';
import Configure from '../Configure/Configure';
import Video from '../../Assets-TP-Alpine-master/video/210611_A110_X_FelipePantone_Main_Edit_45s-1680x951px.mp4';
import photo from '../../Assets-TP-Alpine-master/images/sources-homepage/A110/Presentation_desktop-1.png';
import logo from '../../Assets-TP-Alpine-master/images/sources-homepage/logo/logo-white.png';
import '../App.css';



function Accueil() {
  return (
    <>
      <A110 />
      <div className='text-center w-50 mx-auto my-5'>
        <h2 className='text-primary'>MADE BY RACERS</h2>
        <p className='mt-4'>
          En 1955, Jean Rédélé, entrepreneur passionné, fonde Alpine sur trois piliers : agilité, élégance, esprit de compétition.
          Conçue par des pilotes pour ceux qui veulent maîtriser l’asphalte, la légende Alpine s’est érigée à travers des victoires mythiques, et un engagement sportif sans limite.
          Depuis 2016, à travers notre nouvelle gamme A 110, nous continuons à gravir tous les échelons du sport automobile. Demain, nous voulons réinventer la sportivité automobile avec des technologies innovantes issues de la Formule 1, pour des pilotes passionnés.
        </p>
      </div>
      <Gallery /> {/* Utilisez le composant Gallery ici */}
      <div className='text-center w-25 mx-auto my-5'>
        <h3 className='text-primary'>MODÈLES</h3>
        <h2 className='mt-4 '>
          LES SENSATIONS DE LA PISTE AU QUOTIDIEN
        </h2>
      </div>
      <Configure />
      <div className='  text-center bg-primary text-white  colorBackGround shadow-blue'>

     
      <div className='container text-center text-white d-flex flex-column justify-content-between  align-items-center'>

        <div className='row mt-5 text-center'>
          <div className='col-md-4'>
            <div className='w-75 d-flex flex-column justify-content-start align-items-center skew-text '>
              <h1 className='text-white'><b>Nouvelle Alpine A 110</b></h1>
              <h2 className='text-black mb-5'>Voici la beauté. Ressentez la férocité</h2>
              <p>Un mélange parfait de polyvalence, de luxe et de pure performance. Un esprit de compétition allié à la performance. L'A110 s'inspire de la légendaire Berlinette et les combine avec des caractéristiques de design modernes qui améliorent son aérodynamisme et créent un effet wow immédiat.</p>
            </div>
          </div>
          <div className='col-md-8 '>
          <img src={logo} alt="Alpine A110" className='mb-3'/>
            <img src={photo} alt="Alpine A110 " style={{ width: '600px', height: 'auto' }}/>
          </div>
        </div>
      </div>
      </div>


      <div className="video-container p-5">
        <video autoPlay muted loop className=' roundedd shadow-blue' >
          <source src={Video} type="video/mp4" />
          {/* Ajoutez des sources supplémentaires ici pour la compatibilité avec différents formats vidéo */}
        </video>
      </div>
    </>
  );
}

export default Accueil;
