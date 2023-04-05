import React from "react";
import Lottie from "lottie-react";
import mapAnim from "../anim/world-map-recolor.json";
import {FcVoicemail} from "react-icons/fc"

const Contact = () => {
  return (
    <div className="">
      <div className="flex-col container mx-auto">
        <h2 className="text-center text-3xl font-extrabold py-10">
          Connect with us
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center  pb-20">
          <div className="w-full md:w-1/2 flex justify-center">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="flex justify-center">
                <FcVoicemail className="text-5xl " />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Enter Your Message"
                  className="textarea textarea-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="py-2 rounded bg-green-500 border border-green-500 hover:bg-transparent text-white hover:text-green-500 font-semibold hover:shadow">SEND</button>
              </div>
            </div>
          </div>
          </div>
          {/* google map */}
          <div className="md:w-1/2">
            <Lottie animationData={mapAnim} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
