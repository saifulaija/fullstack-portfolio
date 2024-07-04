"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation"; // Import useRouter and usePathname from next/navigation
import clsx from "clsx";

import { APP_NAME, links } from "@/lib/constant";
import { useActiveSectionContext } from "@/context/active-section-context";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import Image from "next/image";
import assets from "@/assets";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HardDriveDownload, Menu } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext(); 
  const handleNavigation = (link: any) => {
    if (link.hash.startsWith("#")) {
      if (pathname.startsWith("/blogs")) {
        router.push(`/${link.hash}`);
        setTimeout(() => {
          const element = document.querySelector(link.hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 0);
      } else {

        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }

        window.history.pushState(null, "", link.hash);
      }
    } else if (link.hash.startsWith("/") && pathname.startsWith("/blogs")) {

      router.push(link.hash);
    } else {

      router.push(link.hash);
    }

    setActiveSection(link.name);
    setTimeOfLastClick(Date.now());
  };


  const handleClick = (link: any) => {
    if (link.hash.startsWith("#") && pathname.startsWith("/blogs")) {

      router.push(`/${link.hash}`);
      setTimeout(() => {
        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else if (link.hash.startsWith("/") && pathname.startsWith("/blogs")) {

      router.push(link.hash);
    } else {

      handleNavigation(link);
    }
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 flex h-16 items-center z-50 transition-shadow duration-300 justify-between gap-4 px-4 md:px-20 ${scrolled ? "shadow-md bg-background/90 backdrop-blur-lg" : "bg-background/70"}`}>
      <div className="flex items-center">
        <Link href="/" className="flex-start">
          <Image
            src={assets.images.logo}
            width={30}
            height={30}
            alt={`${APP_NAME} logo`}
            className="rounded-lg mr-1"
          />
        </Link>
      </div>
      <ul className="hidden md:flex gap-5 w-[22rem] items-center justify-center text-[0.9rem] font-medium text-gray-500">
        {links.map((link) => (
          <motion.li
            className="flex items-center justify-center relative"
            key={link.hash}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <button
              className={clsx(
                "flex items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                {
                  "text-gray-950 dark:text-gray-200": activeSection === link.name,
                }
              )}
              onClick={() => handleClick(link)}
            >
              {link.name}
              {link.name === activeSection && (
                <motion.span
                  className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}
            </button>
          </motion.li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Button variant='outline' className="group">
  <a
    href="/resume.pdf"
    download
    className="flex items-center space-x-2"
  >
    <span>Download Resume</span>
    <HardDriveDownload className="opacity-60 group-hover:translate-y-1 transition" />
  </a>
</Button>
      </div>
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button aria-hidden='true' variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <ul className="grid gap-2 text-sm font-medium">
              {links.map((link) => (
                <li
                  className="flex items-center relative"
                  key={link.hash}
                >
                  <button
                    className={clsx(
                      "flex items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                      {
                        "text-gray-950 dark:text-gray-200": activeSection === link.name,
                      }
                    )}
                    onClick={() => handleClick(link)}
                  >
                    {link.name}
                    {link.name === activeSection && (
                      <span className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}




// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { useRouter, usePathname } from "next/navigation"; // Import useRouter and usePathname from next/navigation
// import clsx from "clsx";

// import { links } from "@/lib/constant";
// import { useActiveSectionContext } from "@/context/active-section-context";
// import { ModeToggle } from "./ModeToggle";

// export default function Header() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext(); // State and context

//   const handleNavigation = (link: any) => {
//     if (link.hash.startsWith("#")) {
//       if (pathname.startsWith("/blogs")) {
//         router.push(`/${link.hash}`);
//         setTimeout(() => {
//           const element = document.querySelector(link.hash);
//           if (element) {
//             element.scrollIntoView({ behavior: "smooth" });
//           }
//         }, 0);
//       } else {

//         const element = document.querySelector(link.hash);
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         }

//         window.history.pushState(null, "", link.hash);
//       }
//     } else if (link.hash.startsWith("/") && pathname.startsWith("/blogs")) {

//       router.push(link.hash);
//     } else {

//       router.push(link.hash);
//     }

//     setActiveSection(link.name);
//     setTimeOfLastClick(Date.now());
//   };


//   const handleClick = (link: any) => {
//     if (link.hash.startsWith("#") && pathname.startsWith("/blogs")) {

//       router.push(`/${link.hash}`);
//       setTimeout(() => {
//         const element = document.querySelector(link.hash);
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 0);
//     } else if (link.hash.startsWith("/") && pathname.startsWith("/blogs")) {

//       router.push(link.hash);
//     } else {

//       handleNavigation(link);
//     }
//   };

//   return (
//     <header className="z-[999] relative ">
//       <motion.div
//         className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-md dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
//         initial={{ y: -100, x: "-50%", opacity: 0 }}
//         animate={{ y: 0, x: "-50%", opacity: 1 }}
//       ></motion.div>

//       <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
//         <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
//           {links.map((link) => (
//             <motion.li
//               className="h-3/4 flex items-center justify-center relative"
//               key={link.hash}
//               initial={{ y: -100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//             >
//               <button
//                 className={clsx(
//                   "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
//                   {
//                     "text-gray-950 dark:text-gray-200":
//                       activeSection === link.name,
//                   }
//                 )}
//                 onClick={() => handleClick(link)}
//               >
//                 {link.name}

//                 {link.name === activeSection && (
//                   <motion.span
//                     className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
//                     layoutId="activeSection"
//                     transition={{
//                       type: "spring",
//                       stiffness: 380,
//                       damping: 30,
//                     }}
//                   ></motion.span>
//                 )}
//               </button>
//             </motion.li>
//           ))}
//         </ul>
//         <ModeToggle/>
//       </nav>
//     </header>
//   );
// }
