type Props = {
  sortOption: string;
  setSortOption: (val: string) => void;
};

export default function FilterBar({ sortOption, setSortOption }: Props) {
  return (
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      style={{
        padding: '0.5rem 1rem',
        fontSize: '16px',
        borderRadius: '8px',
        marginBottom: '1.5rem',
        marginLeft: '1rem'
      }}
    >
      <option value="asc">Token ID ↑</option>
      <option value="desc">Token ID ↓</option>
    </select>
  );
}
