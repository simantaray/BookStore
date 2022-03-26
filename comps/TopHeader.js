import React from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";

export default function TopHeader() {
  return (
    <header
      className={`ml-[100px] w-[calc(100vw-100px)] backdrop-filter backdrop-blur-lg bg-white sticky top-0 z-10 trasition ease-in-out duration-200 `}
    >
      <div
        className={`h-[100px] grid grid-cols-3 mx-auto items-center justify-between px-8  `}
      >
        {/* main contant */}
        <div className="text-2xl relative font-bold text-center  ">
          My Dashboard
        </div>
        <div className="relative">
          <div
            className={`flex items-center border-2 rounded-lg border-gray-400 py-1  bg-gray-100 `}
          >
            <SearchIcon className="  ml-1 h-9  p-2 text-black cursor-pointer right-0" />
            <input
              className="w-[110px] flex-grow pl-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 tracking-wide"
              type="text"
              placeholder="Search book titles, authors, publishers..."
            />
          </div>
        </div>

        <div className=" relative flex items-center text-center justify-center  ">
          <div className="px-8 flex">
              <h1 className="text-lg ">Online</h1>
              
          </div>
          <div className=" relative h-[50px] w-[50px]   border-4 rounded-full ">
            <Image
              src="/friend1.png"
              alt="profile"
              layout="fill"
              objectFit="cover"
              className="cursor-pointer"
            />
          </div>
          <div className=" relative h-[50px] w-[50px] opacity-90  border-4 rounded-full ">
            <Image
              src="/friend2.png"
              alt="profile"
              layout="fill"
              objectFit="cover"
              className="cursor-pointer"
            />
          </div>
          <div className=" relative h-[50px] w-[50px] r-[-100px] opacity-50 border-4 rounded-full ">
            <Image
              src="/friend3.png"
              alt="profile"
              layout="fill"
              objectFit="cover"
              className="cursor-pointer"
            />
          </div>
          <div></div>
        </div>
      </div>
    </header>
  );
}
