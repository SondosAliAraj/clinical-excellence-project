import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import NavNav from "./components/Common/NavNav";
import FeaturesSection from "./components/FeaturesSection";
import ResearchSection from "./components/ResearchSection";
import ProductsSection from "./components/ProductsSection";
import AdvantagesSection from "./components/AdvantagesSection";
import LatestNewsSection from "./components/LatestNewsSection";
import SimpleTabs from "./components/LatestNewsSection/SimpleTabs";

function App() {
  return (
    <div className="App">
      <div className="heroSectionContainer">
        <div className="navbarAppContainer">
          <Navbar />
        </div>
        <HomeSection />
      </div>
      <FeaturesSection />
      <ResearchSection />
      <ProductsSection />
      <AdvantagesSection />
      <LatestNewsSection />
    </div>
  );
}

export default App;
