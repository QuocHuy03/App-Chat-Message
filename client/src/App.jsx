import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./contexts/AppContextProvider";
import Message from "./pages/Message";
import NotPage from "./pages/NotPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import jwt_decode from "jwt-decode";

function App() {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [user]);

  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<Message />} />
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
