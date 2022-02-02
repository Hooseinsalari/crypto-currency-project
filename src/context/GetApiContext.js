import React, { useState, useEffect, createContext } from "react";

// api
import { getApi } from "../services/GetApiComponent";

// context
export const CoinsContext = createContext();

const GetApiContext = ({ children }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await getApi();
      setCoins(data);
    };

    fetchApi();
  }, []);

  return (
    <CoinsContext.Provider value={coins}>{children}</CoinsContext.Provider>
  );
};

export default GetApiContext;
