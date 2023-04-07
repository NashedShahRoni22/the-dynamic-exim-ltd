import React from "react";

const HomeSlider = () => {
  return (
    <section>
      <div className="carousel w-full h-[50vh] bg-base-300 py-5">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="absolute flex gap-4 right-5 bottom-0">
            <a
              href="#slide2"
              className="btn btn-circle hover:bg-[#EB4438] border-0"
            >
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-[#EB4438] border-0">
              ❯
            </a>
          </div>
          <div className="flex flex-col w-full justify-center text-center container mx-auto">
            <h4 className="text-3xl md:text-5xl lg:text-7xl font-extrabold">
              We specialize in providing <br />
              <span className="text-[#EB4438]">
                high-quality elastic products
              </span>{" "}
              <br />
              for a wide range of applications.
            </h4>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="absolute flex gap-4 right-5 bottom-0">
            <a
              href="#slide1"
              className="btn btn-circle hover:bg-[#EB4438] border-0"
            >
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-[#EB4438] border-0">
              ❯
            </a>
          </div>
          <div className="flex flex-col w-full justify-center text-center container mx-auto">
            <h4 className="text-3xl md:text-5xl lg:text-7xl font-extrabold">
              Our products are designed <br /> to offer superior{" "}
              <span className="text-[#EB4438]">
                comfort, <br />
                flexibility, and support
              </span>
            </h4>
          </div>
        </div>
        {/* <div className="absolute h-12 w-12 bg-[#0B2239] rounded-full"></div> */}
        <div className="hidden lg:block absolute h-12 w-12 bg-[#EB4438] rounded-full top-1/4 left-5"></div>
        <div className="hidden lg:block absolute h-24 w-24 bg-[#EB4438] rounded-full top-1/2 left-5 animate-bounce"></div>
        <div className="hidden lg:block absolute h-16 w-16 bg-[#0B2239] rounded-full top-1/3 right-5 animate-bounce"></div>
      </div>
    </section>
  );
};

export default HomeSlider;
