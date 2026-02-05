"use client";
import React, { useState, useRef } from "react";
import howco from "@/app/styles/howco-text.module.scss";
import PortfolioCard from "./PortfolioCard";
import PortfolioTag from "./PortfolioTag";
import { motion, useInView } from "framer-motion";

const pData = [
  {
    id: 1,
    title: "LifeBridge Health",
    description:
      "I completely redesigned and replatformed this organization's online presence, resulting in a significant increase in new patients and revenue.",
    image: "/img/lbh.png",
    tag: ["All", "Professional"],
    previewUrl: "https://lifebridgehealth.org/",
    techList: ["HTML5", "CSS3", "PHP", "MySQL", "Drupal"],
  },
  {
    id: 2,
    title: "Alpha Kappa Psi",
    description:
      "While in college, I was commissioned to develop a website for a Business Fraternity, and they still use it to this day.",
    image: "/img/akpsi.png",
    tag: ["All", "Professional"],
    previewUrl: "https://www.ttuakpsi.com/",
    techList: ["HTML5", "CSS3", "PHP", "MySQL", "Wordpress"],
  },
  {
    id: 3,
    title: "Vice Gamers",
    description:
      "I built this website for the gaming community I started over 10 years ago, and it has gone through several iterations",
    image: "/img/gamers.png",
    tag: ["All", "Personal"],
    previewUrl: "https://vicegamers.com/",
    techList: ["HTML5", "CSS3", "Javascript", "MySQL"],
  },
  {
    id: 4,
    title: "Vice Creators",
    description:
      "I developed this website from scratch to showcase and promote my own community of like-minded adult creatives.",
    image: "/img/creators.png",
    tag: ["All", "Personal"],
    previewUrl: "https://vicecreators.com/",
    techList: ["HTML5", "CSS3", "PHP", "MySQL", "Javascript"],
  },
  {
    id: 5,
    title: "Big Notch",
    description:
      "I created this website to showcase on distribute my own music.",
    image: "/img/music.png",
    tag: ["All", "Personal"],
    previewUrl: "https://bignotch.com/",
    techList: ["HTML5", "CSS3", "PHP", "MySQL", "Drupal"],
  },
  {
    id: 6,
    title: "Vicers",
    description:
      "I built this website to chronicle my development journey in areas like full-stack applications, VR development, and AI language model learning.",
    image: "/img/vicers.png",
    tag: ["All", "Personal"],
    previewUrl: "https://vicers.net/",
    techList: ["HTML5", "CSS3", "PHP", "MySQL", "Wordpress"],
  },
  {
    id: 7,
    title: "Potts Home Restoration",
    description:
      "I developed this website for a home restoration company to showcase their services and connect with potential clients.",
    image: "/img/potts.png",
    tag: ["All", "Professional"],
    previewUrl: "https://pottshomerestoration.com",
    techList: ["Wordpress", "TailwindCSS", "React", "PHP"],
  },
];

const PortfolioSection = () => {
  const howocoBlue = "border-[#2e59a9]";
  const howocoSky = "border-[#27bcd8]";
  const howocoPurp = "border-[#957eba]";
  const [tag, setTag] = useState("All");
  const tagChange = (newTag: any) => {
    setTag(newTag);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const filteredPdata = pData.filter((project) => project.tag.includes(tag));

  return (
    <section id="portfolio" className="bg-white text-black p-16">
      <h1 className="p-10 text-4xl text-center justify-between mt-4 mb-8 font-bold">
        Here is my <span className={howco.gradientwipe}>Portfolio</span>...
      </h1>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <PortfolioTag
          onClick={tagChange}
          tagColor={howocoBlue}
          name="All"
          isSelected={tag === "All"}
        />
        <PortfolioTag
          onClick={tagChange}
          tagColor={howocoSky}
          name="Professional"
          isSelected={tag === "Professional"}
        />
        <PortfolioTag
          onClick={tagChange}
          tagColor={howocoPurp}
          name="Personal"
          isSelected={tag === "Personal"}
        />
      </div>
      <div ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredPdata.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="list-none"
          >
            <PortfolioCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
              techList={project.techList}
            />
          </motion.li>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
