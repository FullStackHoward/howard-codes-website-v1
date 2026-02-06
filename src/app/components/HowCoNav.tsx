"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import MenuOverlay from "@/app/components/MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const navLinks = [
  {
    path: "#about",
    title: "About",
  },
  {
    path: "#tools",
    title: "Tools",
  },
  {
    path: "#portfolio",
    title: "Portfolio",
  },
  {
    path: "#contact",
    title: "Contact",
  },
];

const HowCoNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="absolute mx-auto top-0 left-0 right-0 z-10">
      <div className="flex flex-nowrap items-center justify-between mx-auto p-8">
        <Link href={"/"}>
          <motion.div
            initial={{ x: "-100%", opacity: 0, scale: 0 }}
            animate={{ x: "0%", opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              priority
              src="/logos/howco-logo.svg"
              height={45}
              width={459}
              alt="Howard Codes"
            />
          </motion.div>
        </Link>
        <div className="mobile-menu pl-3 relative md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)}>
              <Bars3Icon className=" h-10 w-10 text-[#deafd1]" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)}>
              <XMarkIcon className=" h-10 w-10 text-[#deafd1]" />
            </button>
          )}
        </div>
        <motion.div
          initial={{ x: "100%", opacity: 0, scale: 0 }}
          animate={{ x: "0%", opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="menu hidden md:block md:w-auto"
          id="navbar"
        >
          <ul className="flex p-1 md:p-1 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  href={link.path}
                  onClick={(e) => handleClick(e, link.path)}
                  className="block py-2 pl-3 pr-4 text-[#deafd1] text-2xl md:text-3xl rounded md:p-0 hover:text-white transition-colors duration-200"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      {navbarOpen ? <MenuOverlay /> : null}
    </nav>
  );
};

export default HowCoNav;
