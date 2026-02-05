import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/howco.module.css";
import herostyles from "@/app/styles/hero.module.css";

const ContactSection = () => {
  return (
    <section id="contact" className="relative h-auto bg-white text-black py-24 px-8">
      <div className="flex justify-center pb-6 ">
          <hr className="bg-black h-[6px] w-3/4"></hr>
        </div>
      <div className="container mx-auto max-w-5xl">   
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-12">
            Are you ready to get started on your next project?
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12">
            Let's <span className={styles.howcopurple}>work together!</span>
          </h2>
          <div className="text-6xl mb-12">↓</div>
          <Link
            href="https://fullstackhoward.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`shadow-xl w-[90%] max-w-[500px] h-[70px] inline-flex items-center justify-center outline outline-[6px] outline-[#b2a7c5] outline-offset-0 bg-white rounded-[50px] transition-all duration-500 hover:bg-gradient-to-r hover:from-white hover:via-[#957eba] hover:via-[#deafd1] hover:to-[#4fc3ce]`}
            style={{ backgroundSize: '700% 100%' }}
          >
            <span className="text-xl md:text-3xl font-semibold flex items-center px-4">
              <span className="text-black">Visit</span>
              <span className="ml-2" style={{ color: '#957eba' }}>FullStackHoward.com</span>
              <Image 
                src="/svg/arrow.svg" 
                alt="arrow" 
                width={30} 
                height={30} 
                className="hidden min-[400px]:block ml-3 w-[30px] h-[30px] min-[400px]:w-[40px] min-[400px]:h-[40px]"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
