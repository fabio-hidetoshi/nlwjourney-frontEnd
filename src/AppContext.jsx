import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [emailList, setEmailList] = useState([]);

  useEffect(() => {
    console.log("AppProvider destination:", destination);
    console.log("AppProvider date:", date);
  }, [destination, date]);

  return (
    <AppContext.Provider
      value={{
        destination,
        setDestination,
        date,
        setDate,
        emailList,
        setEmailList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
