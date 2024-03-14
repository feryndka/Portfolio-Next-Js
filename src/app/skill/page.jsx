"use client";
import React, { useState } from "react";
import SkillCard from "./SkillCard";

import frontend_data from "@/components/utils/frontend-data.json";
import backend_data from "@/components/utils/backend-data.json"

export default function Skill() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <div className="grid lg:grid-cols-2 gap-10 md:w-[80%] w-full md:mx-auto">
            {frontend_data.map((item, index) => {
              return (
                <SkillCard
                  key={index}
                  src={item.src}
                  title={item.title}
                  level={item.level}
                  experience={item.experience}
                />
              );
            })}
          </div>
        );
      case 2:
        return (
          <div className="grid lg:grid-cols-2 gap-10 md:w-[80%] w-full md:mx-auto">
          {backend_data.map((item, index) => {
            return (
              <SkillCard
                key={index}
                src={item.src}
                title={item.title}
                level={item.level}
                experience={item.experience}
              />
            );
          })}
        </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="text-gray-600 body-font bg-[#212121]" id="skill">
      <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
        <div className="flex mx-auto flex-wrap mb-10 text-[#e7e7e7]">
          <a
            onClick={() => handleStepClick(1)}
            className={`sm:px-6 px-10 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium ${
              activeStep === 1
                ? "bg-[#e7e7e7] border-gray-100 text-black cursor-pointer"
                : "bg-black border-gray-100 hover:text-neutral-400 cursor-pointer"
            } inline-flex items-center leading-none tracking-wider rounded-t`}
          >
            FRONTEND
          </a>
          <a
            onClick={() => handleStepClick(2)}
            className={`sm:px-6 px-10 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium ${
              activeStep === 2
                ? "bg-[#e7e7e7] border-gray-100 text-black cursor-pointer"
                : "bg-[#0e0e0e] border-gray-100 hover:text-neutral-400 cursor-pointer"
            } inline-flex items-center leading-none tracking-wider rounded-t`}
          >
            BACKEND
          </a>
        </div>
        {renderStepContent()}
      </div>
    </section>
  );
}
