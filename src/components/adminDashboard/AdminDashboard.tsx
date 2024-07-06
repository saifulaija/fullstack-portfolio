

"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ArrowRight, ChevronRight, Menu, UserRoundPlus } from 'lucide-react';
import Image from 'next/image';
import { ModeToggle } from '../shared/header/ModeToggle';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import assets from '@/assets';
import { useToast } from '../ui/use-toast';
import { logout, useCurrentUser } from '@/redux/features/auth/authSlice';


import { ToastAction } from '@radix-ui/react-toast';
import HeaderLink from '../dashboard/HeaderLink';
import { useRouter } from 'next/navigation';

type MenuItem = {
  label: string;
  path: string;
  show: boolean;
};

export function AdminDashboard({ children }: { children: React.ReactNode }) {
    const router= useRouter()
    const { toast } = useToast();
    const dispatch = useAppDispatch();
    const user = useAppSelector(useCurrentUser);
    const [scrolled, setScrolled] = useState(false);
    console.log(user)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        router.push("/login");
        toast({
            variant: "destructive",
            title: "Logged out",
            description: "You have been logged out successfully.",
            action: <ToastAction altText="Undo">Undo</ToastAction>,
        });
    };

    const menuItems: MenuItem[] = [
        { label: "Home", path: "/", show: true },
      
        { label: "Add Projects", path: "/dashboard/super_admin/add_project", show:true },
        { label: "Add Skills", path: "/dashboard/super_admin/add_skill", show: true },
        { label: "Add Blog", path: "/dashboard/super_admin/add_blog", show: true },
        { label: "Dashboard", path: "/dashboard/super_admin", show: true },
       
    ];

    return (
        <div className="flex min-h-screen w-full flex-col">
            <header className={`sticky top-0 flex h-16 items-center z-50 transition-shadow duration-300 justify-between gap-4 border-b px-4 md:px-6 ${scrolled ? "shadow-md border-b bg-background/90 backdrop-blur-lg" : "bg-background/70 border-b"}`}>
                <div className="hidden sm:block">
                    <Link href="/" className="flex-start">
                        <Image
                            src={assets.images.logo}
                            width={30}
                            height={30}
                            alt={`logo`}
                            className="rounded-lg mr-1"
                        />
                    </Link>
                </div>
                <nav className="hidden md:flex gap-5 text-lg font-medium md:text-sm">
                    {menuItems.filter(item => item.show).map((item, index) => (
                        <HeaderLink key={index} item={item} />
                    ))}
                </nav>
                <div className="flex md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <nav className="grid gap-2 text-sm font-medium">
                                {menuItems.filter(item => item.show).map((item, index) => (
                                    <HeaderLink key={index} item={item} />
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="flex sm:hidden">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={assets.images.logo}
                            width={30}
                            height={30}
                            alt={`logo`}
                            className="rounded-lg mr-1"
                        />
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <ModeToggle />
                    <div className="flex items-center gap-2">
                        {user ? (
                            <Button variant='destructive' onClick={handleLogout} asChild className="cursor-pointer group">
                                <span className="flex items-center gap-2">
                                    Logout
                                </span>
                            </Button>
                        ) : (
                            <Button asChild  className="group">
                                <Link href="/login" className="flex items-center gap-2">
                                    Login
                                    <ChevronRight className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                {children}
            </main>
        </div>
    );
}

