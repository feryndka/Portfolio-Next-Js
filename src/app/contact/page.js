import Particle from "@/components/particle";
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import "./style.css"

export default function Contact() {
    return (
        <div className="contact">
            <Particle />
            <div className='page4 h-[92vh] flex items-center'>
                <div className='card max-w-md w-4/5 mx-auto p-6 rounded-lg shadow-md'>
                    <h2 className='text-3xl text-center font-bold mb-6 underline underline-offset-8'>Contact Me</h2>
                    <form action="" method=''>
                        <div className='mb-4'>
                            <label className='block text-white text--sm font-semibold mb-2' htmlFor="">Your Name</label>
                            <input placeholder='Name' className='w-full px-3 py-2 border rounded-lg focus:outline-none' required type="text" name='Name' />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-white text--sm font-semibold mb-2' htmlFor="">Your Email</label>
                            <input placeholder='email@example.com' className='w-full px-3 py-2 border rounded-lg focus:outline-none' required type="email" name='Email' />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-white text--sm font-semibold mb-2' htmlFor="">Your Messsage</label>
                            <textarea rows='4' placeholder='Type your message here...' className='w-full px-3 py-2 border rounded-lg focus:outline-none' required type="text" name='Message' />
                        </div>
                        <div className='flex justify-center'>
                            <button type='submit' className='text-white font-semibold px-4 py-2 rounded-lg focus:outline-white'>
                                Send Message <TelegramIcon />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="contactList">
                <a href="mailto:feryandika151@gmail.com"><EmailIcon sx={{ fontSize: 30 }}/></a>
                <a href="https://www.linkedin.com/in/feryandika/"><LinkedInIcon sx={{ fontSize: 30 }}/></a>
                <a href="https://github.com/feryndka"><GitHubIcon sx={{ fontSize: 30 }}/></a>
            </div>
        </div>
    )
}