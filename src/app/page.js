import Navbar from "@/components/navbar"
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="hero h-screen">
        <div className="page1" id='home'>
          <h1 className='text-[100px] font-semibold'>Fery <span style={{color:'cyan'}}>Andika</span>, <br />Fullstack Web <br />Developer</h1>
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
          </div>
        </div>
      </div>
    </>
  )
}
