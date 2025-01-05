import React from 'react';
import { fetchPhotos, fetchAlbums, fetchUsers } from '../api/api';

export async function getServerSideProps() {
  // Fetch data on the server for each request
  console.log("build page data")
  const [photos, albums, users] = await Promise.all([
    fetchPhotos(),
    fetchAlbums(),
    fetchUsers(),
  ]);

  return {
    props: {
      photos,
      albums,
      users,
    },
  };
}

const Home = ({ photos, albums, users }) => {
  const getAlbumTitle = (albumId) =>
    albums.find((album) => album.id === albumId)?.title || '';
  const getUserName = (albumId) => {
    const album = albums.find((album) => album.id === albumId);
    return users.find((user) => user.id === album?.userId)?.name || '';
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Photo Catalog (SSR)</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
        }}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            style={{
              border: '1px solid #ddd',
              padding: '0.5rem',
              borderRadius: '4px',
            }}
          >
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              style={{ width: '100%', borderRadius: '4px' }}
            />
            <h2 style={{ fontSize: '1rem', margin: '0.5rem 0' }}>
              {photo.title}
            </h2>
            <p style={{ margin: '0.5rem 0' }}>
              <strong>Album:</strong> {getAlbumTitle(photo.albumId)}
            </p>
            <p style={{ margin: '0.5rem 0' }}>
              <strong>By:</strong> {getUserName(photo.albumId)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
