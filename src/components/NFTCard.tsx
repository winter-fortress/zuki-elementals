
type Props = {
  tokenId: string;
  tier: string;
  owner: string;
  name: string;
  imageUrl: string;
};

export default function NFTCard({ tokenId, tier, owner, name, imageUrl }: Props) {
  const shortened = name.startsWith('0x') ? `${name.slice(0, 6)}...${name.slice(-6)}` : name;

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#111',
    padding: '1rem',
    borderRadius: '16px',
    width: '220px',
    minHeight: '300px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    textAlign: 'left'
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    borderRadius: '12px',
    marginBottom: '1rem'
  };

  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt={`Zuki Bean #${tokenId}`} style={imageStyle} />
      <div><strong>ID:</strong> {tokenId}</div>
      <div><strong>Tier:</strong> {tier}</div>
      <div style={{ wordBreak: 'break-word', fontSize: '13px' }}>
        <strong>Owner:</strong> {shortened}
      </div>
    </div>
  );
}
