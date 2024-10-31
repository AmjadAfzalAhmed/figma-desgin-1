
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Hero() {
  return (
    <div className="w-[1440px] h-[660px] flex justify-between items-center pt-[100px] px-8 relative top-[92px]">
      <div className="flex flex-col w-[691px] h-[361px] gap-[10px] justify-center mt-10">
        <h2 className="w-[691px] h-[154px] text-[64px] text-justify text-white font-semibold leading-[78px]">
          Get More Done with <br /> whitepace
        </h2>
        <p className="text-[18px] text-white text-justify">
          Project management software that enables your teams to collaboration, plan, analyze <br /> and manage everyday tasks
        </p>
        <button className="flex items-center w-[219px] h-[63px] bg-[#4f9cf9] mt-[20px] py-4 px-6 text-white font-semibold rounded-[8px]">
          Try Whitepace free
          <FontAwesomeIcon
              icon={faArrowRight}
              className="relative w-3 h-3 ml-2 cursor-pointer"
            />
        </button>
      </div>
      <div className="box bg-[#c4defd] w-[685px] h-[460px]">
        
      </div>
    </div>
  );
}
