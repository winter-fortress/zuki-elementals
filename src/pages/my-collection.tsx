'use client';

import { useEffect, useState } from 'react';
import { useAddress, useChainId } from '@thirdweb-dev/react';
import NavBar from '../components/NavBar';
import NFTCard from '../components/NFTCard';

export default function MyCollectionPage() {
  const address = useAddress();
  const chainId = useChainId();
  const [nfts, setNfts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [sortOption, setSortOption] = useState('asc');

  useEffect(() => {
    async function loadNFTs() {
      const res = await fetch('/api/my-nfts');
      const data = await res.json();
      setNfts(data);
    }
    loadNFTs();
  }, []);

  useEffect(() => {
    if (!address || chainId !== 61) {
      setFiltered([]);
      return;
    }

    const owned = nfts.filter(
      (nft) => nft.owner?.toLowerCase() === address.toLowerCase()
    );

    let result = [...owned];
    if (sortOption === 'asc') {
      result.sort((a, b) => Number(a.tokenId) - Number(b.tokenId));
    } else {
      result.sort((a, b) => Number(b.tokenId) - Number(a.tokenId));
    }

    setFiltered(result);
  }, [sortOption, address, chainId, nfts]);

  const isWrongNetwork = address && chainId !== 61;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white' }}>
      <NavBar />
      <main style={{ padding: '7rem 2rem 2rem 2rem', textAlign: 'center' }}>

        {!address && (
          <div>
            <img src="/zuki.png" alt="Connect Wallet" style={{ maxWidth: '240px', margin: '2rem auto', borderRadius: '12px' }} />
            <p style={{ fontSize: '18px' }}>Please connect your wallet to view your Elementals.</p>
          </div>
        )}

        {isWrongNetwork && (
          <div>
            <img src="/zuki.png" alt="Wrong Network" style={{ maxWidth: '240px', margin: '2rem auto', borderRadius: '12px' }} />
            <p style={{ fontSize: '18px' }}>Please switch to Ethereum Classic (ETC) to view your NFTs.</p>
          </div>
        )}

        {address && !isWrongNetwork && filtered.length === 0 && (
          <div>
            <img src="/zuki.png" alt="No NFTs" style={{ maxWidth: '240px', margin: '2rem auto', borderRadius: '12px' }} />
            <p style={{ fontSize: '18px' }}>No Elementals found in this wallet.</p>
          </div>
        )}

        {address && !isWrongNetwork && filtered.length > 0 && (
          <>
            <div style={{ marginBottom: '2rem' }}>
              <label htmlFor="sort" style={{ marginRight: '1rem' }}>Sort by Token ID:</label>
              <select
                id="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                style={{ padding: '0.5rem', fontSize: '16px' }}
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
              {filtered.map((nft) => (
                <NFTCard
                  key={nft.tokenId}
                  tokenId={nft.tokenId}
                  tier={nft.tier}
                  imageUrl={nft.imageUrl}
                  owner={nft.owner}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}