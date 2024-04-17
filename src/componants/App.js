import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Accueil from './sourcesHomepage/Accueil';
import Configure from './Configure/Configure';
import Contact from './sourcesHomepage/Contact';
import ConfigureCentre from './Configure/ConfigureCentre';
import Versions from './sourcesHomepage/versions'; // Correction du nom du composant
import PureBuild from './Configure/PureBuild';
import LegendBuild from './Configure/LegendBuild';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route exact path="/Configure" element={<Configure />} /> {/* Corrigez le chemin */}
        <Route exact path="/Configure/PureBuild" element={<PureBuild />} /> {/* Utilisez le bon composant */}
        <Route exact path="/Configure/LegendBuild" element={<LegendBuild />} /> {/* Utilisez le bon composant */}
        <Route exact path="/Configure/ConfigureCentre" element={<ConfigureCentre />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/versions" element={<Versions />} /> {/* Utilisez le bon nom du composant */}

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
