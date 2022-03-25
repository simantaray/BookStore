import React from "react";
import Image from "next/image";

export default function BookCard({ img }) {
  return (
    <div className="cursor-pointer ml-[100px] w-[calc(100vw-100px)] p-10  hover:rotate-[5deg] hover:scale-110 transition duration-100 ease-out  ">
      <div  className="relative h-[300px] w-[200px] ">
        {console.log(img)}
        <Image alt="book" className="rounded-xl" src={img} layout="fill" />
      </div>

      
    </div>
  );
}