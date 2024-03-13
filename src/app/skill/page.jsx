"use client";
import React, { useState } from "react";
import Image from "next/image";

import "./style.css";

export default function Skill() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <Image
                  height={100}
                  width={100}
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="/React.png"
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Holden Caulfield
                  </h2>
                  <h3 class="text-gray-500 mb-3">UI Developer</h3>
                  <p class="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                height={100}
                width={100}
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/JavaScript.png"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Holden Caulfield
                </h2>
                <h3 class="text-gray-500 mb-3">UI Developer</h3>
                <p class="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
        <div className="flex mx-auto flex-wrap mb-20 text-[#e7e7e7]">
          <a
            onClick={() => handleStepClick(1)}
            className={`sm:px-6 px-10 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium ${
              activeStep === 1
                ? "bg-[#e7e7e7] border-gray-100 text-black cursor-pointer"
                : "border-gray-100 hover:text-neutral-400 cursor-pointer"
            } inline-flex items-center leading-none tracking-wider rounded-t`}
          >
            FRONTEND
          </a>
          <a
            onClick={() => handleStepClick(2)}
            className={`sm:px-6 px-10 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium ${
              activeStep === 2
                ? "bg-[#e7e7e7] border-gray-100 text-black cursor-pointer"
                : "border-gray-100 hover:text-neutral-400 cursor-pointer"
            } inline-flex items-center leading-none tracking-wider rounded-t`}
          >
            BACKEND
          </a>
        </div>
        {/* <div className="flex flex-wrap mb-20 w-full">
          <a
            onClick={() => handleStepClick(1)}
            className={`mr-auto sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium ${activeStep === 1
              ? 'bg-white border-gray-900 text-gray-900'
              : 'border-gray-500 hover:text-gray-900'
              } inline-flex items-center leading-none tracking-wider rounded-t`}
          >
            FRONTEND
          </a>
          <a
            onClick={() => handleStepClick(2)}
            className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium ${activeStep === 2
              ? 'bg-white border-gray-900 text-gray-500'
              : 'border-gray-100 hover:text-gray-500 cursor-pointer'
              } inline-flex items-center leading-none tracking-wider rounded-t`}
          >
            BACKEND
          </a>
        </div> */}
        {renderStepContent()}
      </div>
    </section>
  );
}
