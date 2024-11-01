import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import apple from '../../public/apple-black-logo 2.png'
import windows from '../../public/windows-logo 1.png'
import android from '../../public/android-logo 1.png'
import Image from "next/image";


function Try() {
  return (
    <div className='w-[1440px] h-[709px] bg-[#043873] flex flex-col justify-center items-center py-[140px] px-8 gap-8'>
        <div className="head mt-10">
            <h1 className='w-[608px] h-[174px] text-[72px] text-white font-bold leading-[87.14px] tracking-[-2%] text-center'>Try Whitepace <br /> today</h1>
            <p className='w-[550px] h-[64px] text-[24px] text-white font-normal leading-[32px] tracking-[-2%] text-center'>Get started for free.
            Add your whole team as your needs grow.</p>
        </div>
        <button className="flex items-center w-[201px] h-[63px] bg-[#4f9cf9] mt-[20px] py-4 px-6 text-white font-semibold rounded-[8px]">
            Try Taskey Free
            <FontAwesomeIcon
              icon={faArrowRight}
              className="relative w-3 h-3 ml-2 cursor-pointer"
            />
          </button>
          <p className='w-[367px] h-[32px] text-[24px] text-white font-normal leading-[32px] tracking-[-2%] text-center'>On a big team? Contact sales</p>
          <div className="icons flex gap-[40px]">
            <Image 
            src={apple}
            alt="apple"
            width={60}
            height={60}
            />
            <Image 
            src={windows}
            alt="windows"
            width={60}
            height={60}
            />
            <Image 
            src={android}
            alt="android"
            width={60}
            height={60}
            />

          </div>
      
    </div>
  )
}

export default Try
