import React from "react";
import Image from 'next/image'
import {
    CollectionIcon,BellIcon, BookmarkIcon,CogIcon,LogoutIcon
} from "@heroicons/react/outline";
function Header() {
  return (
    <>
      <div className="relative h-[100vh] w-[100px] bg-gray-100">
        {/* logo */}
        <div className="relative h-[60px] w-[60px] top-10 left-0 right-0 mx-auto my-auto ">
            <Image src="/logo.svg" alt="logo" layout='fill' className="p-10 cursor-pointer" />
        </div>
        
        {/* items */}
        <div className="px-8  pt-[90px] text-gray-500  ">
        <CollectionIcon className="mt-10 cursor-pointer hover:text-sky-700 hover:scale-105"/>
        <BellIcon className="mt-10 cursor-pointer hover:text-sky-700 hover:scale-105" />
        <BookmarkIcon className="mt-10 cursor-pointer hover:text-sky-700 hover:scale-105"/>
        <CogIcon className="mt-10 cursor-pointer hover:text-sky-700 hover:scale-105"/>
        </div>
        
        {/* {profile} */}
        <div className=" absolute h-[60px] w-[60px] bottom-[150px] left-0 right-0 mx-auto my-auto border-4 rounded-full border-yellow-100 hover:border-yellow-500">
            <Image src="/profile.png" alt="profile"  layout="fill" objectFit="cover" className="cursor-pointer" />
        </div>
        {/* logout/in */}
        <div className="absolute px-8 bottom-[70px]  text-gray-500  ">
            <LogoutIcon className="mt-10 cursor-pointer hover:text-sky-700 hover:scale-105"/>
        </div>
        
      </div>
    </>
  );
}

export default Header;
