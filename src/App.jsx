import FooterComponent from "./components/ui/Footer.component";
import NavbarComponent from "./components/ui/Navbar.component";
import AboutUsPage from "./pages/AboutUs.page";
import ContactUsPage from "./pages/ContactUs.page";
import FAQPage from "./pages/FAQ.page";
import HomePage from "./pages/Home.page";
import { Route, Routes } from "react-router-dom";
import CoinPage from "./pages/Coin.page";

function App() {
  return (
    <div>
      {/*Navbar*/}
      <NavbarComponent />

      {/*Wrapper*/}
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
          <Route path="/ContactUs" element={<ContactUsPage />} />
        </Routes>
      </div>

      {/*Footer*/}
      <FooterComponent />
    </div>
  );
}

export default App;
