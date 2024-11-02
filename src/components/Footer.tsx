import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
// import line from '../../public/Line 2.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    
    <div className="w-[1440px] h-[474px] pt-[140px] pb-8 px-8 flex gap-[180px] bg-[#043873]">
      <div className="one w-[240px] h-[169px] flex flex-col gap-[15px]">
        <Image src={logo} alt="logo" width={191} height={34} />
        <p className="w-[240px] h-[120px] text-white text-justify">
          whitepace was created for the new ways we live and work. We make a
          better workspace around the world
        </p>
      </div>
      <div className="two flex flex-col gap-[15px] w-[177px] h-[127px]">
        <h1 className="text-2xl text-white">Product</h1>
        <p className="text-white">Overview</p>
        <p className="text-white">Pricing</p>
        <p className="text-white">Customer Stories</p>
      </div>
      <div className="three w-[130px] h-[130px] flex flex-col gap-4">
        <h1 className="text-2xl text-white">Resources</h1>
        <p className="text-white">Blog</p>
        <p className="text-white">Guides & Tutorials</p>
        <p className="text-white">Help Center</p>
      </div>
      <div className="four w-[99px] h-[130px] flex flex-col gap-4">
        <h1 className="text-2xl text-white">Company</h1>
        <p className="text-white">About Us</p>
        <p className="text-white">Careers</p>
        <p className="text-white">Media Kit</p>
      </div>
      <div className="five w-[259px] h-[182px] flex flex-col gap-[23px]">
        <h1 className="text-3xl text-white">Try It Today</h1>
        <p className="text-white text-justify">Get started for free.
        Add your whole team as your needs grow.</p>
        <button className="flex items-center w-[186px] h-[60px] bg-[#4f9cf9] mt-[20px] py-4 px-6 text-white font-semibold rounded-[8px]">
          Start Today
          <FontAwesomeIcon
              icon={faArrowRight}
              className="relative w-3 h-3 ml-2 cursor-pointer"
            />
        </button>        
      </div>
            
    </div>
   
  );
};

export default Footer;
