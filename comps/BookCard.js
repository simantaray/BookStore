import React from "react";
import Image from "next/image";
export default function BookCard({ img, index }) {
  let color=[]
  return (
    <>
      <div className=" relative ml-[100px]   w-[calc(100vw-100px)] p-10  ">
        <div className="cursor-pointer z-10 relative h-[300px] w-[200px] hover:rotate-[-5deg] hover:scale-110 transition duration-100 ease-out  ">
          <Image alt="book" className="rounded-xl" src={img} layout="fill" />
        </div>
        <h1 className="z-0 text-green-200 relative ml-[-70px] top-[-350px] text-[200px] pr-[-100px] font-bold">{index}</h1>
      </div>
    </>
  );
}
