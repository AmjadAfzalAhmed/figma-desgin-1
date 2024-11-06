
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import shade from "../../public/Element2.png";

function Customize() {
  return (
    <div className="w-[1440px] h-[779.3px] flex bg-white py-[140px] px-8 gap-[60px]">
      <div className="image bg-[#c4defd] w-[719px] h-[448px]"></div>

      <div className="content flex flex-col w-[646px] h-[174px] gap-6">
        <Image
          src={shade}
          alt="shade"
          width={418}
          height={18.69}
          className="relative z-0 top-[190px]"
        />
        <div className="text relative mb-[50px]">
          <h1 className="w-[592px] h-[87px] text-[72px] text-justify font-bold leading-[78px] tracking-[-2%]">
          Customise it to <br /> your needs
          </h1>
          <p className="w-[646px] h-[90px] leading-[30px] tracking-[-2%] text-[18px] text-justify font-normal mt-[90px]">
          Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
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
    </div>
  );
}

export default Customize;
