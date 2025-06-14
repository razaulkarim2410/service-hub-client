import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      const res = await fetch(`http://localhost:3000/search?q=${value}`);
      const data = await res.json();
      setResults(data);
    } else {
      setResults([]);
    }
  };

  const handleSelect = (id) => {
    navigate(`/services/${id}`);
    setQuery('');
    setResults([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search services..."
        value={query}
        onChange={handleSearch}
        className="px-4 py-2 border rounded w-full"
      />
      {results.length > 0 && (
        <div className="absolute bg-white shadow rounded mt-1 w-full z-10">
          {results.map(service => (
            <div
              key={service._id}
              onClick={() => handleSelect(service._id)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {service.serviceName}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
