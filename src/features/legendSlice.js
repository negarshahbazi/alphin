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



const initialState = {
  imagesBlanche: [LegendBlanc4, LegendBlanc2, LegendBlanc1, LegendBlanc3],
  imagesBleu: [LegendBleu4, LegendBleu2, LegendBleu1, LegendBleu3],
  imagesNoire: [LegendNoir4, LegendNoir2, LegendNoir1, LegendNoir3],
  jantsBlanc: [JantBlancLegend, JantBlancSerac, JantBlancStandard],
  jantsBleu: [JantBleuLegend, JantBleuSerac, JantBleuStandard],
  jantNoir: [JantNoirLegend, JantNoirSerac, JantNoirStandard],
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
