import React from "react";
import Card from "../Card/Card.jsx";
import useCardsWrapper from "./CardsWrapper.logic.jsx";
import "./CardsWrapper.styles.css";

const CardsWrapper = () => {
  const { films } = useCardsWrapper();

  return (
    <div className="CardsWrapper">
      <div className="CardsWrapper_content">
        {films?.length > 0 ? (
          films.map((film) => {
            return <Card key={film.episode_id} film={film} />;
          })
        ) : (
          <div className="CardsWrapper_loading">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default CardsWrapper;
