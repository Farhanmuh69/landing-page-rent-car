import React from 'react';
import './FabStyles.css'; // Import a CSS file with your custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {WaLink} from '../socialLink';

const FloatingButton = () => {
  
  return (
    <div className="floatwa">
      <a href={WaLink} target="_blank" rel="noreferrer noopener">
        <div className="tombolwa">
          <FontAwesomeIcon icon={faWhatsapp} />
          <span style={{ marginLeft: '8px' }}>Pesan Sekarang</span>
        </div>
      </a>
    </div>
  );
};

export default FloatingButton;
