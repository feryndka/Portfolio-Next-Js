import { FloatingNav } from "../ui/floating-navbar";

export default function Navbar() {
    const list = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "#about",
        },
        {
            name: "Skill",
            link: "#skill",
        },
        {
            name: "Project",
            link: "#project",
        },
        {
            name: "Contact",
            link: "#contact",
        },
    ]

    return (
        <div className="relative  w-full">
            <FloatingNav navItems={list} />
        </div>
    )
}