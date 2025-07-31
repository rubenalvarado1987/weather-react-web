import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <div className="flex mb-4 mt-12">
      <input
        type="text"
        className="border p-2 rounded-l"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Santiago de Chile"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded-r"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
