import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import NavNav from './components/Common/NavNav'
import FeaturesSection from "./components/FeaturesSection";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <HomeSection/>
      <FeaturesSection/>
    </div>
  );
}

export default App;
