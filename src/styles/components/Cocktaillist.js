import React from "react";
import "./../styles/Cocktail.css";

const CocktailList = ({ cocktails }) => {
  return (
    <div className="cocktail-list">
      {cocktails.length ? (
        cocktails.map((cocktail) => (
          <div key={cocktail.idDrink} className="cocktail-card">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h3>{cocktail.strDrink}</h3>
          </div>
        ))
      ) : (
        <p>No cocktails found!</p>
      )}
    </div>
  );
};

export default CocktailList;
