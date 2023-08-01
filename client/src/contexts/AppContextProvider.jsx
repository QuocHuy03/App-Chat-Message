import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const { user } = useSelector((state) => state.auth);
  const [isUser, setIsUser] = useState();
  useEffect(() => {
    if (user) {
      const decode = jwt_decode(user.accessToken);
      setIsUser(decode.user);
    }
  }, [user]);
  return (
    <AppContext.Provider
      value={{
        user,
        isUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
