import React, { useState, useEffect } from "react";

const useCard = (film) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    checkFavorites();
  }, [film]);

  const checkFavorites = () => {
    try {
      const favoriteFromStorage = localStorage.getItem(film.episode_id);
      if (favoriteFromStorage) {
        setIsFavorite(true);
      }
    } catch (e) {
      console.error(e)
    }
  };

  const toggleIsFavorite = () => {
    if (!isFavorite) {
      saveToFavorites();
    } else {
      deleteFromFavorites();
    }
    setIsFavorite(!isFavorite);
  };

  const saveToFavorites = () => {
    try {
      localStorage.setItem(film.episode_id, "saved");
    } catch (e) {
      alert(e);
    }
  };
  const deleteFromFavorites = () => {
    try {
      localStorage.removeItem(film.episode_id);
    } catch (e) {
      alert(e);
    }
  };
  return { toggleIsFavorite, isFavorite };
};

export default useCard;
