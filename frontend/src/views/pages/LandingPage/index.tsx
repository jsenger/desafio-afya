import React from "react";
import NavigationBar from "../../../components/Navbar";
import HomeBanner from "../../../components/HomeBanner";
import AboutApp from "../../../components/AboutApp";
import AboutUs from "../../../components/AboutUs";
import Contact from "../../../components/Contact";

const LandingPage: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <HomeBanner />
      <AboutApp />
      <Contact />
    </>
  );
};

export default LandingPage;
