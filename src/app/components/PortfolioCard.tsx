import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const PortfolioCard = ({
  imgUrl,
  title,
  description,
  previewUrl,
  techList,
}: any) => {
  return (
    <div className="container drop-shadow-xl">
      <div
        className="relative h-52 md:h-72 rounded-t-xl group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#d9d9d9] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#d9d9d9] absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#957eba]" />
          </Link>
        </div>
      </div>

      <div className="text-black rounded-b-xl shadow-[0_0_0_4px_rgba(255, 255, 255,1)] bg-[#d9d9d9] p-4">
        <h5 className="font-black drop-shadow-lg border-b-2 border-gray-500 text-2xl opacity-75 mb-2">
          {title}
        </h5>
        <p className="text-light opacity-75">{description}</p>
        <p className=" space-x-1 italic text-sm pt-3 opacity-45">{techList.join(" - ")}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
