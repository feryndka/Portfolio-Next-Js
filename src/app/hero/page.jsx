import Particle from "@/components/particle";
import Link from "next/link";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#212121]">
      <Particle />
      <h1 className="md:text-5xl text-3xl lg:text-8xl font-bold md:text-center relative z-20 font-serif">
        Fery Andika <br /> Web Developer
      </h1>
      <div className="sm:w-[40rem] relative my-5 w-[30rem]">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#e7e7e7] to-transparent h-[2px] sm:w-3/4 blur-sm w-4/4" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#e7e7e7] to-transparent h-px sm:w-3/4 w-4/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#e7e7e7] to-transparent h-[5px] sm:w-1/4 blur-sm w-4/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#e7e7e7] to-transparent h-px sm:w-1/4 w-4/4" />
      </div>
      <div className="flex flex-col space-y-4 md:space-y-0 z-10 gap-3">
        <div className="flex flex-col md:flex-row gap-3">
          <a href="mailto:feryandika151@gmail.com">
            <EmailIcon sx={{ fontSize: 30 }} /> feryandika151@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/feryandika/">
            <LinkedInIcon sx={{ fontSize: 30 }} /> Fery Andika
          </a>
        </div>
        <Link
          href="#about"
          className="flex justify-center items-center w-40 h-10 rounded-md border dark:border-[#e7e7e7] border-transparent text-[#e7e7e7] text-sm transition-all hover:bg-white/20"
        >
          Read More <ExpandMoreIcon />
        </Link>
        {/* <Link
          href="#contact"
          className="flex justify-center items-center w-40 h-10 rounded-xl bg-[#e7e7e7] text-black border border-black text-sm transition-all hover:bg-white/80"
        >
          Message <TelegramIcon />
        </Link> */}
      </div>
    </div>
  );
};

export default Hero;
