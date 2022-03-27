import React from "react";
import RecCard from "./RecCard";
function ContinueReading() {
    const datas = [
        {
          id: 1,
          title: "FIVE FEET APART",
          img:"/b1.png",
          author: "Rachael Lippincott",
          dec: "In this moving story two teens fall in love with just one minor complica...",
        },
        
      ];
  return (
    <div>
      <div className="bg-blue-100 pl-[100px] h-[calc(42vh)] w-[50vw] rounded-tr-xl">
        <div className="p-10">
          <h1 className="text-xl">
          Continue Reading..{" "}
            <span className="right-[150px] font-bold text-yellow-50 top-[36px] absolute w-10 h-10 text-center  p-[5px] rounded-full bg-red-400">
              3
            </span>
          </h1>
        </div>
        <div className="pl-10">
        {datas?.map((data) => (
          <RecCard key={data.id} title={data.title} img={data.img} author={data.author} dec={data.dec}/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default ContinueReading;
