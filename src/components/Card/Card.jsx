import React from "react";
import useCard from "./Card.logic";
import './Card.styles.css';
import FavoriteIcon from "../icons/FavoriteIcon.jsx";

const Card = ({ film }) => {
  const { toggleIsFavorite, isFavorite } = useCard(film);

  return (
    <div className={`Card ${isFavorite && "Card_favorite"}`}>
      <div className={"Card_content"}>
        <div className={"Card_icon_wrapper"} onClick={toggleIsFavorite}>
          <FavoriteIcon isFavorite={isFavorite} />
        </div>

        <div className={"Card_text_wrapper"}>
          <div className={"Card_title"}>{film.title}</div>
          <div className={"Card_opening_crawl"}>{film.opening_crawl}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
