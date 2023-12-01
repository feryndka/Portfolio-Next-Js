import Navbar from "@/components/navbar"
import Particle from "@/components/particle";
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <Particle />
      <div className="hero h-screen">
        <div className="page1" id='home'>
          <h1 className='text-[13vh] font-semibold'>Fery Andika<span style={{color:'cyan'}}>,</span> <br />Fullstack Web <br />Developer</h1>
          <div className="line"></div>
          <div className='btnpg1 my-5'>
            <Link href="/about">
              <Button variant="outlined" style={{ backgroundColor:'white', color:'black'}}>
                Read More <ExpandMoreIcon />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outlined" >
                Massage <TelegramIcon />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}