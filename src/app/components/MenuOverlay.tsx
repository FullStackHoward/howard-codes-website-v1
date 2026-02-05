import React from "react";
import Link from "next/link";

const mobileNavLinks = [
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

const MenuOverlay = () => {
  return (
    <ul className="flex flex-col py-4 items-center bg-slate-900 bg-opacity-50 text-white">
      {mobileNavLinks.map((link, index) => (
        <li key={index} className="hover:font-black hover:border-white">
          <Link 
            href={link.path}
            className="block py-2 px-4 text-[#deafd1] text-2xl hover:text-white transition-colors duration-200"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
