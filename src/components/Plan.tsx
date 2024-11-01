import Image from "next/image";
import shade from "../../public/Element2.png";
import pb1 from '../../public/Price-board-w.png'
import pb2 from '../../public/Price-board-b.png'
import pb3 from '../../public/Price-board-w2.png'

const Plan = () => {
  return (
    <div className="w-[1440px] h-[1272px] py-[140px] px-8 gap-60px bg-white">
      
      <div className="content relative w-[1376px] h-[171px] flex flex-col justify-center items-center gap-6">
      <Image
          src={shade}
          alt="shade"
          width={334.73}
          height={30.11}
          className="relative z-0 top-[115px] left-[150px]"
        />
      <div className="text relative flex flex-col justify-center items-center">
      
        <h1 className="w-[1376px] h-[87px] text-[72px] text-center font-bold leading-[78px] tracking-[-2%]">
          Choose Your Plan
        </h1>
        <p className="w-[979px] h-[60px] leading-[30px] tracking-[-2%] text-[18px] text-center font-normal mt-4">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the <br /> right plan
          for you.
        </p>
      </div>
      </div> 

      <div className="cards w-[1376px] h-[761px] flex gap-8 mt-[100px]">
      <Image
          src={pb1}
          alt='white-board'
          width={437.33}
          height={654}
          className="first-image border-1 border-[#ffe492] rounded-[10px] mt-[80px]"
          />
          <Image
          src={pb2}
          alt='blue-board'
          width={437.33}
          height={761}
          className="second-image border-1 rounded-[10px]"
          />
           <Image
          src={pb3}
          alt='white-board2'
          width={437.33}
          height={654}
          className="third-image border-1 border-[#ffe492] rounded-[10px] mt-[80px]"
          />     
        
      </div>
    </div>
  );
};

export default Plan;
