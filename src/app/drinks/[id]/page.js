import Image from "next/image";
import Link from "next/link";
import React from "react";
import im from "../drink1.jpg";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const fetchDrinkById = async (drinkId) => {
  const res = await fetch(`${url}${drinkId}`);

  if (!res.ok) {
    throw new Error("Filed error in drink id");
  }

  return res.json();
};
const DrinkPage = async ({ params }) => {
  const data = await fetchDrinkById(params.id);
  const title = data?.drinks[0].strDrink;
  const image = data?.drinks[0].strDrinkThumb;
  const instructions = data?.drinks[0].strInstructions;

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-8">
        Go to drinks
      </Link>

      <h2 className="text-2xl mb-8">
        Name of coctail: <span className="text-4xl mb-8">{title}</span>
      </h2>
      <div className="flex gap-8 h-48">
        {/* <img src={image} alt="drink" width={200} height={200} /> */}
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          priority
          className="h-48 w-48 rounded-lg shadow-lg mb-4 ml-8"
        />
        <p className="text-xl">{instructions}</p>
      </div>
    </div>
  );
};

export default DrinkPage;
