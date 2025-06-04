'use client';
import NavBar from '../components/NavBar';

export default function MangaPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white' }}>
      <NavBar />
      <main style={{ padding: '7rem 2rem 2rem 6rem' }}>

        <p style={{ fontSize: '18px', fontFamily: 'Arial, serif', lineHeight: '1.6' }}>
          🚧 Check back here later 🔨
        </p>
        <img
        src="/promo.png"
        alt="Zuki Elementals Promo"
        style={{
          display: 'block',
          margin: '2rem auto',
          maxWidth: '100%',
          borderRadius: '12px'
        }}
      />
      </main>
    </div>
  );
}
