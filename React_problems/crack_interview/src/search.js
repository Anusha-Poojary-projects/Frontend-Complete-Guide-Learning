import React, { useState } from 'react';

function SearchFilter() {
  const users = ["Alice", "Bob", "Charlie", "David", "Eve"];
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const search = (e) => {
      setInput(e.target.value)
    const filtered = users.filter((user) =>
      user.toLowerCase().includes(input.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={search}
      />
      <button onClick={search}>Search</button>
      <ul>
        {results.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </>
  );
}

export default SearchFilter;
