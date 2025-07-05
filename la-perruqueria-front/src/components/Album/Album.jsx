import './Album.scss';
import ImageCarousel from '../ImageCarousel/ImageCarousel.jsx';
import HeaderDivider from '../HeaderDivider/HeaderDivider.jsx';
import React, { useEffect, useState } from 'react';
import { getPhotos } from '../../services/albumService';
const Album = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPhotos = async () => {
        try {
          const data = await getPhotos();
          setPhotos(data);
        } catch (err) {
          setError("Error al cargar las fotos.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchPhotos();
    }, []);
  
    if (loading) return <p>Cargando fotos...</p>;
    if (error) return <p>{error}</p>;
  


  return (
    <div>
      <HeaderDivider title={'Modelos con Patas y Mucho Estilo '} />
      {<ImageCarousel images={photos} />}
    </div>
  );
};

export default Album;
