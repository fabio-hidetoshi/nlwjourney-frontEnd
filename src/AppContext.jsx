import React, { createContext, useContext, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));

  const [emailList, setEmailList] = useState([]);

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

export const useAppContext = () => useContext(AppContext);
