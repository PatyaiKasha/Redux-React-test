//Core
import React from 'react';

//Instruments
import './style.css';

const Gallery = ({ pictures }) => {
  console.log(pictures);
  return (
    <div>
      <h2>Gallery</h2>
      <div className="gallery">
        {pictures.map(item => (
          <div key={item.webformatURL} className="gallery-item">
            <img
              src={`${item.webformatURL}`}
              alt={`${item.tags}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
