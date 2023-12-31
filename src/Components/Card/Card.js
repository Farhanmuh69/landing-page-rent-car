import React from 'react';
import './CardStyles.css';
import { WaLink } from '../socialLink';

function Card(props) {
  return (
    <div className="p-card">
      <div className="p-image">
        <img src={props.img} alt="img" />
      </div>
      <h4>{props.heading}</h4>
      <p>Kapasitas: {props.capacity}</p>
      {Array.isArray(props.text) ? (
        <ul>
          {props.text.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{props.text}</p>
      )}
      <a href={WaLink} target="_blank" rel="noopener noreferrer">
        <button className="pesan-button">Pesan Sekarang</button>
      </a>
    </div>
  );
}

export default Card;
