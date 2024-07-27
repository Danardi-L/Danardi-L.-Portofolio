"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci';

const links =[
    {
        name : 'Home',
        path : '/',
    },
    {
        name : 'Services',
        path : '/services',
    },
    {
        name : 'Resume',
        path : '/resume',
    },
    {
        name : 'Projects',
        path : '/projects_',
    },
    {
        name : 'Contact',
        path : '/contact',
    },
]

const MobileNav = () => {
    const pathname = usePathname();
    return(
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-blue-500'/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <Link href="/">
                        <h1 className='text-4xl font-semibold'>
                            Danardi L<span className='text-blue-500'>.</span>
                        </h1>
                    </Link>
                </div> 
                {/* nav */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => {
                        return(
                            <Link href={link.path} key={index} className={`${link.path === pathname && "text-blue-500 border-b-2 border-blue-500"} text-xl capitalize hover:text-blue-500 transition-all`}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;