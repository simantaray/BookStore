import React from "react";
import Image from "next/image";
import Friends from "./Friends";
function RecCard({title, img ,author , dec}) {
  return (
    <div className="cursor-pointer bg-white rounded-lg w-[90%] h-[180px] mb-10  hover:ml-[-15px] transition duration-200 ease-in-out">
      <div className="flex">
        <div className="relative h-[70px] w-[50px] top-4 left-4 p-4 ">
          <Image
            src={img}
            alt="logo"
            layout="fill"
            className="p-10 cursor-pointer rounded-md"
          />
        </div>
        <div className="pl-6 pt-4">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p>By {author}</p>
        </div>
      </div>
      <p className="pl-6 pt-6 w-[85%] pb-2">{dec}</p>
      <Friends />
    </div>
  );
}

export default RecCard;
