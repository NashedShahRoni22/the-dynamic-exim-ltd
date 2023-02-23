import React from "react";
import { BsTelephonePlus } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import valueImage from "../images/value of proposition.png";
const values = [
  {
    img: "https://i.ibb.co/ckxDsvX/handshake.png",
    name: "Fast & Long Lasting partnership",
  },
  {
    img: "https://i.ibb.co/xjCGPJ9/like.png",
    name: "Excellent Service.",
  },
  {
    img: "https://i.ibb.co/Kmz2fDt/settings.png",
    name: "Progressive",
  },
  {
    img: "https://i.ibb.co/VY42HTW/delivery.png",
    name: "Committed to Delivery",
  },

  {
    img: "https://i.ibb.co/j3rK9Df/package.png",
    name: "Quality Products",
  },
  {
    img: "https://i.ibb.co/4P8GdnX/project-management.png",
    name: "Innovative solutions",
  },
];
const buyers = [
  {
    name: "Meijer",
  },
  {
    name: "H&M",
  },
  {
    name: "Wal-Mart",
  },
  {
    name: "George",
  },
  {
    name: "Reitman's",
  },
  {
    name: "Colin's",
  },
  {
    name: "Koton",
  },
];

const HomeCorporationValue = () => {
  return (
    <>
      <section className="py-5 mx-5">
        <h2 className="text-center text-3xl mb-10 font-semibold">
          CORPORATE VALUE
        </h2>
        <p className="text-center">
          As a global enterprise, Our corporate values set the foundation <br />{" "}
          of business methodologies and guide us towards our vision:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-5">
          {values.map((v, i) => (
            <div
              key={i}
              className="hover:shadow-xl flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:mx-5 gap-2 border p-4 rounded-xl"
            >
              <img src={v.img} alt="" className="h-12 lg:h-16 w-12 lg:w-16" />
              <p className="text-center font-semibold text-sm lg:text-xl">
                {v.name}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-5 mx-5">
        <h2 className="text-center text-3xl mb-10 font-semibold">OUR BUYERS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-5">
          {buyers.map((v, i) => (
            <div key={i} className="shadow-xl border rounded-xl p-4 md:p-8">
              <p className="text-center font-extrabold md:text-3xl">{v.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-5 mx-5">
        <h2 className="text-center text-3xl mb-10 font-semibold">
          Value Propositions
        </h2>
        <div className="grid md:grid-cols-2 items-center">
          <div>
            <p className="text-justify">
              By continuing to widen our network and deepening our sector
              specific expertise, The Dynamic Export Import Company Ltd. of
              companies aim to strengthen value proposition future by providing
              a greater range of integrated business solution across the focused
              industries and markets. In short, Our value proposition is
              succinctly in three points, forming one powerful statement:
            </p>
            <ul className="mt-5">
              <li>
                <span className="font-bold">Convenience</span> : One stop
                provider of integrated solution.
              </li>
              <li>
                <span className="font-bold">Assurance</span> : Delivering
                quality products and services.
              </li>
              <li>
                <span className="font-bold">Network</span> : Leveraging our
                global Network.
              </li>
            </ul>
          </div>
          <div>
            <img src={valueImage} alt="" className="h-96 animate-pulse" />
          </div>
        </div>
      </section>
      <section className="bg-[#EB4438] rounded-lg text-white p-10 flex flex-col md:items-center md:flex-row gap-4 md:gap-16 mx-5">
        <div>
          <BsTelephonePlus className="text-3xl"/>
          <p className="text-sm mt-5">
            Phone Number <br />
            <span className="font-semibold">+8801941422183</span>{" "}
          </p>
        </div>
        <p className="p-2 rounded-full bg-white w-fit h-fit text-[#EB4438]">
          OR
        </p>
        <div>
          <AiOutlineMail className="text-3xl"/>
          <p className="text-sm mt-5">
            Email Address <br />
            <span className="font-semibold">moin_dynamic201718@yahoo.com</span> <br />
            <span className="font-semibold">moin@dynamic-exim.com</span>{" "}
          </p>
        </div>
      </section>
    </>
  );
};

export default HomeCorporationValue;
