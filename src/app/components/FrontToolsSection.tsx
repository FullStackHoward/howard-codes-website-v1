import React from "react";
import txtstyles from "@/app/styles/howco.module.css";
import animations from "@/app/styles/howco-text.module.scss";
import Image from "next/image";
import TiltDivider from "@/app/components/graphics/TiltDivider";

const FrontToolsSection = () => {
  return (
    <section id="tools" className="relative h-auto  text-white z-3">
      <div className="p-10">
        <h1 className=" text-4xl text-center font-bold ">
          Here are some{" "}
          <span className={txtstyles.howcopurple}>Front-End </span>tools I
          use...{" "}
        </h1>
      </div>
      <div className="w-full inline-flex flex-nowrap overflow-hidden pb-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <Image
              src="/svg/frontend/blender.svg"
              alt="Blender"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/bootstrap.svg"
              alt="Booststrap CSS Framework"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/bulma.svg"
              alt="Bulma CSS Framework"
              className="w-auto h-[70px] "
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/css.svg"
              alt="CSS3"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/foundation.svg"
              alt="Foundation CSS Framework"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/grunt.svg"
              alt="Grunt"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/html.svg"
              alt="HTML5"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/illustrator.svg"
              alt="Adobe Illustrator"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/js.svg"
              alt="Javascript"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/nextjs.svg"
              alt="NextJS React Framework"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/photoshop.svg"
              alt="Adobe Photoshop"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/react.svg"
              alt="React JS Framework"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/sass.svg"
              alt="Sass Scss"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/tailwind.svg"
              alt="Tailwind CSS Framework"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/typescript.svg"
              alt="Typescript, Syntactical JS Framework"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/unity.svg"
              alt="Unity - Game Engine"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <Image
              src="/svg/frontend/blender.svg"
              alt="Blender"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/bootstrap.svg"
              alt="Booststrap CSS Framework"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/bulma.svg"
              alt="Bulma CSS Framework"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/css.svg"
              alt="CSS3"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/foundation.svg"
              alt="Foundation CSS Framework"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/grunt.svg"
              alt="Grunt"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/html.svg"
              alt="HTML5"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/illustrator.svg"
              alt="Adobe Illustrator"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/js.svg"
              alt="Javascript"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/nextjs.svg"
              alt="NextJS React Framework"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/photoshop.svg"
              alt="Adobe Photoshop"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/react.svg"
              alt="React JS Framework"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/sass.svg"
              alt="Sass Scss"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/tailwind.svg"
              alt="Tailwind CSS Framework"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/typescript.svg"
              alt="Typescript, Syntactical JS Framework"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/svg/frontend/unity.svg"
              alt="Unity - Game Engine"
              className="w-auto h-[70px]"
              width={300}
              height={300}
            />
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center flex-row w-full h-auto p-4 space-x-36">
        <div className={animations.planet1}>
          <Image
            src="/planets/Asset 1.svg"
            alt="Planet 1"
            className="hidden md:block lg:w-auto h-[250px] mt-10"
            width={300}
            height={300}
          />
        </div>
        <div className={animations.planet2}>
          <Image
            src="/planets/Asset 8.svg"
            alt="Planet 2"
            className="hidden md:block lg:w-auto h-[200px] mb-40"
            width={300}
            height={300}
          />
        </div>
        <div className={animations.planet3}>
          <Image
            src="/planets/Asset 3.svg"
            alt="Planet 3"
            className="hidden md:hidden lg:block lg:w-auto h-[250px] mt-32"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default FrontToolsSection;
