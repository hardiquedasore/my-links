import React from "react";
import Image from "next/image";

const LinkButtons = ({ title, url, buttonColor, borderColor, bgImage, textColor, logo }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold text-lg py-3 px-4 rounded-lg w-full m-2 flex text-center justify-center"
      style={{backgroundColor:  `${buttonColor}`, color:`${textColor}` , border: `2px solid ${borderColor}`, backgroundImage:`${bgImage}` }}
    >
        <Image className="pr-2 align-middle" src={logo} width={30} height={30}/>
      {title}
    </a>
  );
};

export default LinkButtons;
