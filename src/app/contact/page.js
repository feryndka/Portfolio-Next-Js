import Navbar from "@/components/navbar"
import Particle from "@/components/particle";
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Contact() {
    return (
        <>
            <Navbar />
            <Particle />
            <div className='page4 h-screen flex justify-center items-center'>
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
        </>
    )
}