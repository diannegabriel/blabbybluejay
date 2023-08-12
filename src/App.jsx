import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<ChatRoom />} />
      </Routes>
    </div>
  );
}

export default App;
