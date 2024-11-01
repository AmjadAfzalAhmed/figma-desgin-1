import Image from "next/image";
import lang from "../../public/Language.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Bottom = () => {
  return (
    <div className="w-[1376px] h-[20px] flex justify-between">
      <Image src={lang} alt="language" width={104} height={20} />
      <p className="w-[117px] h-[20px]">Terms & privacy</p>
      <p className="w-[60px] h-[20px]">Security</p>
      <p className="w-[47px] h-[20px]">Status</p>
      <p className="w-[169px] h-[20px]">©2021 Whitepace LLC.</p>
      <div className="icons">
        <FontAwesomeIcon
          icon={faFacebookF}
          className="relative w-[9px] h-[16.68px] ml-2 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="relative w-[17px] h-[13.81px] ml-2 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="relative w-[15px] h-[15px] ml-2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Bottom;
