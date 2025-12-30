import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { SolutionsPage } from "./pages/Solutions";
import { CinemaDesignPage } from "./pages/CinemaDesign";
import { PortfolioPage } from "./pages/Portfolio";
import { BrandsPage } from "./pages/Brands";
import { ContactPage } from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/cinema-design" element={<CinemaDesignPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
