'use client';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import NFTCard from '../components/NFTCard';

export default function GalleryPage() {
  const [nfts, setNfts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [sortOption, setSortOption] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);

  const NFTsPerPage = 100;

  useEffect(() => {
    async function loadNFTs() {
      const res = await fetch(`/api/nfts?page=${currentPage}`);
      const data = await res.json();
      setNfts(data);
      setFiltered(data);
    }
    loadNFTs();
  }, [currentPage]);

  useEffect(() => {
    let result = [...nfts];
    if (sortOption === 'asc') {
      result = result.sort((a, b) => parseInt(a.tokenId) - parseInt(b.tokenId));
    } else if (sortOption === 'desc') {
      result = result.sort((a, b) => parseInt(b.tokenId) - parseInt(a.tokenId));
    }
    setFiltered(result);
  }, [sortOption, nfts]);

  function PaginationControls() {
    const [localInputPage, setLocalInputPage] = useState('');

    function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      const page = parseInt(localInputPage);
      if (!isNaN(page) && page > 0 && page <= 200 && page !== currentPage) {
        setCurrentPage(page);
        setLocalInputPage('');
      }
    }

    return (
      <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          style={{ padding: '0.5rem 1rem', borderRadius: '8px' }}
        >
          ← Prev
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Go to page"
            value={localInputPage}
            onChange={(e) => setLocalInputPage(e.target.value)}
            style={{ padding: '0.5rem', borderRadius: '6px', width: '100px' }}
          />
          <button type="submit" style={{ padding: '0.5rem', borderRadius: '6px' }}>
            Jump
          </button>
        </form>
        <button
          onClick={() => currentPage < 200 && setCurrentPage(currentPage + 1)}
          style={{ padding: '0.5rem 1rem', borderRadius: '8px' }}
        >
          Next →
        </button>
        <span style={{ marginLeft: '1rem' }}>Page {currentPage} / 200</span>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white' }}>
      <NavBar />
      <main style={{ padding: '7rem 2rem 2rem 2rem' }}>
        <PaginationControls />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
          {filtered.map((nft) => (
            <NFTCard
              key={nft.tokenId}
              tokenId={nft.tokenId}
              owner={nft.owner}
              imageUrl={nft.imageUrl}
              tier={nft.tier}
            />
          ))}
        </div>
        <div style={{ marginTop: '2rem' }}>
          <PaginationControls />
        </div>
      </main>
    </div>
  );
}
