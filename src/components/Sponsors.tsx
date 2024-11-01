import Image from "next/image";
import shade from "../../public/Element2.png";
import apple from '../../public/Apple.png'
import ms from '../../public/Microsoft.png'
import slack from '../../public/Slack.png'
import google from '../../public/Google.png'

const Sponsors = () => {
  return (
    <div className="w-[1440px] h-[538px] py-[140px] px-8 gap-[60px] flex flex-col justify-center items-center">
      <div className="content flex flex-col w-[657px] h-[288px] gap-6 mt-[-15%]">
        <Image
          src={shade}
          alt="shade"
          width={338.16}
          height={42.47}
          className="relative z-0 left-[150px] top-[120px]"
        />
        <div className="text relative mb-[50px]">
          <h1 className="w-[691px] h-[154px] text-[72px] text-justify font-bold leading-[78px] tracking-[-2%]">
            Our Sponsors
          </h1>
        </div>
      </div>
      <div className="icons w-[1376px] h-[71px] flex justify-between">
        <Image 
        src={apple}
        alt="apple"
        width={55.47}
        height={68}
        />
        <Image 
        src={ms}
        alt="microsoft"
        width={287}
        height={62}
        />
        <Image 
        src={slack}
        alt="slack"
        width={280}
        height={71}
        />
        <Image 
        src={google}
        alt="google"
        width={211}
        height={69.81}
        />
      </div>
    </div>
  );
};
export default Sponsors;
