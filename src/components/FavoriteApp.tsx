import Image from "next/image";
import app from "../../public/Apps.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FavoriteApp = () => {
  return (
    <div className="w-[1440px] h-[750.8px] bg-[#043873] bg-[url('../../public/Apps-Element.png')] bg-no-repeat bg-center flex gap-[100px] py-[140px] px-8">
      <div className="image w-[583px] h-[542.76px]">
        <Image src={app} alt="app" width={582} height={470.8} />
      </div>
      <div className="content relative w-[633px] h-[324px] flex flex-col gap-[60px]">
        <div className="text relative">
          <h1 className="w-[694px] h-[261px] text-[72px] text-justify font-bold leading-[87.14px]">
            Work with Your <br />
            Favorite Apps Using <br /> whitepace
          </h1>
          <p className="w-[694px] h-[60px] text-[18px] font-normal leading-[30px] tracking-[-2%] mt-9">
            Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.
          </p>
          <button className="flex items-center w-[186px] h-[63px] bg-[#4f9cf9] mt-[70px] py-4 px-6 text-white font-semibold rounded-[8px]">
            Read more
            <FontAwesomeIcon
              icon={faArrowRight}
              className="relative w-3 h-3 ml-2 cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteApp;
