"use client"

import {Sheet, SheetTrigger, SheetContent} from "./ui/sheet"
import {usePathname} from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci"
import {useState} from "react";

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    },
]


const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()


    return (
        <Sheet open={isOpen}>
            <SheetTrigger className="flex justify-center items-center" onClick={() => setIsOpen(!isOpen)}>
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col" onClick={() => setTimeout(() =>setIsOpen(!isOpen), 500)} >
                <div className="mt-16 mb-20 text-center text-2xl">
                    <Link href={'/'}>
                        <h1 className='text-4xl font-semibold'>Artsiom
                            <span className='text-accent'>.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col items-center justify-center">
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path} key={index}
                                  className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}

                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>

            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;