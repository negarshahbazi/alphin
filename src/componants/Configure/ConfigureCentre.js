import React from 'react';

function ConfigureCentre() {
  return (
    <div className='text-center m-5 '>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177789.4659446757!2d4.640515000714522!3d45.87210175139402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4853677daaaab%3A0xd0b46c5e55016cc0!2sCentre%20Alpine%20Villefranche-Sur-Sa%C3%B4ne!5e0!3m2!1sfr!2sfr!4v1713880299923!5m2!1sfr!2sfr"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default ConfigureCentre;
