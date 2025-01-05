import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPhotos, fetchAlbums, fetchUsers } from './api/api';

const App = () => {
  const { data: photos, isLoading: photosLoading } = useQuery({queryKey:'photos', queryFn: fetchPhotos});
  const { data: albums } = useQuery({queryKey:'albums', queryFn: fetchAlbums});
  const { data: users } = useQuery({queryKey:'users', queryFn: fetchUsers});

  if (photosLoading) return <div>Loading...</div>;

  const getAlbumTitle = (albumId) => albums?.find((album) => album.id === albumId)?.title || '';
  const getUserName = (userId) => users?.find((user) => user.id === userId)?.name || '';

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Photo Catalog</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {photos?.map((photo) => (
          <div key={photo.id} style={{ border: '1px solid #ddd', padding: '0.5rem' }}>
            <img src={photo.thumbnailUrl} alt={photo.title} style={{ width: '100%' }} />
            <h2>{photo.title}</h2>
            <p>Album: {getAlbumTitle(photo.albumId)}</p>
            <p>By: {getUserName(photo.albumId)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
