import Image from "next/image";
import Link from "next/link";
import React from "react";

const DrinksList = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mb-8">
      {drinks?.map((drink) => {
        return (
          <li key={drink.idDrink}>
            <Link
              href={`/drinks/${drink.idDrink}`}
              className="text-xl font-medium"
            >
              <div className="relative h-48 w-48">
                <Image
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  fill
                  sizes="(max-width: 768px) 100vw (max-width: 1020px) 50vw"
                />
              </div>
              {drink.strDrink}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
// const DrinksList = ({ drinks }) => {
//   return (
//     <ul className="menu menu-vertical pl-0">
//       {drinks?.map((drink) => {
//         return (
//           <li key={drink.idDrink}>
//             <Link
//               href={`/drinks/${drink.idDrink}`}
//               className="text-xl font-medium"
//             >
//               {drink.strDrink}
//             </Link>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

export default DrinksList;
