import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import AboutUs from "./components/about-us/AboutUs";
import Services from "./components/services/Services";
import Resources from "./components/resources/Resources";
import Feedbacks from "./components/feedbacks/Feedbacks";
import ContactUs from "./components/contact-us/ContactUs";
import Location from "./components/location/Location";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutUs />
      <Services />
      <Resources />
      <Feedbacks />
      <ContactUs />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
