import React, { useState } from "react";
import { fetchCocktailsByLetter } from "../api/cocktailApi";
import CocktailList from "./CocktailList";
import "./../styles/Cocktail.css";

const CocktailSearch = () => {
  const [letter, setLetter] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const handleSearch = async () => {
    const results = await fetchCocktailsByLetter(letter);
    setCocktails(results);
  };

  return (
    <div className="cocktail-search">
      <h1>Search Cocktails</h1>
      <input
        type="text"
        maxLength="1"
        value={letter}
        onChange={(e) => setLetter(e.target.value.toLowerCase())}
      />
      <button onClick={handleSearch}>Search</button>
      <CocktailList cocktails={cocktails} />
    </div>
  );
};

export default CocktailSearch;
