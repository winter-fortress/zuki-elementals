'use client';
import NavBar from '../components/NavBar';

export default function MyElementalsPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white' }}>
      <NavBar />
      <main style={{ padding: '6rem 2rem 2rem 2rem' }}>
        <h1 style={{ fontSize: '27px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', marginBottom: '1rem' }}>
          My Elementals
        </h1>
        <p style={{ fontSize: '18px', fontFamily: 'Georgia, serif', lineHeight: '1.6' }}>
          Check back here later.
        </p>
      </main>
    </div>
  );
}
