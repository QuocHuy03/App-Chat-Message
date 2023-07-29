import { Route, Routes } from "react-router-dom";
import "./App.css";
import Message from "./pages/Message"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Message />} />
      </Routes>
    </>
  );
}

export default App;
