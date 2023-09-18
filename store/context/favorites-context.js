import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  const [savedMealIds, setSavedMealIds] = useState([]);

  function addFavorite(id) {
    setSavedMealIds((currentData) => [...currentData, id]);
  }

  function removeFavorite(id) {
    setSavedMealIds((currentData) =>
      currentData.filter((itemId) => itemId !== id),
    );
  }

  const value = {
    ids: savedMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
