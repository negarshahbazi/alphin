// src/features/legendSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Import des images
import LegendBlanc1 from '../Assets-TP-Alpine-master/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg';
import LegendBlanc2 from '../Assets-TP-Alpine-master/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg';
import LegendBlanc3 from '../Assets-TP-Alpine-master/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg';
import LegendBlanc4 from '../Assets-TP-Alpine-master/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg';
import LegendBleu1 from '../Assets-TP-Alpine-master/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg';
import LegendBleu2 from '../Assets-TP-Alpine-master/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg';
import LegendBleu3 from '../Assets-TP-Alpine-master/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg';
import LegendBleu4 from '../Assets-TP-Alpine-master/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg';
import LegendNoir1 from '../Assets-TP-Alpine-master/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg';
import LegendNoir2 from '../Assets-TP-Alpine-master/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-2.jpg';
import LegendNoir3 from '../Assets-TP-Alpine-master/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg';
import LegendNoir4 from '../Assets-TP-Alpine-master/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg';
import JantBlancLegend from '../Assets-TP-Alpine-master/images/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg';
import JantBlancSerac from '../Assets-TP-Alpine-master/images/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg';
import JantBlancStandard from '../Assets-TP-Alpine-master/images/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg';
import JantBleuLegend from '../Assets-TP-Alpine-master/images/configurateur/jantes/vues/couleur-bleu_jante-legende (3).jpg';
import JantBleuSerac from '../Assets-TP-Alpine-master/images/configurateur/jantes/vues/couleur-bleu_jante-serac (3).jpg';
import JantBleuStandard from '../Assets-TP-Alpine-master/images/configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg';
import JantNoirLegend from '../Assets-TP-Alpine-master/images/configurateur/jantes/vues/couleur-noir_jante-legende (1).jpg';
import JantNoirSerac from '../Assets-TP-Alpine-master/images/configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg';
import JantNoirStandard from '../Assets-TP-Alpine-master/images/configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg';
import CuirBrun1 from '../Assets-TP-Alpine-master/images/configurateur/interieurs/vues/cuir-brun-1.jpg';
import CuirBrun2 from '../Assets-TP-Alpine-master/images/configurateur/interieurs/vues/cuir-brun-2.jpg';
import CuirBrun3 from '../Assets-TP-Alpine-master/images/configurateur/interieurs/vues/cuir-brun-3.jpg';
import CuirNoir1 from '../Assets-TP-Alpine-master/images/configurateur/interieurs/vues/cuir-noir-1.jpg';
import CuirNoir2 from '../Assets-TP-Alpine-master/images/configurateur/interieurs/vues/cuir-noir-2.jpg';
import CuirNoir3 from '../Assets-TP-Alpine-master/images/configurateur/interieurs/vues/cuir-noir-3.jpg';

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




const prixBlanc = 0;
const prixBleu = 1800;
const prixNoir = 840;
const prixJanteSerac = 1000;
const prixJanteStandard = 0;
const prixCuirDinamica = 0;
const prixCuirPerfpre = 800;
const prixJanteLegend = 0;

const equipmentsData = [
  { category: 'Design', name: 'Pack héritage', price: 180, src: Design1 },
  { category: 'Design', name: 'Repose-pieds passager en aluminium', price: 96, src: Design2 },
  { category: 'Media et navigation', name: 'Alpine Télémétrics', price: 204, src: Media1  },
  { category: 'Media et navigation', name: 'Système Audio Focal', price: 600, src: Media2  },
  { category: 'Media et navigation', name: 'Système Audio Focal Premium', price: 1200, src: Media3  },
  { category: 'Media et navigation', name: 'Système Audio standard', price: 0, src: Media4  },
  { category: 'Confort', name: 'Retroviseur intérieur électrochrome', price: 0 },
  { category: 'Confort', name: 'Rétroviseurs ext. chauf. rabattables élec.', price: 504 },
  { category: 'Confort', name: 'Pack de rangement', price: 504 },
  { category: 'Confort', name: 'Régulateur / limiteur de vitesse', price: 0 },
  { category: 'Conduite', name: 'Aide au stationnement AR', price: 420 },
  { category: 'Conduite', name: 'Aide au stationnement AV et AR', price: 750 },
  { category: 'Conduite', name: 'Aide au stationnement AV AR et caméra de recul', price: 1200 },
  { category: 'Conduite', name: 'Echappement Sport actif', price: 1500 },
  { category: 'Sécurité', name: 'Système de freinage Haute-Perf 320mm', price: 1000 },
  { category: 'Sécurité', name: 'Assistance au freinage d\'urgence', price: 0 },
  { category: 'Sécurité', name: 'Airbags frontaux conducteur et passager', price: 0 },
  { category: 'Perso. extérieure', name: 'Etriers de frein couleur Bleu Alpine', price: 384 },
  { category: 'Perso. extérieure', name: 'Logo Alpine sur les ailes avant', price: 120 },
  { category: 'Perso. extérieure', name: 'Etriers de frein couleur Gris Anthracite', price: 0 },
  { category: 'Perso. intérieure', name: 'Pédalier en aluminium', price: 120 },
  { category: 'Perso. intérieure', name: 'Harmonie carbone mat', price: 0 },
  { category: 'Perso. intérieure', name: 'Logo au centre du volant en Bleu Alpine', price: 84 },
  { category: 'Perso. intérieure', name: 'Sièges chauffants', price: 400 }
];



const initialState = {
  imagesBlanche: [LegendBlanc4, LegendBlanc2, LegendBlanc1, LegendBlanc3],
  imagesBleu: [LegendBleu4, LegendBleu2, LegendBleu1, LegendBleu3],
  imagesNoire: [LegendNoir4, LegendNoir2, LegendNoir1, LegendNoir3],

  jantsBlanc: [JantBlancLegend, JantBlancSerac, JantBlancStandard],
  jantsBleu: [JantBleuLegend, JantBleuSerac, JantBleuStandard],
  jantsNoir: [JantNoirLegend, JantNoirSerac, JantNoirStandard],

  CuirBrun: [CuirBrun1, CuirBrun2, CuirBrun3,CuirBrun2],
  CuirNoir: [CuirNoir1, CuirNoir2, CuirNoir3,CuirNoir2],

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
        perfpre: prixCuirPerfpre
      }
    }
  ],

};
export const legendSlice = createSlice({
  name: 'legend',
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },
  },
});

export const { setImages } = legendSlice.actions;



export default legendSlice.reducer;
