import Navbar from "@/components/navbar"

export default function About() {
    return (
        <>
            <Navbar />
            <div className='page2 grid grid-cols-2 gap-10 h-screen'>
                <div className='page2-content font-bold mx-8 my-24'>
                    <div className="line2"></div>
                    A Passionate Web Developer.
                </div>
                <div className='paragraf'>
                    <p className='paragraf-content p-5 font-serif text-gray-400'>
                        A passionate IT student currently pursuing my degree. Technology has always fascinated me, and I find joy in exploring the vast world of Information Technology.
                    </p>
                    <p className='paragraf-content p-5 font-serif text-gray-400'>
                        I am currently enrolled in <span>Telkom University</span> where I am gaining a comprehensive understanding of various IT concepts,
                        programming languages, and the latest advancements in the field. From developing software applications to understanding 
                        network architectures, my academic journey is equipping me with the knowledge and skills needed to thrive in the dynamic 
                        IT industry.
                    </p>
                    <p className='paragraf-content p-5 font-serif text-gray-400'>
                        I am particularly interested in <span>web development</span>, and I am eager to contribute my skills to real-world projects. 
                        I believe in the power of technology to bring about positive change, and I am excited about the opportunities 
                        that lie ahead in the IT field.
                    </p>
                    <p className='paragraf-content p-5 font-serif text-gray-400'>
                        Feel free to connect with me if you share similar interests or if you like 
                        to discuss anything related to technology and IT. I am always open to new ideas and collaborations!
                    </p>
                </div>
            </div>
        </>
    )
}