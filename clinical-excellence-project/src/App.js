import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";

function App() {
  return (
    // <div className="App">
    //   <HomeNavSection />
    //   <FeaturesSection />
    //   <ResearchSection />
    //   <ProductsSection />
    //   <AdvantagesSection />
    //   <LatestNewsSection />
    //   <ReviewsSection />
    //   <ContactsSection />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
