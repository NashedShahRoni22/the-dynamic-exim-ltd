import React from "react";
import HomeWhoAreWe from "./HomeWhoAreWe";
const cards = [
  {
    header:
      "Choose For Many Fabrics and Textiles materials for your production",
    details: "We classified it on the basis of material, design and by craft.",
  },
  {
    header:
      "Create Your Design Only for the Fabric Production and Natural Fabrics",
    details: "With its rapid growth over the last six years, since 2017",
  },
  {
    header:
      "Shoose from various fabric types that are stretchy and comfortable.",
    details: "The Dynamic Exim is a leading export textile service globally.",
  },
];

const HomeProduction = () => {
  return (
    <div className="py-10 mx-5">
      <h2
        className="text-center text-3xl mb-10 font-extrabold"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      >
        WE GIVE TOP PRODUCTION <br />
        FROM EVERY ANGLE.
      </h2>
      <div
        className="grid gap-4 lg:grid-cols-3"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      >
        {cards.map((c, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-base-200 hover:shadow-lg relative"
          >
            <p className="text-5xl text-[#EB4438] font-extrabold">0{i + 1}</p>
            <div className="h-0.5 w-full bg-[#EB4438] my-4"></div>
            <h5 className="font-bold mb-5">{c.header}</h5>
            <p className="text-sm">{c.details}</p>
            <div className="h-10 w-10 bg-[#EB4438] absolute -left-5 -top-5 rounded-full"></div>
          </div>
        ))}
      </div>
      <HomeWhoAreWe />
    </div>
  );
};

export default HomeProduction;
