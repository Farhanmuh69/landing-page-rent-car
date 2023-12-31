
import React from 'react';
import './TermsAndUseStyles.css';
import infoData from './TermAndUseData'; // Adjust the path accordingly

function TermsUse() {
  return (
    <div className='about-container'>
      {infoData.map((info, index) => (
        <div key={index}>
          <h1>{info.title}</h1>
          <ul>
            {info.text.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      <h4>NB : harga di atas sewaktu-waktu bisa berubah weekend, long weekend dan hari libur nasional</h4>
    </div>
  );
}

export default TermsUse;
