import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/style/banner.css";
import "./assets/style/book.css";
import "./assets/style/loader.css";
import "./assets/style/skeleton.css";

import Loader from "./components/common/Loader";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const BookPage = lazy(() => import("./pages/BookPage"));
const FlipBook = lazy(() => import("./pages/FlipBook"));
const AuthenticatePage = lazy(() => import("./pages/AuthenticatePage"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <LandingPage />
          </Suspense>
        }
      />
      <Route
        path="/book/:id"
        element={
          <Suspense fallback={<Loader />}>
            <BookPage />
          </Suspense>
        }
      />
      <Route
        path="/read/:id"
        element={
          <Suspense fallback={<Loader />}>
            <FlipBook />
          </Suspense>
        }
      />
      <Route
        path="/auth"
        element={
          <Suspense fallback={<Loader />}>
            <AuthenticatePage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
