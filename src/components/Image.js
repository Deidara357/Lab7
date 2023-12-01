import React, { useState } from 'react';

// Image component as a function
function Image() {
    const [imageUrl, setImageUrl] = useState('https://italy4.me/wp-content/uploads/2018/01/manarola-italia.jpg');
    const [width, setWidth] = useState(1000);
  
    const addImage = () => {
      const newImageUrl = prompt('Введіть URL зображення:');
      if (newImageUrl) {
        setImageUrl(newImageUrl);
      }
    };
  
    const zoomIn = () => {
      setWidth(width * 1.2);
    };
  
    const zoomOut = () => {
      setWidth(width / 1.2);
    };
  
    const deleteImage = () => {
      const confirmation = window.confirm('Ви впевнені, що хочете видалити зображення?');
      if (confirmation) {
        setImageUrl('');
      }
    };
  
    return (
      <div class="image-content">
        <p>
          <a href="https://www.cinqueterre.eu.com/en/manarola">
            <img
              id="main-image"
              src={imageUrl}
              alt="Манарола, Італія"
              style={{ width: `${width}px`}} />
          </a>
        </p>
        <button class="action-button" onClick={addImage}>Додати</button>
        <button class="action-button" onClick={zoomIn}>Збільшити</button>
        <button class="action-button" onClick={zoomOut}>Зменшити</button>
        <button class="action-button" onClick={deleteImage}>Видалити</button>
      </div>
    );
}

export default Image
