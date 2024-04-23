import React from 'react';
import Logo from '../Assets-TP-Alpine-master/images/pngwing.com_1.png';

import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
    <div className="container-fluid shadow-blue">
      <img src={Logo} className='w-25'/>
    
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
          <li className="nav-item">
          <Link to="/" className="nav-link active " aria-current="page">Accueil</Link>
          </li>
      
      
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Modéles
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link to="/Configure/PureBuild" className="dropdown-item" href="#">01.Pure</Link></li>
              <li><Link to="/Configure/LegendBuild" className="dropdown-item" href="#">02.Legend</Link></li>
           

           
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/versions" className="nav-link " aria-disabled="true">Configurateur</Link>
          </li>
        </ul>
        <a className='text-black' href='#' style={{color: 'yourColor', textDecoration: 'none'}}><CgProfile className='text-primary' style={{fontSize: '32px'}} /> Mon Alpine</a>
      </div>
    </div>
  </nav>

  </>
  )
}

export default Navbar