import "./FavoriteButton.css";
import React, { useState } from "react";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton() {
  // this should be a state variable
  const [isFavorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!isFavorite);
  };
  return (
    <button
      className="favorite-button"
      onClick={toggleFavorite}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}

//other posibble solution
//import { useState } from "react";
//import "./FavoriteButton.css";
//import { ReactComponent as StarFilled } from "./star-filled.svg";
//import { ReactComponent as Star } from "./star.svg";
//export default function FavoriteButton() {
// this should be a state variable
// const [isFavorite, setIsFavourite] = useState(false);
//  return (
//    <button
//      className="favorite-button"
//      onClick={() => {
//        setIsFavourite(!isFavorite);
//        console.log("favourite Button clicked:", !isFavorite);
//      }}
//      aria-label="favorite"
//   >
//      {isFavorite ? <StarFilled /> : <Star />}
//    </button>
//  );
//}
//
