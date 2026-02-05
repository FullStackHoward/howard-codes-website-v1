"use client";
import React from "react";
import Image from "next/image";
import styles from "@/app/styles/hero.module.css";
import textstyles from "@/app/styles/howco-text.module.scss";
import { TypeAnimation } from "react-type-animation";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion } from "framer-motion";

const HowCoHero = () => {
  return (
    <section id="hero" className="pb-16 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 "
        >
          <Image
            src="/svg/howco-avi.svg"
            alt="hero image"
            className="transform sm:w-[350px] sm:h-auto"
            width={300}
            height={300}
          />
        </motion.div>
        <div className="col-span-8 place-self-center lg:w-full">
          <motion.p
            initial={{ y: "100%", opacity: 0, scale: 0 }}
            animate={{ y: "0%", opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" hidden text-white text-base mb-4 md:block lg:text-3xl  lg:ml-[170px] font-normal"
          >
            Hi, I'm Howard
          </motion.p>
          <motion.h1
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-white p-6 mb-1 text-4xl sm:text-5xl font-bold lg:text-6xl lg:leading-normal text-center"
          >
            <span className="text-sky-50"> I'm a </span>
            <br></br>
            <span className={textstyles.gradientwipe}>
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  3000,
                  "DevOps Engineer",
                  3000,
                  "Cloud Engineer",
                  3000,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
              />
            </span>
          </motion.h1>
          <motion.div
            initial={{ x: "100%", opacity: 0, scale: 0 }}
            animate={{ x: "0%", opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-8 md:space-y-0 items-center justify-center text-center button md:flex-row md:space-x-12"
          >
            <Link
              href="mailto:josh@fullstackhoward.com"
              className={`${styles.btn} shadow-xl w-[300px] min-[400px]:w-[400px] h-[55px] md:w-[200px] lg:w-[280px] lg:h-[70px]`}
            >
              <span className="relative inline-block top-[0.7rem] lg:top-[1rem] text-sm min-[400px]:text-base lg:text-xl">
                Contact Me
                <EnvelopeIcon className="hidden min-[400px]:inline-block h-6 w-6 min-[400px]:h-8 min-[400px]:w-8 lg:h-10 lg:w-10 pl-2 mb-1" />
              </span>
            </Link>
            <Link
              href={"/doc/resume.pdf"}
              scroll={true}
              className={`${styles.btn2} shadow-xl w-[300px] min-[400px]:w-[400px] h-[55px] md:w-[200px] lg:w-[280px] lg:h-[70px] lg:flex lg:items-center lg:justify-center`}
            >
              <span className="relative inline-block top-2 lg:static lg:flex lg:items-center text-sm min-[400px]:text-base lg:text-xl">
                My Resume
                <ArrowDownCircleIcon className="hidden min-[400px]:inline-block lg:block h-6 w-6 min-[400px]:h-8 min-[400px]:w-8 lg:h-10 lg:w-10 pl-2 mb-1 lg:mb-0" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowCoHero;
