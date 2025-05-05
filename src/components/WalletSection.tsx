'use client';

import ConnectWalletButton from './ConnectWalletButton';

export default function WalletSection() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '1rem',
        gap: '12px',
      }}
    >
      {/* ETC Logo as a clickable help link */}
      <a
        href="https://ethereumclassic.org/blog/2022-12-21-using-ethereum-classic-with-metamask"
        target="_blank"
        rel="noopener noreferrer"
        title="Help connecting Ethereum Classic"
      >
        <img
          src="/ethereum-classic-etc-logo.png"
          alt="Ethereum Classic"
          style={{ height: '60px', cursor: 'pointer' }}
        />
      </a>

      {/* Your original Connect Wallet button */}
      <ConnectWalletButton />
    </div>
  );
}
