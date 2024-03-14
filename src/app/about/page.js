import './style.css'

import Image from "next/image";

export default function About() {
    return (
        <div className='head' id='about'>
            <div className='grid-1'>
                <div className="sub-grid-1">
                    <div className="image">
                        <Image src={"/profile.png"} height={700} width={700} alt="profile"/>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-[80%] rounded-t-full shadow-inner shadow-[#e7e7e7]"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid-2'>
                <div className='title'>
                    A Passionate Web Developer.
                    <div className="line-2"></div>
                </div>
                <div className='paragraf text-justify'>
                    <p>
                        A passionate IT student currently pursuing my degree. Technology has always fascinated me, and I find joy in exploring the vast world of Information Technology.
                    </p>
                    <p>
                        I am currently study in <span>Telkom University</span> where I am gaining a comprehensive understanding of various IT concepts,
                        programming languages, and the latest advancements in the field. From developing software applications to understanding
                        network architectures, my academic journey is equipping me with the knowledge and skills needed to thrive in the dynamic
                        IT industry.
                    </p>
                    <p>
                        I am particularly interested in <span>web development</span>, and I am eager to contribute my skills to real-world projects.
                        I believe in the power of technology to bring about positive change, and I am excited about the opportunities
                        that lie ahead in the IT field.
                    </p>
                    <p>
                        Feel free to connect with me if you share similar interests or if you like
                        to discuss anything related to technology and IT. I am always open to new ideas and collaborations!
                    </p>
                </div>
            </div>
        </div>
    )
}