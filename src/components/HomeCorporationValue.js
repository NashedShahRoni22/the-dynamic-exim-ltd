import React from "react";
import { BsTelephonePlus } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import valueImage from "../images/value of proposition.png";
import quesImage from "../images/factory (1).jpg";
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
        <h2 className="text-center text-3xl mb-10 font-extrabold">
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
        <h2 className="text-center text-3xl mb-10 font-extrabold">OUR BUYERS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-5">
          {buyers.map((v, i) => (
            <div
              key={i}
              className="hover:bg-[#EB4438] hover:text-white cursor-pointer shadow-xl border rounded-xl p-4 md:p-8"
            >
              <p className="text-center font-extrabold md:text-3xl">{v.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-5 mx-5">
        <h2 className="text-center text-3xl mb-10 font-extrabold">
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
      <section className="bg-[#EB4438] rounded-lg text-white p-10 flex justify-around flex-col md:items-center md:flex-row gap-4 md:gap-16 mx-5">
        <div>
          <BsTelephonePlus className="text-3xl" />
          <p className="text-sm mt-5">
            Phone Number <br />
            <span className="font-semibold">+8801941422183</span>{" "}
          </p>
        </div>
        <p className="p-2 rounded-full bg-white w-fit h-fit text-[#EB4438]">
          OR
        </p>
        <div>
          <AiOutlineMail className="text-3xl" />
          <p className="text-sm mt-5">
            Email Address <br />
            <span className="font-semibold">
              moin_dynamic201718@yahoo.com
            </span>{" "}
            <br />
            <span className="font-semibold">moin@dynamic-exim.com</span>{" "}
          </p>
        </div>
      </section>
      <section className="py-5 mx-5">
        <h2 className="text-center text-3xl mb-5 font-extrabold">
          POPULAR QUESTIONS
        </h2>
        <p className="text-sm text-center">
          If you work in the garments industry, chances are you work with
          textiles almost constantly. Whether you’re shopping for, printing on,
          or working with textiles, they never seem to differ much from any
          elastic you’ve worked with.
        </p>
        <div className="py-5 grid md:grid-cols-2 gap-6 items-center place-items-center">
        <div>
            <img src={quesImage} alt="" className="w-96 rounded-xl shadow-xl"/>
          </div>
          <div>
            <div
              tabIndex={0}
              className="my-2 collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title font-semibold">
                Top Rayon Fabric Materials are made of ?
              </div>
              <div className="collapse-content">
                <p>
                  We have recently launched the ability to shop fabrics online
                  and shop poles & tracks online from our website too.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="my-2 collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title font-semibold">
                The Global Fabrics Distributor must be professional !!
              </div>
              <div className="collapse-content">
                <p>
                  Choose from many fabrics and design your. Create and print
                  only the fabric you need aqueous solution for fiber surface .
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="my-2 collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title font-semibold">
                The curse of Fabric Products & Accessories !!
              </div>
              <div className="collapse-content">
                <p>
                  We have built a strong alliance with some of industry tech
                  giants to build a most efficient data analysis and processing.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default HomeCorporationValue;
