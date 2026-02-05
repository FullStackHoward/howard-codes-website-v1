"use client";
import Link from "next/link";
import React from "react";
import MailIcon from "./icons/MailIcn";
import LinkedInIcon from "./icons/LinkedinIcn";
import TwitterIcon from "./icons/TwitterIcn";
import ResumeIcon from "./icons/ResumeIcn";
import GithubIcon from "./icons/GithubIcn";
import BlogIcon from "./icons/BlogIcn";
import NavLink from "./NavLink";
import ReactIcon from "./icons/ReactIcn";
import TailwindIcon from "./icons/Tailwind";
import NextIcon from "./icons/NextIcn";

const today = new Date();
const year = today.getFullYear();

const navLinks = [
  {
    path: "/doc/resume.pdf",
    compName: <ResumeIcon />,
  },
  {
    path: "mailto:josh@fullstackhoward.com",
    compName: <MailIcon />,
  },
  {
    path: "https://www.linkedin.com/in/fullstackhoward/",
    compName: <LinkedInIcon />,
  },

  {
    path: "https://github.com/fullstackhoward",
    compName: <GithubIcon />,
  },
];

const FooterSection = () => {
  return (
    <section className="p-16">
      <div id="footer" className="container mx-auto">


        <div className="menu md:w-auto" id="navbar">
          <ul className="flex p-1 md:p-1 md:flex-row md:space-x-1 mt-0 justify-center items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} compName={link.compName} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center pt-3 pb-3 ">
          <hr className="bg-white h-[3px] w-1/3"></hr>
        </div>
        <div className="flex flex-row space-x-1 items-center justify-center text-white">
          <h1 className="text-3xl text-nowrap">Made with </h1>
          <ul className="flex pl-4 pb-4 space-x-1">
            <li>
              <ReactIcon className="h-[40px] w-[40px]" />
            </li>
            <li>
              <TailwindIcon className="h-[40px] w-[40px]" />
            </li>
            <li>
              <NextIcon className="h-[40px] w-[40px]" />
            </li>
          </ul>
        </div>
        <p className="flex text-xs md:text-sm items-center justify-center text-white">
          ©{year} FullStackHoward LLC. All rights reserved
        </p>
      </div>
    </section>
  );
};

export default FooterSection;
