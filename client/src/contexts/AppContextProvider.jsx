import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { io } from "socket.io-client";
import { httpApi } from "../env";
import { getAllUser } from "../services/UserService";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const [isUser, setIsUser] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState();

  useEffect(() => {
    const socketInstance = io(httpApi);
    setSocket(socketInstance);
    // unmouht
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  useEffect(() => {
    if (user) {
      const decode = jwt_decode(user.accessToken);
      setIsUser(decode.user);
    } else {
      setIsUser(null);
    }
  }, [user]);

  useEffect(() => {
    if (isUser && isUser.username) {
      socket.emit("user_login", isUser.username);
    }
  }, [socket, isUser]);

  useEffect(() => {
    if (socket) {
      socket.on("update_online_users", (users) => {
        const filteredUsers = users.filter(
          (username) => username !== isUser.username
        );
        setOnlineUsers(filteredUsers);
      });
    }
  }, [socket]);
  
  const getAllUserData = async () => {
    const fetch = await getAllUser();
    return fetch;
  };
  useEffect(() => {
    getAllUserData();
  }, [isUser]);

  return (
    <AppContext.Provider
      value={{
        user,
        socket,
        isUser,
        onlineUsers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
