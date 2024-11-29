import React from "react";
import DrinksList from "../../components/DrinksList.jsx";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Filed to fetch drinks");
  }

  const data = await res.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();

  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};

export default DrinksPage;
