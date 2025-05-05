'use client';
import NavBar from '../components/NavBar';

export default function GalleryPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white' }}>
      <NavBar />
      <main style={{ padding: '2rem' }}>
        <h1>Gallery</h1>
        <p>Check back here later.</p>
      </main>
    </div>
  );
}
