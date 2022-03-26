import React from "react";
import Image from "next/image";
export default function Friends() {
  return (
    <div className="flex">
        <div className=" relative h-[50px] w-[50px]   border-4 rounded-full ">
            <Image
              src="/friend1.png"
              alt="profile"
              layout="fill"
              objectFit="cover"
              className="cursor-pointer"
            />
          </div>
          <div className=" relative h-[50px] w-[50px]   border-4 rounded-full ">
            <Image
              src="/friend2.png"
              alt="profile"
              layout="fill"
              objectFit="cover"
              className="cursor-pointer"
            />
          </div>
          <div className=" relative h-[50px] w-[50px] r-[-100px]  border-4 rounded-full ">
            <Image
              src="/friend3.png"
              alt="profile"
              layout="fill"
              objectFit="cover"
              className="cursor-pointer"
            />
          </div>
    </div>
  )
}
