import Navbar from "@/components/navbar"
import Particle from "@/components/particle";
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
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
            <a href="mailto:feryandika151@gmail.com">
              <Button variant="outlined" startIcon={<EmailIcon />}>
                Email
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/feryandika/">
              <Button variant="outlined" startIcon={<LinkedInIcon />}>
                LinkedIn
              </Button>
            </a>
            <a href="https://github.com/feryndka">
              <Button variant="outlined" startIcon={<GitHubIcon />}>
                GitHub
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="outlined" style={{ backgroundColor:'white', color:'black'}}>
                Massage <TelegramIcon />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}