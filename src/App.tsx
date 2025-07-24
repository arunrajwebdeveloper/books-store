import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BookPage from "./pages/BookPage";
import AuthenticatePage from "./pages/AuthenticatePage";
import FlipBook from "./pages/FlipBook";

import "./assets/style/banner.css";
import "./assets/style/book.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/book/:id" element={<BookPage />} />
      <Route path="/read/:id" element={<FlipBook />} />
      <Route path="/auth" element={<AuthenticatePage />} />
    </Routes>
  );
}

export default App;
