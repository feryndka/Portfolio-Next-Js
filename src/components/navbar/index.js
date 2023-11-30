'use client'
import { useState } from "react"
import Link from "next/link";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);

    const handleIconClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <nav>
            <div className="logo">FA</div>
            
            <ul className={!isVisible ? '' : 'visible'}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/tools">Tools</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>

            <div className='iconDensity' onClick={handleIconClick}>
                {isVisible ? (<DensityMediumIcon />) : (<CloseIcon />)}
            </div>
        </nav>
    )
}