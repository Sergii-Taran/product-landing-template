import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./layout/Header/Header";
import Hero from "./section/Hero/Hero";
import Features from "./section/Features/Features";
import Gallery from "./section/Gallery/Gallery";
import Reviews from "./section/Reviews/Reviews";
import OrderForm from "./section/OrderForm/OrderForm";
import Footer from "./layout/Footer/Footer";

import StickyOrderButton from "./components/StickyOrderButton/StickyOrderButton";
import FloatingContacts from "./components/FloatingContacts/FloatingContacts";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />

      <div data-aos="fade-up">
        <Hero />
      </div>

      <div data-aos="fade-up">
        <Features />
      </div>

      <div data-aos="fade-up">
        <Gallery />
      </div>

      <div data-aos="fade-up">
        <Reviews />
      </div>

      <div data-aos="fade-up">
        <OrderForm />
      </div>

      <Footer />

      <StickyOrderButton />
      <FloatingContacts />
    </>
  );
}

export default App;
