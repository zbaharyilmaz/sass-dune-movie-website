import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Sass/style.scss";
import { useMainFunctionality } from "./hooks/useMainFunctionality";

// Components
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import TrailerSection from "./components/TrailerSection";
import QuickLinksSection from "./components/QuickLinksSection";
import LatestNewsSection from "./components/LatestNewsSection";
import NovelsSection from "./components/NovelsSection";
import AuthorsSection from "./components/AuthorsSection";
import BuyBooksSection from "./components/BuyBooksSection";
import SignUpSection from "./components/SignUpSection";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

// Pages
import AuthorsPage from "./pages/AuthorsPage";
import BooksPage from "./pages/BooksPage";
import NovelsPage from "./pages/NovelsPage";

// Section Divider Component
const SectionDivider: React.FC = () => (
  <div
    className="section-divider"
    style={{
      margin: "4rem 0",
      padding: "2rem 0",
    }}
  >
    <div className="divider-line"></div>
    <div className="divider-icon">✦</div>
    <div className="divider-line"></div>
  </div>
);

function App() {
  useMainFunctionality();

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <Header />
                <MovieSection />
                <SectionDivider />
                <TrailerSection />
                <SectionDivider />
                <QuickLinksSection />
                <SectionDivider />
                <LatestNewsSection />
                <SectionDivider />
                <NovelsSection />
                <SectionDivider />
                <AuthorsSection />
                <SectionDivider />
                <BuyBooksSection />
                <SectionDivider />
                <SignUpSection />
              </>
            }
          />

          {/* Individual Pages */}
          <Route path="/authors" element={<AuthorsPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/novels" element={<NovelsPage />} />
        </Routes>

        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
