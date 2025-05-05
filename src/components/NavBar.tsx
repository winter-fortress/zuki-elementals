'use client';
import { useEffect, useRef, useState } from 'react';
import WalletSection from './WalletSection';

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  let timeout: NodeJS.Timeout;

  useEffect(() => {
    const node = dropdownRef.current;
    const handleMouseEnter = () => {
      clearTimeout(timeout);
      setShowDropdown(true);
    };
    const handleMouseLeave = () => {
      timeout = setTimeout(() => setShowDropdown(false), 200);
    };
    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (node) {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <nav style={{ width: '100%', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
        <a href="/" title="Zuki Home">
          <img src="/zuki-home.png" alt="Zuki Home" style={{ height: '60px', cursor: 'pointer', borderRadius: '8px' }} />
        </a>
        <a href="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '27px', fontFamily: 'Helvetica, sans-serif', fontWeight: 'bold' }}>About</a>
        <a href="/manga" style={{ color: 'white', textDecoration: 'none', fontSize: '27px', fontFamily: 'Helvetica, sans-serif', fontWeight: 'bold' }}>Manga</a>
        <a href="/gallery" style={{ color: 'white', textDecoration: 'none', fontSize: '27px', fontFamily: 'Helvetica, sans-serif', fontWeight: 'bold' }}>Gallery</a>
        <a href="/my-elementals" style={{ color: 'white', textDecoration: 'none', fontSize: '27px', fontFamily: 'Helvetica, sans-serif', fontWeight: 'bold' }}>My Elementals</a>
        <div ref={dropdownRef} style={{ position: 'relative' }}>
          <div style={{ color: 'white', fontSize: '27px', fontFamily: 'Helvetica, sans-serif', fontWeight: 'bold', cursor: 'pointer' }}>
            Socials ▾
          </div>
          {showDropdown && (
            <div style={{ position: 'absolute', top: '40px', left: 0, backgroundColor: '#222', padding: '12px 16px', borderRadius: '6px', display: 'flex', flexDirection: 'column', zIndex: 1000, minWidth: '200px' }}>
              <a href="https://x.com/zukielementals" target="_blank" style={{ color: 'white', textDecoration: 'none', padding: '12px 0', fontSize: '22px', fontFamily: 'Helvetica, sans-serif', fontWeight: 'bold' }}>Zuki Elementals</a>
              <a href="https://x.com/ordinalpotions" target="_blank" style={{ color: 'white', textDecoration: 'none', padding: '12px 0', fontSize: '22px', fontFamily: 'Helvetica, sans-serif', fontWeight: 'bold' }}>Ordinal Potions</a>
            </div>
          )}
        </div>
      </div>
      <WalletSection />
    </nav>
  );
}
