import Particle from "@/components/particle";
import Link from "next/link";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typography } from "@mui/material";

const Hero = () => {
  const socials = [
    {
      href: "mailto:feryandika151@gmail.com",
      icon: <EmailIcon sx={{ fontSize: 24 }} />,
      label: "Email",
    },
    {
      href: "https://www.linkedin.com/in/feryandika/",
      icon: <LinkedInIcon sx={{ fontSize: 24 }} />,
      label: "LinkedIn",
    },
    {
      href: "https://t.me/feryndka",
      icon: <TelegramIcon sx={{ fontSize: 24 }} />,
      label: "Telegram",
    },
  ];

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#111111]">
      <Particle />

      {/* Main Content */}
      <div className="text-center z-10">
        <Typography
          variant="h1"
          className="animate-fadeInUp"
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
            fontWeight: "bold",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "-0.05em",
            background: "linear-gradient(to right, #6EE7B7, #3B82F6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          style={{ animationDelay: "0.2s" }}
        >
          FERY ANDIKA
        </Typography>
        <Typography
          className="animate-fadeInUp"
          sx={{
            fontSize: { xs: "1rem", md: "1.25rem" },
            fontFamily: "'JetBrains Mono', monospace",
            color: "#a0a0a0",
            marginTop: "0.5rem",
          }}
          style={{ animationDelay: "0.4s" }}
        >
          Fullstack Web Developer
        </Typography>
      </div>

      {/* Buttons & Socials */}
      <div
        className="z-10 mt-8 flex flex-col sm:flex-row items-center gap-6 animate-fadeInUp" // Sedikit menambah gap
        style={{ animationDelay: "0.6s" }}
      >
        <Link
          href="#about"
          className="group relative flex justify-center items-center w-48 h-12 rounded-lg text-sm font-bold transition-all duration-300 
                     bg-gradient-to-r from-[#6EE7B7] to-blue-500 text-[#0B1120]
                     shadow-lg shadow-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/50 hover:scale-105"
        >
          <span>Discover More</span>
          <ArrowForwardIcon className="ml-2 transform transition-transform group-hover:translate-x-1" />
        </Link>
        <div className="flex flex-row gap-4">
          {socials.map((social) => (
            // Wrapper untuk border gradien
            <div
              key={social.label}
              className="p-[1.5px] rounded-full bg-gradient-to-r from-[#6EE7B7] to-blue-500"
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-[#111111] text-gray-300 transition-all duration-300 hover:bg-transparent hover:text-white">
                  {social.icon}
                  <span className="absolute -top-9 scale-0 rounded bg-gray-700 p-2 text-xs text-white group-hover:scale-100 transition-all duration-200">
                    {social.label}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
