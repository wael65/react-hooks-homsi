import { createContext } from "react";
import ComponentB from "./ComponentB";

export const userContext = createContext();
export const lastContext = createContext();

const ComponentA = () => {
  return (
    <userContext.Provider value="Wael">
      <lastContext.Provider value="MGD">
        <ComponentB />
      </lastContext.Provider>
    </userContext.Provider>
  );
};

export default ComponentA;
