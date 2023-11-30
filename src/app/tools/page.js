import Navbar from "@/components/navbar"
import Image from "next/image"

export default function Tools() {
    return (
        <>
            <Navbar />
            <section className="text-gray-600 body-font h-screen" id='tools'>
                <div className="container pt-[5%] mx-auto">
                    <div className="flex flex-col text-start w-full mb-10">
                        <h1 className="text-[90px] font-bold title-font mb-4 text-white tracking-widest underline underline-offset-[20px] decoration-[cyan]">Tools</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <Image alt="React" src="/React.png" width={100} height={148} className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"  />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white text-[25px]">React JS</h2>
                                    <h3 className="text-gray-200 mb-3">Library JavaScript</h3>
                                    <p className="mb-4 text-gray-400">A JavaScript library for building efficient and maintainable user interfaces.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <Image alt="Javascript" src="/JavaScript.png" width={148} height={148} className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"  />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white text-[25px]">JavaScript</h2>
                                    <h3 className="text-gray-200 mb-3">Programming Languange</h3>
                                    <p className="mb-4 text-gray-400">A commonly used programming language for web development.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <Image alt="Tailwind" src="/tailwind.jfif" width={148} height={148} className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white text-[25px]">Tailwind</h2>
                                    <h3 className="text-gray-200 mb-3">Framework CSS</h3>
                                    <p className="mb-4 text-gray-400">A CSS framework that provides a large set of CSS utilities for building consistent and customizable web designs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <Image alt="other-programming" src="/icon.png" width={148} height={148} className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white text-[25px]">Other</h2>
                                    <h3 className="text-gray-200 mb-3">Technology</h3>
                                    <p className="mb-4 text-gray-400">Other Technology like Go, C++, GitHub, Html, Css, NodeJs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}