import Particle from "@/components/particle";
import Link from "next/link";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typography } from "@mui/material";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#212121]">
      <Particle />
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "1.8rem", md: "3rem", lg: "5rem" },
          fontWeight: "bold",
          position: "relative",
          zIndex: 20,
          fontFamily: "monospace",
          width: "70vw",
        }}
      >
        Fery Andika
        <br /> Fullstack Web Developer
      </Typography>

      <div className="h-1 bg-white w-[70vw] my-4"></div>

      <div className="flex flex-col lg:flex-row md:justify-between lg:items-center w-[70vw] z-10 gap-4">
        <div className="flex flex-col md:flex-row gap-3">
          <Link href="mailto:feryandika151@gmail.com">
            <div className="flex items-center gap-1">
              <EmailIcon sx={{ fontSize: 30 }} /> feryandika151@gmail.com
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/feryandika/">
            <div className="flex items-center gap-1">
              <LinkedInIcon sx={{ fontSize: 30 }} /> Fery Andika
            </div>
          </Link>
        </div>
        <div className="flex flex-row gap-3">
          <Link
            href="#about"
            className="flex justify-center items-center w-40 h-10 rounded-md border dark:border-[#e7e7e7] border-transparent text-[#e7e7e7] text-sm transition-all hover:bg-white/20"
          >
            <div className="flex items-center gap-1">
              Read More <ExpandMoreIcon />
            </div>
          </Link>
          <Link
            href="https://t.me/feryndka"
            className="flex justify-center items-center w-40 h-10 rounded-xl bg-[#e7e7e7] text-black border border-black text-sm transition-all shadow-md hover:shadow-gray-500/50"
          >
            <div className="flex items-center gap-1">
              Message <TelegramIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
