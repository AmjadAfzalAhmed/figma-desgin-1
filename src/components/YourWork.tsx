import Image from "next/image";
import circles from "../../public/BACKGROUND.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function YourWork() {
  return (
    <div className="w-[1440px] h-[574px] bg-[#043873] flex items-center">
      <div className="image w-[680.74px] h-[691.34px] opacity-[50%] ml-[-18%] mt-[-15%]">
        <Image src={circles} alt="circles" />
      </div>
      <div className="content flex w-[1376px] h-[294px] gap-[60px]">
        <div className="text flex flex-col justify-center items-center mt-[50px] ml-[-12%]">
          <h1 className="w-[1064px] h-[87px] text-white text-[72px] text-justify font-bold leading-[78px] tracking-[-2%]">
            Your work,everywhere you are
          </h1>
          <p className='w-[1064px] h-[60px] leading-[30px] tracking-[-2%] text-white text-[18px] text-center font-normal mt-9'>
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
          <button className="flex items-center w-[201px] h-[63px] bg-[#4f9cf9] mt-[20px] py-4 px-6 text-white font-semibold rounded-[8px]">
            Try Taskey
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

export default YourWork;
