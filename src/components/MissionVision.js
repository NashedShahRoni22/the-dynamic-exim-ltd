import { FaGlobeAmericas, FaBullseye } from "react-icons/fa";
import globeImage from "../images/globe.webp";

const MissionVision = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2
            className="text-3xl font-extrabold text-gray-800 mb-4"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            Our Mission & Vision
          </h2>
          <p
            className="text-gray-600 mb-8"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            What drives us forward as a global solutions partner
          </p>

          <div className="grid gap-6">
            {/* Mission */}
            <div
              className="p-6 border rounded-lg shadow hover:shadow-md transition-shadow duration-300 bg-base-200"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex items-center mb-3 text-blue-600">
                <FaGlobeAmericas className="text-3xl mr-3" />
                <h3 className="text-2xl font-semibold">Mission</h3>
              </div>
              <p className="text-gray-700">
                Partnering globally to generate progress and prosperity.
              </p>
            </div>

            {/* Vision */}
            <div
              className="p-6 border rounded-lg shadow hover:shadow-md transition-shadow duration-300 bg-base-200"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex items-center mb-3 text-green-600">
                <FaBullseye className="text-3xl mr-3" />
                <h3 className="text-2xl font-semibold">Vision</h3>
              </div>
              <p className="text-gray-700">
                To be leading global integrated solutions company.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          <img src={globeImage} alt="globe" />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
