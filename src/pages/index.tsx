'use client';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <main style={{ padding: '7rem 2rem 2rem 6rem' }}>
        <h1 style={{ fontSize: '27px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', marginBottom: '2rem' }}>
          ズーキ Zuki Elementals!!
        </h1>
<div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
  <img
    src="/1.gif"
    alt="Zuki Elementals!!"
    style={{
      maxWidth: '200px',
      borderRadius: '12px'
    }}
  />
    <img
      src="/samplezuki.png"
      alt="Zuki Elementals!!"
      style={{
        maxWidth: '200px',
        borderRadius: '12px'
      }}
    />
</div>
        <p style={{ fontSize: '18px', fontFamily: 'Arial, serif', lineHeight: '1.6', marginBottom: '1rem' }}>
          Zuki Elementals is an Azuki art-style NFT collection on Ethereum Classic.
        </p>
        <p style={{ fontSize: '18px', fontFamily: 'Arial, serif', lineHeight: '1.6', marginBottom: '1rem' }}>
          The mission of Zuki Elementals is a commitment to core principles of Ethereum:
        </p>
        <p style={{ fontSize: '18px', fontFamily: 'Arial, serif', lineHeight: '1.6', marginBottom: '3rem' }}>
          Community, Decentralization, and Permissionlessness.
        </p>
        <h1 style={{ fontSize: '27px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', marginBottom: '1rem' }}>
          How does it work?
        </h1>
        <p style={{ fontSize: '18px', fontFamily: 'Arial, serif', lineHeight: '1.6', marginBottom: '1rem' }}>
          20,000 Elemental Beans were airdropped to select users of the Ethereum Classic network.
        </p>
        <p style={{ fontSize: '18px', fontFamily: 'Arial, serif', lineHeight: '1.6', marginBottom: '3rem' }}>
          Elemental Beans can be consumed to take you into the Garden, revealing your Zuki Elemental.
        </p>
        <h1 style={{ fontSize: '27px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', marginBottom: '1rem' }}>
          Airdrop Details
        </h1>
        <p style={{ fontSize: '18px', fontFamily: 'Arial, serif', lineHeight: '1.6', marginBottom: '1rem' }}>
          <a 
            href="https://etc.blockscout.com/token/0x37b52A354AA33e32B32cb5bAfa98f6ba66265899?tab=contract" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#2FAF25', textDecoration: 'underline', marginLeft: '6px' }}
          >
            GreenBean Contract
          </a>
        </p>
        <p style={{ fontSize: '18px', fontFamily: 'Arial, serif', lineHeight: '1.6', marginBottom: '0rem' }}>
          <a 
            href="https://docs.google.com/spreadsheets/d/165wVGPAaXrZctwoQlhywgvR3KuuBSIPXwCZvf0NCM20/edit?gid=1348318684#gid=1348318684" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#2FAF25', textDecoration: 'underline', marginLeft: '6px' }}
          >
            Token Distribution
          </a>
        </p>
<img
  src="/token-distribution.png"
  alt="Token Distribution"
  style={{
    display: 'block',
    width: '100%',
    maxWidth: '800px',
    margin: '0rem 0',
    marginBottom: '3rem', // override the bottom margin
    borderRadius: '12px',
    marginLeft: '0'
  }}
/>
        <h1 style={{ fontSize: '27px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', marginBottom: '2rem' }}>
          Project Roadmap
        </h1>
        <img
          src="/roadmap.png"
          alt="Project Roadmap"
          style={{
            display: 'block',
            width: '100%',
            maxWidth: '800px',
            margin: '0rem 0',
            marginBottom: '2rem', // override the bottom margin
            borderRadius: '12px',
            marginLeft: '0'
          }}
        />
        <h1 style={{ fontSize: '27px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', marginBottom: '3rem' }}>
          Meet the Dev ❤ Elemental #8849
        </h1>
<div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
  <a href="https://x.com/ZukiElementals" target="_blank" rel="noopener noreferrer">
    <img
      src="/dev.png"
      alt="Zuki Elementals!!"
      style={{
        maxWidth: '200px',
        borderRadius: '12px'
      }}
    />
  </a>
  <a href="https://x.com/ordinalpotions" target="_blank" rel="noopener noreferrer">
    <img
      src="/potion.png"
      alt="Zuki Elementals!!"
      style={{
        maxWidth: '200px',
        borderRadius: '12px'
      }}
    />
  </a>
</div>
        <p style={{ fontSize: '18px', fontFamily: 'Arial, serif', lineHeight: '1.6', marginBottom: '1rem' }}>
          "stacking green beans on ETC would be 🔥" -- Proudmoore #8849
        </p>
      </main>
    </div>
  );
}
