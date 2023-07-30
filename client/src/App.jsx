import { Route, Routes } from "react-router-dom";
import "./App.css";
import Message from "./pages/Message";
import NotPage from "./pages/NotPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
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
