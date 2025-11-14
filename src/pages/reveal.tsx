'use client';
import NavBar from '../components/NavBar';

export default function RevealPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white' }}>
      <NavBar />
      <main style={{ padding: '7rem 2rem 2rem 6rem' }}>

        <p style={{ fontSize: '18px', fontFamily: 'Arial, serif', lineHeight: '1.6' }}>
          🚧 Check back here later 🚧
        </p>
        <img
        src="/sampler.gif"
        alt="Reveal Zuki Elementals Promo"
        style={{
          display: 'block',
          margin: '2rem auto',
          maxWidth: '50%',
          borderRadius: '12px'
        }}
      />
      </main>
    </div>
  );
}
