import React from "react";
import factoryImage from "../images/factory (2).jpg";
import { Typewriter } from "react-simple-typewriter";
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
    <section className="py-10 mx-5">
      <h2 className="text-center text-3xl mb-10 font-semibold">
        WE GIVE TOP PRODUCTION <br />
        FROM EVERY ANGLE.
      </h2>
      <div className="grid gap-4 lg:grid-cols-3">
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
      <div>
        <h2 className="text-center text-3xl mb-10 font-semibold mt-10">
          WHO ARE WE?
        </h2>
        <div className="grid gap-8 lg:gap-8 lg:grid-cols-2 items-center">
          <div className="relative">
            <img src={factoryImage} alt="" className="rounded-xl shadow-xl" />
            <p className="font-bold lg:text-xl bg-white shadow-xl w-fit p-1 md:p-4 rounded-lg absolute z-10  -bottom-5 -right-5">
              <span className="text-[#EB4438] text-3xl md:text-5xl">5+</span>
              YEARS OF <br /> EXPERIENCE
            </p>
            <div className="absolute z-20 h-full w-full top-0 flex items-center justify-center">
              <p className="text-white text-xl md:text-4xl font-extrabold">
                <Typewriter
                  words={["The Dynamic Export Import LTD"]}
                  loop={""}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
            </div>
            <div className="h-full w-full bg-[#0b2239] absolute top-0 rounded-xl opacity-70"></div>
          </div>
          <p className="text-justify text-sm lg:text-lg">
            <span className="font-bold text-[#EB4438]">
              The Dynamic Export Import Company Ltd. started its operation in
              Bangladesh in the year 2017.
            </span>{" "}
            Its initial role was to source for competitive but quality priced
            garments accessories commodities for the domestic market to support
            Bangladesh's. Within a very short time the company was able to
            establish business partnership with some of the leading
            manufacturers from{" "}
            <span className="font-bold text-[#EB4438]">
              Europe, USA & Canada
            </span>{" "}
            working as a local agent in Bangladesh supplying quality products.
            Later on, the company created export markets for locally
            manufactured products, and promote external trade.
            <br />
            “Dynamic” that could be materialized as "A Single Source Solution"
            from. Manufacturing, export, import, local distribution,
            commissioning & after sales services. Our sincere thanks & great
            appreciation to our prestigious clients for their generous support &
            cooperation that has led to this achievement. We are always open to
            opportunities and look forward in providing you with even a greater
            range of products and more efficient services to your specific
            requirements. May our goal become more fruitful so do our potential
            & valued clients become more satisfied with our quality products &
            our services and that would be the greatest achievements of all
            which we look forward to in the days to come.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeProduction;
