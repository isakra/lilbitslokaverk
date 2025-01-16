const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

export const fetchCocktailsByLetter = async (letter) => {
  try {
    const response = await fetch(`${BASE_URL}search.php?f=${letter}`);
    const data = await response.json();
    return data.drinks || [];
  } catch (error) {
    console.error("Error fetching cocktails:", error);
    return [];
  }
};
