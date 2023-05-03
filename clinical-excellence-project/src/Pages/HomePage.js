
import FeaturesSection from "../components/FeaturesSection";
import ResearchSection from "../components/ResearchSection";
import ProductsSection from "../components/ProductsSection";
import AdvantagesSection from "../components/AdvantagesSection";
import LatestNewsSection from "../components/LatestNewsSection";
import ReviewsSection from "../components/ReviewsSection";
import HomeNavSection from "../components/HomeNavSection";
import ContactsSection from "../components/ContactsSection";

function HomePage() {
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

export default HomePage;
