// step 1
import { createContext } from "react";
import { useState } from "react";

const ConfigContext = createContext(); //Publishing action

function ConfigProvider({ children }) {
  // customer variable as hook
  const [customers, setCustomers] = useState([
    {
      id: "1",
      name: "john",
      email: "john@io.com",
    },
    {
      id: "2",
      name: "steve",
      email: "steve@io.com",
    },
    {
      id: "3",
      name: "alice",
      email: "alice@io.com",
    },
  ]);
     
  // Expose
  return (
    <ConfigContext.Provider value={{ customers, setCustomers }}>
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigContext, ConfigProvider };
