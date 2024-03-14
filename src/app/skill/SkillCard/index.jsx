import Image from "next/image";
import React from "react";

const SkillCard = ({ src, title, level, experience }) => {
  return (
    <div className="pe-2 bg-[#e7e7e7] rounded-lg">
      <div className="bg-[#303030] rounded-s-md flex items-center">
        <Image
          height={100}
          width={100}
          alt="logo"
          className="flex-shrink-0 rounded-lg w-32 h-32 object-cover object-center sm:mb-0 bg-[#e7e7e7]"
          src={src}
        />
        <div className="flex-grow px-8">
          <div className="flex gap-3">
            <h2 className="text-[#e7e7e7] items-center">{title}</h2>
            <h3 className="text-black bg-[#e7e7e7] w-fit px-3 rounded-lg">
              {level}
            </h3>
          </div>
          <div className="h-px bg-[#e7e7e7] my-3"></div>
          <p className="text-white/50">{experience} Experience</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
