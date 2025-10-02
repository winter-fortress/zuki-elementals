'use client';
import { useRef, useState } from 'react';
import WalletSection from './WalletSection';

/** ──────────────────────────────────────────────────────────────
 *  Adjustables
 *  - Set DROPDOWN_WIDTH to 'auto' to fit content (no wrapping)
 *  - Or set to a number (px) for a fixed width, e.g., 260
 *  - DROPDOWN_ITEM_NOWRAP keeps each link on a single line
 *  ──────────────────────────────────────────────────────────── */
const DROPDOWN_WIDTH: number | 'auto' = 'auto';
const DROPDOWN_ITEM_NOWRAP = true;

export default function NavBar() {
  // Dropdown #1 (Socials)
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

  // Dropdown #2 (More / My Elementals)
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

  // Reusable panel sizing based on DROPDOWN_WIDTH
  const panelMinWidth =
    DROPDOWN_WIDTH === 'auto' ? ('max-content' as const) : DROPDOWN_WIDTH;

  // Reusable link nowrap style
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
        <a href="/" title="Zuki Home">
          <img
            src="/zuki-home.png"
            alt="Zuki Home"
            style={{ height: '60px', cursor: 'pointer', borderRadius: '8px' }}
          />
        </a>

        <a
          href="/arcade"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '27px',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
          }}
        >
          Arcade
        </a>
        <a
          href="/manga"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '27px',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
          }}
        >
          Manga
        </a>
        <a
          href="/gallery"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '27px',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
          }}
        >
          Gallery
        </a>

        {/* Dropdown #1: My Elementals (independent) */}
        <div
          ref={moreRef}
          onMouseEnter={moreEnter}
          onMouseLeave={moreLeave}
          style={{ position: 'relative' }}
        >
          <div
            style={{
              color: 'white',
              fontSize: '27px',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            My Elementals ▾
          </div>
          {openMore && (
            <div
              style={{
                position: 'absolute',
                top: '40px',
                left: 0,
                backgroundColor: '#222',
                padding: '12px 16px',
                borderRadius: '6px',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 1000,
                minWidth: panelMinWidth, // ← adjustable
                boxShadow: '0 8px 18px rgba(0,0,0,0.5)',
                // Optional safety for very long entries on small screens:
                maxWidth: '90vw',
                overflowX: 'auto',
              }}
            >
              <a
                href="/my-elementals"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '12px 0',
                  fontSize: '22px',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold',
                  whiteSpace: linkWhiteSpace, // ← no wrapping
                }}
              >
                My Collection
              </a>
              <a
                href="/reveal"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '12px 0',
                  fontSize: '22px',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold',
                  whiteSpace: linkWhiteSpace,
                }}
              >
                Reveal Elementals
              </a>

            </div>
          )}
        </div>

        {/* Dropdown #2: Socials (independent) */}
        <div
          ref={socialsRef}
          onMouseEnter={socialsEnter}
          onMouseLeave={socialsLeave}
          style={{ position: 'relative' }}
        >
          <div
            style={{
              color: 'white',
              fontSize: '27px',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            Socials ▾
          </div>
          {openSocials && (
            <div
              style={{
                position: 'absolute',
                top: '40px',
                left: 0,
                backgroundColor: '#222',
                padding: '12px 16px',
                borderRadius: '6px',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 1000,
                minWidth: panelMinWidth, // ← adjustable
                boxShadow: '0 8px 18px rgba(0,0,0,0.5)',
                maxWidth: '90vw',
                overflowX: 'auto',
              }}
            >
              <a
                href="https://x.com/zukielementals"
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '12px 0',
                  fontSize: '22px',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold',
                  whiteSpace: linkWhiteSpace, // ← no wrapping
                }}
              >
                Zuki Elementals
              </a>
              <a
                href="https://x.com/ordinalpotions"
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '12px 0',
                  fontSize: '22px',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold',
                  whiteSpace: linkWhiteSpace,
                }}
              >
                Ordinal Potions
              </a>
            </div>
          )}
        </div>
      </div>

      <WalletSection />
    </nav>
  );
}
