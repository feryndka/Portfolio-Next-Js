'use client'
import { useState } from "react"
import Link from "next/link";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from "next/navigation";

import "./style.css"

export default function Navbar() {
    const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(true);

    const handleIconClick = () => {
        setIsVisible(!isVisible);
    };

    const list = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "About",
            link: "/about",
        },
        {
            title: "Tools",
            link: "/tools",
        },
        {
            title: "Project",
            link: "/project",
        },
        {
            title: "Contact",
            link: "/contact",
        },
    ]

    return (
        <nav>
            <div className="logo">FA</div>
            <ul className={!isVisible ? '' : 'visible'} >
                {list.map((item, index) => (
                    <>
                        <li className="h-full relative text-[#e7e7e7]">
                            <div className={`${pathname === item.link ? "h-full flex items-center transition-all text-[#e7e7e7]" : "h-full flex items-center transition-all hover:text-white/50"}`}>
                                <Link href={item.link}>
                                    {item.title}
                                </Link>
                            </div>
                            < div className={`${pathname === item.link ? "md:h-1 bg-[#e7e7e7] absolute bottom-0 right-0 left-0" : null}`}></div>
                        </li>
                    </>
                ))}
            </ul>
            <div className='iconDensity' onClick={handleIconClick}>
                {isVisible ? (<DensityMediumIcon />) : (<CloseIcon />)}
            </div>
        </nav>
    )
}