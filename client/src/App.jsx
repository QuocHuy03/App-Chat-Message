import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./contexts/AppContextProvider";
import Chat from "./pages/Chat";
import NotPage from "./pages/NotPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Conversations from "./pages/Conversations";

function App() {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/chat");
    } else {
      navigate("/login");
    }
  }, [user]);

  return (
    <Routes>
      {user ? (
        <>
          <Route exact path="/chat" element={<Conversations />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="*" element={<NotPage />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      )}
    </Routes>
  );
}

export default App;
