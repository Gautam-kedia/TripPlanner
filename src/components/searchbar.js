
import React, {useState} from 'react';
import axios from 'axios';
import './searchbar.css';
// You can add custom styles for your search bar here

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers', {
        headers: {
        'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
          'X-RapidAPI-Key': '6f9f34341dmshacb0374e7f8fdf1p16c1b8jsnffbecb30deef'
        },
        params: {
          query: query,
          location_id: '1',
          limit:'10',
        }
      });
      console.log(response.data);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching flight offers:', error);
    }
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search for destinations, hotels, etc." 
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>Search</button>
      <div className="results">
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="result-item">
              <h3>{result.name}</h3>
              <p>{result.address}</p>
            </div>
           ))
        ): (
          <p>No results fo</p>
        )}
      </div>
    </div>
  );
};


export default SearchBar;