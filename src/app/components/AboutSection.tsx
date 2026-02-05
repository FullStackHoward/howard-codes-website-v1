import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/howco-text.module.scss";
import styles2 from "@/app/styles/howco.module.css";
import herostyles from "@/app/styles/hero.module.css";
import FluerDeLis from "@/app/components/graphics/FluerDeLis";
import NolaDivider from "@/app/components/graphics/NolaDivider";

const AboutSection = () => {
  return (
    <section id="about" className="relative h-auto bg-white  text-black ">
      <div className="grid grid-cols-1 lg:grid-cols-12 z-1 lg:p-12">
        <div className="w-full lg:col-span-8 place-self-center ">
          <div
            id="blurb"
            className="p-8 text-2xl font-normal whitespace-break-spaces space-y-14  mt-4 lg:mt-0 text-left z-1"
          >
            <p>
           I'm a seasoned full-stack developer based in the DMV area, originally from New Orleans, Louisiana, bringing a unique blend of skills. My background encompasses cloud infrastructure and DevOps practices, allowing me to build scalable websites and web applications that grow with your business. I specialize in architecting solutions that are built to last, whether that means optimizing deployment pipelines, containerizing applications, or implementing robust CI/CD workflows.
            </p>

            <p>
            My development journey began in 2006, where I honed my craft building for the web. I've been immersed in the entire product development lifecycle ever since, from concept to deployment, delivering solutions that are both technically sound and built for scale.
            </p>
            <p>
          Beyond code, I also craft the visual experiences that bring these technical solutions to life. From wireframes to final design, I deliver cohesive products that feel intentional from the first pixel to the final deployment. Want to see the creative side?

            </p>

          </div>
          <div className="flex justify-center mt-8 px-8">
            <Link
              href="https://mrhoward.net"
              target="_blank"
              rel="noopener noreferrer"
              className={`${herostyles.btn2} shadow-xl w-[90%] max-w-[500px] h-[70px] flex items-center justify-center`}
            >
              <span className="text-sm sm:text-lg md:text-2xl font-semibold flex items-center px-2 sm:px-4">
                <span className="whitespace-nowrap">View My</span> <span className="ml-2 whitespace-nowrap" style={{ color: '#957eba' }}>Creative Portfolio</span>
                <Image 
                  src="/svg/arrow.svg" 
                  alt="arrow" 
                  width={25} 
                  height={25} 
                  className="hidden min-[400px]:block ml-2 sm:ml-3 w-[25px] h-[25px] min-[400px]:w-[30px] min-[400px]:h-[30px] sm:w-[40px] sm:h-[40px]"
                />
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-4 lg:place-self-center mt-4 z-1">
          <Image
            src="/graphics/joshhoward.jpeg"
            alt="Joshua Howard"
            className={`${styles.pulsate} transform sm:w-[250px] sm:h-auto`}
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="absolute inset-0 -z-1 mt-[550px] md:mt-[400px] opacity-20 pointer-events-none">
        <FluerDeLis />
      </div>
      <div className={` ${styles2.divider} relative`}>
        {" "}
        <NolaDivider />
      </div>
    </section>
  );
};

export default AboutSection;
