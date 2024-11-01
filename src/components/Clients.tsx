import Image from 'next/image'
import shade from '../../public/Element2.png'
import card1 from '../../public/Client-1.png'
import card2 from '../../public/Client-2.png'
import card3 from '../../public/Client-3.png'
import dots from '../../public/Slider.png'

const Clients = () => {
  return (
    <div className='w-[1440px] h-[994.46px] flex flex-col justify-center items-center py-[140px] px-8 gap-[60px]'>
        <div className="content flex flex-col w-[657px] h-[288px]">
        <Image
          src={shade}
          alt="shade"
          width={193.58}
          height={47.67}
          className="relative z-0 left-[520px] top-[70px]"
        />
        <div className="text relative mb-[50px]">
          <h1 className="w-[1376px] h-[84px] text-[70px] text-justify font-bold leading-[84px] tracking-[-2%]">
          What Our Clients Says
          </h1>
        </div>
      </div>

      <div className="cards w-[1376px] h-[498.46px] flex gap-8">
        <Image
        src={card1}
        alt='card1'
        width={437.33}
        height={498.46}
        className='rouded-[10px] py-[60px] px-6'
        />
        <Image
        src={card2}
        alt='card2'
        width={437.33}
        height={498.46}
        className='rouded-[10px] py-[60px] px-6'
        />
        <Image
        src={card3}
        alt='card3'
        width={437.33}
        height={498.46}
        className='rouded-[10px] py-[60px] px-6'
        />
      </div>
      <Image 
      src={dots}
      alt='slider'
      />
    </div>
  )
}

export default Clients