import React from "react";
import Navbar from "./components/Navbar/Navbar";
import DisplayContainer from "./components/TopDisplay/DisplayContainer";
import FaqsContainer from "./components/FAQs/FaqsContainer";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import Testimonial from "./components/Testimonial/Testimonial";
import img from "./public/john.png";
import MainFeature from "./components/MainFeature/MainFeature";
import WeatherDisplay from "./components/weather-api/weather";

export default function Home() {
  return (
    <>
      <Navbar />
      <DisplayContainer />
      <div id="features">
        <MainFeature />
      </div>
      <WeatherDisplay /> {/* Weather component */}
      <div id="testimonials">
        <Testimonial
          name="John S."
          position="Position"
          companyName="Company Name"
          testimonyText='"Absolutely love my ThunderBolt! Smooth ride, sleek design, and unbeatable performance"'
          imageSrc={img}
        />
      </div>
      <div id="faqs">
        <FaqsContainer />
      </div>
      <GetStarted />
      <Footer />
    </>
  );
}
