import { createContext } from "react";
import { useSelector } from "react-redux";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <AppContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
