import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="fixed w-full h-[92px] bg-transparent flex items-center space-between py-4 px-8">
      <div>
        <Image
          src={logo}
          alt="logo-icon"
          width={184}
          height={48}
          className="object-contain mr-[200px]"
        />
      </div>
      <ul className="flex text-white text-[18px] gap-6">

        <li className="flex items-center gap-2">
          <Link href="/products" className="flex gap-2">
            Products
          </Link>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="relative w-3 h-3 ml-2 cursor-pointer"
          />
        </li>
        <li className="flex items-center gap-2">
          <Link href="/solutions">Soultions            
          </Link>
          <FontAwesomeIcon
              icon={faChevronDown}
              className="relative w-3 h-3 ml-2 cursor-pointer"
            />
        </li>
        <li className="flex items-center gap-2">
          <Link href="/resources">Resources            
          </Link>
          <FontAwesomeIcon
              icon={faChevronDown}
              className="relative w-3 h-3 ml-2 cursor-pointer"
            />
        </li>
        <li className="flex items-center gap-2">
          <Link href="/pricing">Pricing          
          </Link>
          <FontAwesomeIcon
              icon={faChevronDown}
              className="relative w-3 h-3 ml-2 cursor-pointer"
            />
        </li>
      </ul>
      <div className="buttons flex gap-6 ml-[70px]">
        <button className="w-[126px] h-[60px] bg-[#ffe492] font-normal rounded-md">
          Login
        </button>
        <button className="flex items-center w-[227px] h-[60px] bg-[#4f9cf9] py-4 px-6 text-white font-semibold rounded-md">
          Try Whitepace free
          <FontAwesomeIcon
              icon={faArrowRight}
              className="relative w-3 h-3 ml-2 cursor-pointer"
            />
        </button>
      </div>
    </header>
  );
}
