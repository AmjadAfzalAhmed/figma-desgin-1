
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import workTogether from '../../public/Work Together Image.png'
import shade from "../../public/Element2.png";

function WorkTogether() {
  return (
    <div className="w-[1440px] h-[1370.76px] flex flex-col bg-white py-[140px] px-8 ">
      <div className='section-one flex gap-[60px]'>
      <div className="content flex flex-col w-[657px] h-[288px] gap-6">
      <Image src={shade} alt="shade" width={515.61} height={36.75} className='relative z-0 top-[220px]'/>
        <div className="text relative mb-[50px]">
          <h1 className="w-[691px] h-[154px] text-[72px] text-justify font-bold leading-[78px] tracking-[-2%]">
            Project <br /> Management            
          </h1>          
          <p className='w-[657px] h-[90px] leading-[30px] tracking-[-2%] text-[18px] text-justify font-normal mt-9'>
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="flex items-center w-[201px] h-[63px] bg-[#4f9cf9] mt-[20px] py-4 px-6 text-white font-semibold rounded-[8px]">
            Get Started
            <FontAwesomeIcon
              icon={faArrowRight}
              className="relative w-3 h-3 ml-2 cursor-pointer"
            />
          </button>
        </div>
        
      </div>
      <div className="image bg-[#c4defd] w-[719px] h-[448px]"></div>
    </div>

    {/* Section Two */}
    <div className="w-[1376px] h-[542.76px] flex gap-[160px] mt-[100px]">
      <div className="image w-[583px] h-[542.76px]">
        <Image
        src={workTogether}
        alt="work"
        width={583}
        height={542.76}
        />
      </div>
      <div className="content relative w-[633px] h-[324px] flex flex-col gap-[60px]">
      <Image src={shade} alt="shade" width={334.11} height={25.55} className='relative z-0 top-[160px] left-[240px]'/>
      <div className="text relative">
        <h1 className="w-[633px] h-[87px] text-[72px] text-justify font-bold leading-[87.14px]">Work Together</h1>
        <p className="w-[633px] h-[90px] text-[18px] font-normal leading-[30px] tracking-[-2%] mt-9">
          With whitepace, share your notes with your colleagues and collaborate
          on them. You can also publish a note to the internet and share the URL
          with others.
        </p>
        <button className="flex items-center w-[186px] h-[63px] bg-[#4f9cf9] mt-[20px] py-4 px-6 text-white font-semibold rounded-[8px]">
          Try it now
          <FontAwesomeIcon
            icon={faArrowRight}
            className="relative w-3 h-3 ml-2 cursor-pointer"
          />
        </button>
        </div>
      </div>
    </div>
    
    </div>
  );
}

export default WorkTogether;
