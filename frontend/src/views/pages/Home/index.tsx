import React from "react";
import NavigationBar from "../../../components/Navbar";
import HomeBanner from "../../../components/HomeBanner";
import AboutApp from "../../../components/AboutApp";
import AboutUs from "../../../components/AboutUs";
import Contact from "../../../components/Contact";
import Footer from "../../../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <HomeBanner />
      <AboutApp />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
