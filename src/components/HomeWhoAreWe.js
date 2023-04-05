import React from "react";
import factoryImage from "../images/factory (2).jpg";
import { Typewriter } from "react-simple-typewriter";

const HomeWhoAreWe = () => {
  return (
    <div id="about" className="mx-5">
      <h2 className="text-center text-3xl mb-10 font-extrabold mt-10">
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
          establish business partnership with some of the leading manufacturers
          from{" "}
          <span className="font-bold text-[#EB4438]">Europe, USA & Canada</span>{" "}
          working as a local agent in Bangladesh supplying quality products.
          Later on, the company created export markets for locally manufactured
          products, and promote external trade.
          <br />
          “Dynamic” that could be materialized as "A Single Source Solution"
          from. Manufacturing, export, import, local distribution, commissioning
          & after sales services. Our sincere thanks & great appreciation to our
          prestigious clients for their generous support & cooperation that has
          led to this achievement. We are always open to opportunities and look
          forward in providing you with even a greater range of products and
          more efficient services to your specific requirements. May our goal
          become more fruitful so do our potential & valued clients become more
          satisfied with our quality products & our services and that would be
          the greatest achievements of all which we look forward to in the days
          to come.
        </p>
      </div>
      <h2 className="text-center text-3xl font-extrabold mt-20">
        Meet Our Officials
      </h2>
      <div className="grid gap-4 md:grid-cols-2 items-center mt-10">
        <div className="relative group">
          <div>
            <img
              src="https://i.ibb.co/1KnHXz2/moin2.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="absolute top-0 h-full w-full bg-black/50 opacity-0 group-hover:opacity-100">
            <div className="flex flex-col justify-end items-center h-full lg:text-3xl">
              <p className="text-white">Abdullah Al-Moin</p>
              <p className="text-white mb-5">Managing Director</p>
            </div>
          </div>
        </div>
        <p className="text-justify text-black">
          As an elastic business owner, I understand the importance of being
          flexible and adaptable in today's ever-changing business landscape. I
          believe that success in business comes not just from having a great
          product or service, but from having the ability to pivot and adjust
          your strategy when needed. <br />
          Throughout my career, I have built a reputation for being able to
          navigate through uncertain times and come out stronger on the other
          side. Whether it's through exploring new markets, implementing
          innovative technologies, or simply finding creative solutions to
          everyday challenges, I am always looking for ways to stay ahead of the
          curve and drive my business forward. <br />
          <span className="hidden lg:block">
            But being an elastic business owner isn't just about being agile and
            responsive - it's also about being resilient and determined. I
            believe that with hard work, persistence, and a willingness to take
            calculated risks, anyone can achieve their goals and make their
            business dreams a reality. <br />
            So whether you're a startup founder, a small business owner, or an
            established entrepreneur, I am here to help you navigate the
            challenges of the business world and achieve the success you
            deserve. Together, we can create a strategy that is both flexible
            and strong, allowing you to adapt and thrive no matter what the
            future holds.
          </span>
        </p>
      </div>
    </div>
  );
};

export default HomeWhoAreWe;
