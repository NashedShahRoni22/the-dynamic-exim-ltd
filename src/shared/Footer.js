import React from "react";
import image from "../images/logo.webp";
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="p-10 bg-[#0B2239] text-white text-sm">
      <div className="mb-5 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center gap-4">
          <img src={image} alt="" className="h-16" />
          <p>
            THE DYNAMIC EXPORT IMPORT LTD.
            <br />
            Providing reliable elastic since 2017
          </p>
        </div>
        <div className="flex items-center gap-4">
          <AiOutlineHome className="text-3xl" />
          <p>Office: House #874/D (Ground Floor)<br />Master para, Uttarkhan, Dhaka-1230</p>
        </div>
        <div className="flex items-center gap-4">
          <AiOutlinePhone className="text-3xl" />
          <p>01941422183<br />01924107356</p>
        </div>
        <div className="flex items-center gap-4">
          <AiOutlineMail className="text-3xl" />
          <p>
            moin_dynamic201718@yahoo.com <br /> moin@dynamic-exim.com
          </p>
        </div>
      </div>

      <p className="text-center">Copyright © 2024 - All right reserved</p>
    </footer>
  );
};

export default Footer;
