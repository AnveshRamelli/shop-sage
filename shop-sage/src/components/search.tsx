const Search = ({ setSearch }: any) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="border border-gray-300 rounded-lg p-1 w-1/2"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};
export default Search;
