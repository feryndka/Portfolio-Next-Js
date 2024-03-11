import Particle from "@/components/particle";
import TelegramIcon from '@mui/icons-material/Telegram';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[92vh] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <Particle />
      <h1 className="md:text-5xl text-3xl lg:text-8xl font-bold text-center relative z-20">
        Fery Andika <br /> Frontend Web Developer
      </h1>
      <div className="w-[40rem] relative mt-5 mb-10">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#e7e7e7] to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#e7e7e7] to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#e7e7e7] to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#e7e7e7] to-transparent h-px w-1/4" />
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 z-10">
        <Link
          href="/about"
          className="flex justify-center items-center w-40 h-10 rounded-xl bg-black border dark:border-[#e7e7e7] border-transparent text-[#e7e7e7] text-sm transition-all hover:bg-white/20"
        >
          Read More <ExpandMoreIcon />
        </Link>
        <Link
          href="/contact"
          className="flex justify-center items-center w-40 h-10 rounded-xl bg-[#e7e7e7] text-black border border-black text-sm transition-all hover:bg-white/80"
        >
          Message <TelegramIcon />
        </Link>
      </div>
    </div>
  );
}