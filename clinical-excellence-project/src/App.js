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
import ReviewsSection from "./components/ReviewsSection";
import FooterSection from "./components/FooterSection";
import HomeNavSection from "./components/HomeNavSection";
import ContactsSection from "./components/ContactsSection";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <HomeNavSection />
      <FeaturesSection />
      <ResearchSection />
      <ProductsSection />
      <AdvantagesSection />
      <LatestNewsSection />
      <ReviewsSection />
      <ContactsSection />
    </div>
  );
}

export default App;
