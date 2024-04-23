// src/features/puresSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Import des images
import PureBlancheSerac1 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg';
import PureBlancheSerac2 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (2).jpg';
import PureBlancheSerac3 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (3).jpg';
import PureBlancheSerac4 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (4).jpg';
import PureBlancheStandard1 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (1).jpg';
import PureBlancheStandard2 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (2).jpg';
import PureBlancheStandard3 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (3).jpg';
import PureBlancheStandard4 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (4).jpg';
import PureBlueSerac1 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg';
import PureBlueSerac2 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (2).jpg';
import PureBlueSerac3 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (3).jpg';
import PureBlueSerac4 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (4).jpg';
import PureBlueStandard1 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (1).jpg';
import PureBlueStandard2 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (2).jpg';
import PureBlueStandard3 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (3).jpg';
import PureBlueStandard4 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (4).jpg';
import PureNoireSerac1 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg';
import PureNoireSerac2 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (2).jpg';
import PureNoireSerac3 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (3).jpg';
import PureNoireSerac4 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (4).jpg';
import PureNoireStandard1 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (1).jpg';
import PureNoireStandard2 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (2).jpg';
import PureNoireStandard3 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (3).jpg';
import PureNoireStandard4 from '../Assets-TP-Alpine-master/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (4).jpg';

import JantBlancSerac from '../Assets-TP-Alpine-master/images/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg';
import JantBlancStandard from '../Assets-TP-Alpine-master/images/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg';
import JantBleuSerac from '../Assets-TP-Alpine-master/images/configurateur/jantes/vues/couleur-bleu_jante-serac (3).jpg';
import JantBleuStandard from '../Assets-TP-Alpine-master/images/configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg';
import JantNoirSerac from '../Assets-TP-Alpine-master/images/configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg';
import JantNoirStandard from '../Assets-TP-Alpine-master/images/configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg';

import CuirNoirDinamica1 from '../Assets-TP-Alpine-master/images/configurateur/interieurs/vues/cuir-noir_dinamica-1.jpg';
import CuirNoirDinamica2 from '../Assets-TP-Alpine-master/images/configurateur/interieurs/vues/cuir-noir_dinamica-2.jpg';
import CuirNoirDinamica3 from '../Assets-TP-Alpine-master/images/configurateur/interieurs/vues/cuir-noir_dinamica-3.jpg';
import CuirNoirPerfore1 from '../Assets-TP-Alpine-master/images/configurateur/interieurs/vues/cuir-noir_perfore-1.jpg';
import CuirNoirPerfore2 from '../Assets-TP-Alpine-master/images/configurateur/interieurs/vues/cuir-noir_perfore-2.jpg';
import CuirNoirPerfore3 from '../Assets-TP-Alpine-master/images/configurateur/interieurs/vues/cuir-noir_perfore-3.jpg';


import Design1 from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/design/pack-heritage.jpg';
import Design2 from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/design/repose-pied-alu.jpg';
import Media1  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/media et navigation/alpine-metrics.jpg';
import Media2  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/media et navigation/audio-focal.jpg';
import Media3  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/media et navigation/audio-premium.jpg';
import Media4  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/media et navigation/audio-standard.jpg';
import Confort1  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/confort/pack-rangement.jpg';
import Confort2  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg';
import Confort3  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/confort/retro-ext-chaffant.jpg';
import Confort4  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg';
import Conduite1  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/conduite/aide-stationnement-ar.jpg';
import Conduite2  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/conduite/aide-stationnement-av-ar.jpg';
import Conduite3  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/conduite/camera-recul.jpg';
import Conduite4  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/conduite/echappement-sport.jpg';
import Securite1  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg';
import Securite2  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/securite/airbag.jpg';
import Securite3  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/securite/freinage-haute-perf.jpg';
import Perso1  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/personnalisation exterieure/etrier-bleu.jpg';
import Perso2  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg';
import Perso3  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/personnalisation exterieure/logo-alpine.jpg';
import Perso4  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/personnalisation interieure/logo-volant.jpg';
import Perso5  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg';
import Perso6  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/personnalisation interieure/pedal-alu.jpg';
import Perso7  from '../Assets-TP-Alpine-master/images/configurateur/equipements/categories/personnalisation interieure/siege-chauffant.jpg';

import TransportEtProtection1  from '../Assets-TP-Alpine-master/images/configurateur/accessoires/transport et protection/alarme.jpg';
import TransportEtProtection2  from '../Assets-TP-Alpine-master/images/configurateur/accessoires/transport et protection/chaaine-neige.jpg';
import TransportEtProtection3  from '../Assets-TP-Alpine-master/images/configurateur/accessoires/transport et protection/extincteur.jpg';
import TransportEtProtection4  from '../Assets-TP-Alpine-master/images/configurateur/accessoires/transport et protection/fixation-extincteur.jpg';
import TransportEtProtection5  from '../Assets-TP-Alpine-master/images/configurateur/accessoires/transport et protection/kit-securite.jpg';
import TransportEtProtection6  from '../Assets-TP-Alpine-master/images/configurateur/accessoires/transport et protection/protection-obd.jpg';
import Multimédia1 from '../Assets-TP-Alpine-master/images/configurateur/accessoires/multimedia/support-camera.jpg';
import Multimédia2 from '../Assets-TP-Alpine-master/images/configurateur/accessoires/multimedia/support-smartphone.jpg';
import Intérieur1 from '../Assets-TP-Alpine-master/images/configurateur/accessoires/interieur/filet-rangement.jpg';
import Intérieur2 from '../Assets-TP-Alpine-master/images/configurateur/accessoires/interieur/tapis-coffre.jpg';
import MatérielDeGarage1 from '../Assets-TP-Alpine-master/images/configurateur/accessoires/garage/chargeur-batterie.jpg';
import MatérielDeGarage2 from '../Assets-TP-Alpine-master/images/configurateur/accessoires/garage/kit-outils.jpg';
import Exterieur1 from '../Assets-TP-Alpine-master/images/configurateur/accessoires/exterieur/antivol-jantes.jpg';
import Exterieur2 from '../Assets-TP-Alpine-master/images/configurateur/accessoires/exterieur/cabochons-metal.jpg';
import Exterieur3 from '../Assets-TP-Alpine-master/images/configurateur/accessoires/exterieur/housse.jpg';

const prixBlanc = 0;
const prixBleu = 1800;
const prixNoir = 840;

const prixJanteSerac = 1000;
const prixJanteStandard = 0;
const prixJanteLegend = 0;

const prixCuirDinamica = 0;
const prixCuirPerfore = 800;


const initialState = {
  imagesBlanche: [PureBlancheSerac1, PureBlancheSerac4, PureBlancheSerac2, PureBlancheSerac3, PureBlancheStandard1, PureBlancheStandard4, PureBlancheStandard2, PureBlancheStandard3],
  imagesBleu: [PureBlueSerac1, PureBlueSerac4, PureBlueSerac2, PureBlueSerac3, PureBlueStandard1, PureBlueStandard4, PureBlueStandard2, PureBlueStandard3],
  imagesNoire: [PureNoireSerac1,PureNoireSerac4,PureNoireSerac2,PureNoireSerac3,PureNoireStandard1,PureNoireStandard4,PureNoireStandard2,PureNoireStandard3,], // Définissez la propriété images avec un tableau vide comme valeur initiale


  jantsBlanc: [JantBlancSerac, JantBlancStandard],
  jantsBleu: [JantBleuSerac, JantBleuStandard],
  jantsNoir: [JantNoirSerac, JantNoirStandard],

  CuirNoirDinamica: [CuirNoirDinamica1, CuirNoirDinamica2, CuirNoirDinamica3, CuirNoirDinamica2,CuirNoirDinamica1, CuirNoirDinamica2, CuirNoirDinamica3, CuirNoirDinamica2],
  CuirNoirPerfore: [CuirNoirPerfore1, CuirNoirPerfore2, CuirNoirPerfore3, CuirNoirPerfore2,CuirNoirPerfore1, CuirNoirPerfore2, CuirNoirPerfore3, CuirNoirPerfore2],
 
  prix: [
    {
      base: 58500,
      couleur: {
        blanc: prixBlanc,
        bleu: prixBleu,
        noir: prixNoir
      },
      jantes: {
        serac: prixJanteSerac,
        standard: prixJanteStandard,
        legend: prixJanteLegend,
      },
      interieur: {
        dinamica: prixCuirDinamica,
        perfore: prixCuirPerfore
      }
    }
  ],

  equipmentsData : [
    { category: 'Design', name: 'Pack héritage', price: 180, src: Design1 },
    { category: 'Design', name: 'Repose-pieds passager en aluminium', price: 96, src: Design2 },
    { category: 'Media', name: 'Alpine Télémétrics', price: 204, src: Media1  },
    { category: 'Media', name: 'Système Audio Focal', price: 600, src: Media2  },
    { category: 'Media', name: 'Système Audio Focal Premium', price: 1200, src: Media3  },
    { category: 'Media', name: 'Système Audio standard', price: 0, src: Media4  },
    { category: 'Confort', name: 'Retroviseur intérieur électrochrome', price: 0, src: Confort1 },
    { category: 'Confort', name: 'Rétroviseurs ext. chauf. rabattables élec.', price: 504, src: Confort2 },
    { category: 'Confort', name: 'Pack de rangement', price: 504, src: Confort3 },
    { category: 'Confort', name: 'Régulateur / limiteur de vitesse', price: 0, src: Confort4 },
    { category: 'Conduite', name: 'Aide au stationnement AR', price: 420, src: Conduite1 },
    { category: 'Conduite', name: 'Aide au stationnement AV et AR', price: 750, src: Conduite2 },
    { category: 'Conduite', name: 'Aide au stationnement AV AR et caméra de recul', price: 1200, src: Conduite3 },
    { category: 'Conduite', name: 'Echappement Sport actif', price: 1500, src: Conduite4 },
    { category: 'Securite', name: 'Système de freinage Haute-Perf 320mm', price: 1000, src: Securite1 },
    { category: 'Securite', name: 'Assistance au freinage d\'urgence', price: 0, src: Securite2 },
    { category: 'Securite', name: 'Airbags frontaux conducteur et passager', price: 0, src: Securite3 },
    { category: 'Perso', name: 'Etriers de frein couleur Bleu Alpine', price: 384, src: Perso1 },
    { category: 'Perso', name: 'Logo Alpine sur les ailes avant', price: 120, src: Perso2 },
    { category: 'Perso', name: 'Etriers de frein couleur Gris Anthracite', price: 0, src: Perso3 },
    { category: 'Perso', name: 'Pédalier en aluminium', price: 120, src: Perso4 },
    { category: 'Perso', name: 'Harmonie carbone mat', price: 0, src: Perso5 },
    { category: 'Perso', name: 'Logo au centre du volant en Bleu Alpine', price: 84, src: Perso6 },
    { category: 'Perso', name: 'Sièges chauffants', price: 400, src: Perso7 }
  ],

  accessoriesData : [
    { category: "Transport et protection", name: "Extincteur 1kg avec manomètre", price: 22,src:TransportEtProtection1 },
    { category: "Transport et protection", name: "Chaîne à neige Premium Grip", price: 336,src:TransportEtProtection2 },
    { category: "Transport et protection", name: "Alarme", price: 543,src:TransportEtProtection3 },
    { category: "Transport et protection", name: "Protection Prise OBD", price: 99,src:TransportEtProtection4 },
    { category: "Transport et protection", name: "Kit de sécurité", price: 20,src:TransportEtProtection5 },
    { category: "Transport et protection", name: "Fixation extincteur", price: 72,src:TransportEtProtection6 },
    { category: "Multimedia", name: "Support caméra sport", price: 89,src:Multimédia1 },
    { category: "Multimedia", name: "Support smartphone magnétique - Fixation sur tableau de bord", price: 21,src:Multimédia2 },
    { category: "Interieur", name: "Tapis de coffre", price: 83,src:Intérieur1 },
    { category: "Interieur", name: "Filet de rangement - Horizontal", price: 59,src:Intérieur2 },
    { category: "Materiel de garage", name: "Chargeur batterie", price: 240,src:MatérielDeGarage1 },
    { category: "Materiel de garage", name: "Kit Outils Alpine", price: 398,src:MatérielDeGarage2 },
    { category: "Exterieur", name: "Cabochons Alpine - Métalisés", price: 24,src:Exterieur1 },
    { category: "Exterieur", name: "Housse de protection Alpine", price: 216,src:Exterieur2 },
    { category: "Exterieur", name: "Antivols pour jante - Noirs", price: 51,src:Exterieur3 }
  ],
};
export const puresSlice = createSlice({
  name: 'pures',
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },
    
  },
});

export const { setImages } = puresSlice.actions;



export default puresSlice.reducer;
