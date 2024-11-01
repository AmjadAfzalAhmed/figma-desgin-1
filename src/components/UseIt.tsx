import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import shade from "../../public/Element2.png";

function UseIt() {
  return (
    <div className="w-[1440px] h-[759px] flex bg-[#043873] py-[140px] px-8 gap-[98px] ">
      
      <div className="content flex flex-col w-[657px] h-[288px] gap-6">
      <Image src={shade} alt="shade" width={418} height={18.69} className='relative z-0 top-[200px]'/>
        <div className="text relative mb-[50px]">
          <h1 className="w-[592px] h-[87px] text-white text-[72px] text-justify font-bold leading-[78px] tracking-[-2%]">
            Use as Extension          
          </h1>          
          <p className='w-[657px] h-[90px] leading-[30px] tracking-[-2%] text-white text-[18px] text-justify font-normal mt-[85px]'>
          Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

          </p>
          <button className="flex items-center w-[201px] h-[63px] bg-[#4f9cf9] mt-[20px] py-4 px-6 text-white font-semibold rounded-[8px]">
            Lets Go
            <FontAwesomeIcon
              icon={faArrowRight}
              className="relative w-3 h-3 ml-2 cursor-pointer"
            />
          </button>
        </div>
        
      </div>
      <div className="image bg-[#c4defd] w-[719px] h-[448px]"></div>
    </div>

    
    
  );
}

export default UseIt;
