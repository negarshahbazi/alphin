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
const initialState = {
  imagesBlanche: [
    PureBlancheSerac1,
    PureBlancheSerac4,
    PureBlancheSerac2,
    PureBlancheSerac3,
    PureBlancheStandard1,
    PureBlancheStandard4,
    PureBlancheStandard2,
    PureBlancheStandard3,],
  imagesBleu: [
    PureBlueSerac1,
    PureBlueSerac4,
    PureBlueSerac2,
    PureBlueSerac3,
    PureBlueStandard1,
    PureBlueStandard4,
    PureBlueStandard2,
    PureBlueStandard3,],
  imagesNoire: [
    PureNoireSerac1,
    PureNoireSerac4,
    PureNoireSerac2,
    PureNoireSerac3,
    PureNoireStandard1,
    PureNoireStandard4,
    PureNoireStandard2,
    PureNoireStandard3,
  ], // Définissez la propriété images avec un tableau vide comme valeur initiale
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
