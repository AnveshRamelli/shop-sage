import { debounce } from "lodash";
const Search = ({ setSearch }: any) => {
  const debouncedSearch = debounce((value: string) => setSearch(value), 500);
  return (
    <input
      type="text"
      placeholder="Search..."
      className="border border-gray-300 rounded-lg p-1 w-1/2"
      onChange={(e) => debouncedSearch(e.target.value)}
    />
  );
};
export default Search;
