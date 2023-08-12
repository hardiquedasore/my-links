import React from "react";
import LinkButtons from "../components/LinkButtons";
import constants from "../../../constants.json";
import Image from "next/image";

const links = constants.links;

const Tree = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10 min-h-screen w-full">
      <Image className="rounded-3xl" src={constants.logo} width={96} height={96} />
      <h1 className="text-5xl pt-4 font-bold pb-2">{constants.brand}</h1>
      <p className="text-lg max-w-sm text-justify mb-1" >{constants.description}</p>
      <div className="flex flex-col items-center w-full max-w-xs">
        {links.map((link, index) => (
          <LinkButtons key={index} title={link.title} url={link.url} borderColor={link.borderColor} bgImage={link.bgImage} logo={link.icon} textColor={link.textColor} buttonColor={link.buttonColor} />
        ))}
      </div>
    </div>
  );
};

export default Tree;
