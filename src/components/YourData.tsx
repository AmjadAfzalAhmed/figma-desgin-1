import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import data from "../../public/Your Data Element.png";
import shade from "../../public/Element2.png";

function YourData() {
  return (
    <div className="w-[1440px] h-[661.13px] flex gap-[100px] py-[140px] px-8">
      
      <div className="content relative w-[633px] h-[324px] flex flex-col gap-[60px]">
        <Image
          src={shade}
          alt="shade"
          width={334.11}
          height={25.55}
          className="relative z-0 top-[160px] left-[240px]"
        />
        <div className="text relative">
          <h1 className="w-[633px] h-[87px] text-[72px] text-justify font-bold leading-[87.14px]">
            100% your data
          </h1>
          <p className="w-[633px] h-[90px] text-[18px] font-normal leading-[30px] tracking-[-2%] mt-9">
            The app is open source and your notes are saved to an open format,
            so you will always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no-one but yourself can
            access them.
          </p>
          <button className="flex items-center w-[197px] h-[63px] bg-[#4f9cf9] mt-[60px] py-4 px-6 text-white font-semibold rounded-[8px]">
            Read more
            <FontAwesomeIcon
              icon={faArrowRight}
              className="relative w-3 h-3 ml-2 cursor-pointer"
            />
          </button>
        </div>
      </div>
      <div className="image w-[681px] h-[381.13px] mt-10">
        <Image src={data} alt="work" width={583} height={542.76} />
      </div>
    </div>
  );
}

export default YourData;
