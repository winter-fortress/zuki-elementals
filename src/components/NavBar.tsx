'use client';
import { useRef, useState } from 'react';
import WalletSection from './WalletSection';

const DROPDOWN_WIDTH: number | 'auto' = 'auto';
const DROPDOWN_ITEM_NOWRAP = true;

export default function NavBar() {
  const [openSocials, setOpenSocials] = useState(false);
  const socialsRef = useRef<HTMLDivElement | null>(null);
  const socialsHideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const socialsEnter = () => {
    if (socialsHideTimer.current) clearTimeout(socialsHideTimer.current);
    setOpenSocials(true);
  };
  const socialsLeave = () => {
    if (socialsHideTimer.current) clearTimeout(socialsHideTimer.current);
    socialsHideTimer.current = setTimeout(() => setOpenSocials(false), 200);
  };

  const [openMore, setOpenMore] = useState(false);
  const moreRef = useRef<HTMLDivElement | null>(null);
  const moreHideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const moreEnter = () => {
    if (moreHideTimer.current) clearTimeout(moreHideTimer.current);
    setOpenMore(true);
  };
  const moreLeave = () => {
    if (moreHideTimer.current) clearTimeout(moreHideTimer.current);
    moreHideTimer.current = setTimeout(() => setOpenMore(false), 200);
  };

  const panelMinWidth =
    DROPDOWN_WIDTH === 'auto' ? ('max-content' as const) : DROPDOWN_WIDTH;

  const linkWhiteSpace = DROPDOWN_ITEM_NOWRAP ? ('nowrap' as const) : ('normal' as const);

  return (
    <nav
      style={{
        width: '100%',
        padding: '0rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: 'black',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)',
        transition: 'box-shadow 0.3s ease-in-out',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px', // slightly tighter spacing for even look
        }}
      >
        {/* Home logo */}
        <a href="/" title="Zuki Home">
          <img
            src="/zuki-home.png"
            alt="Zuki Home"
            style={{ height: '60px', cursor: 'pointer', borderRadius: '8px' }}
          />
        </a>

        {/* Regular links */}
        <a href="/arcade" style={navLinkStyle}>Arcade</a>
        <a href="/manga" style={navLinkStyle}>Manga</a>
        <a href="/gallery" style={navLinkStyle}>Gallery</a>

        {/* Dropdown: My Elementals */}
        <div
          ref={moreRef}
          onMouseEnter={moreEnter}
          onMouseLeave={moreLeave}
          style={{ position: 'relative' }}
        >
          <div style={navLinkStyle}>
            My Elementals ▾
          </div>
          {openMore && (
            <div style={dropdownPanelStyle(panelMinWidth)}>
              <a href="/my-elementals" style={dropdownItemStyle(linkWhiteSpace)}>My Collection</a>
              <a href="/reveal" style={dropdownItemStyle(linkWhiteSpace)}>Reveal Elementals</a>
            </div>
          )}
        </div>

        {/* Dropdown: Socials */}
        <div
          ref={socialsRef}
          onMouseEnter={socialsEnter}
          onMouseLeave={socialsLeave}
          style={{ position: 'relative' }}
        >
          <div style={navLinkStyle}>
            Socials ▾
          </div>
          {openSocials && (
            <div style={dropdownPanelStyle(panelMinWidth)}>
              <a
                href="https://x.com/zukielementals"
                target="_blank"
                rel="noreferrer noopener"
                style={dropdownItemStyle(linkWhiteSpace)}
              >
                Zuki Elementals
              </a>
              <a
                href="https://x.com/ordinalpotions"
                target="_blank"
                rel="noreferrer noopener"
                style={dropdownItemStyle(linkWhiteSpace)}
              >
                Ordinal Potions
              </a>
            </div>
          )}
        </div>

        {/* ✅ New ETC Logo inline with links */}
        <a
          href="https://opensea.io/"
          target="_blank"
          rel="noopener noreferrer"
          title="Ethereum Classic"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img
            src="/opensea-logo.png"
            alt="Ethereum Classic"
            style={{ height: '60px', cursor: 'pointer', display: 'block' }}
          />
        </a>
      </div>

      <WalletSection />
    </nav>
  );
}

// ───────────────────────────────
// Styles
// ───────────────────────────────
const navLinkStyle: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '27px',
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  cursor: 'pointer',
  userSelect: 'none',
};

const dropdownPanelStyle = (panelMinWidth: number | 'max-content'): React.CSSProperties => ({
  position: 'absolute',
  top: '40px',
  left: 0,
  backgroundColor: '#222',
  padding: '12px 16px',
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 1000,
  minWidth: panelMinWidth,
  boxShadow: '0 8px 18px rgba(0,0,0,0.5)',
  maxWidth: '90vw',
  overflowX: 'auto',
});

const dropdownItemStyle = (whiteSpace: 'nowrap' | 'normal'): React.CSSProperties => ({
  color: 'white',
  textDecoration: 'none',
  padding: '12px 0',
  fontSize: '22px',
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  whiteSpace,
});
