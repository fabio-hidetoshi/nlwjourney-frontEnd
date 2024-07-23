import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [future, setFuture] = useState("someValue");

  return (
    <AppContext.Provider value={{ future }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
