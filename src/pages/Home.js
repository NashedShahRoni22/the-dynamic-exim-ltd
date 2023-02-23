import React from "react";
import HomeCorporationValue from "../components/HomeCorporationValue";
import HomeProduction from "../components/HomeProduction";
import HomeSlider from "../components/HomeSlider";

const Home = () => {
  return (
    <section>
      <HomeSlider />
      <div className="container mx-auto">
        <HomeProduction />
        <HomeCorporationValue/>
      </div>
    </section>
  );
};

export default Home;
