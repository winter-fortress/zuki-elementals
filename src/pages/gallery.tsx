
'use client';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import NFTCard from '../components/NFTCard';

export default function GalleryPage() {
  const [nfts, setNfts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [sortOption, setSortOption] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [inputPage, setInputPage] = useState('');

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

  function handlePageJump(e: React.FormEvent) {
    e.preventDefault();
    const page = parseInt(inputPage);
    if (!isNaN(page) && page > 0 && page <= 200) {
      setCurrentPage(page);
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white' }}>
      <NavBar />
      <main style={{ padding: '7rem 2rem 2rem 2rem' }}>
        <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            style={{ padding: '0.5rem 1rem', borderRadius: '8px' }}
          >
            ← Prev
          </button>
          <form onSubmit={handlePageJump}>
            <input
              type="number"
              placeholder="Go to page"
              value={inputPage}
              onChange={(e) => setInputPage(e.target.value)}
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          {filtered.map((nft) => (
            <NFTCard
              key={nft.tokenId}
              tokenId={nft.tokenId}
              owner={nft.owner}
              name={nft.name}
              imageUrl={nft.imageUrl}
              tier={nft.tier}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
