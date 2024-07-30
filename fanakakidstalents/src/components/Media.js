import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { ImInsertTemplate } from 'react-icons/im';
import Footer from './Footer';

const Media = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const showServer = 'http://localhost:8000/gallery'; // API endpoint

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(showServer);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [showServer]);


  return (
    <div className='gallery-container'>
      <div className='Gallery-headings'>
        <h1>Gallery</h1>
        <h3>Amazing moments</h3>
      </div>
      {/* ternary statements */}

      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (

        <div className="image-grid" >
          {images.map((image, index) => (
            <img key={index} src={image.url} style={{width:'100%'}} alt={image.description} className='gallery-grid' />
          ))}
        </div>

      )}
      <Footer />
    </div>
  );
};

export default Media;
