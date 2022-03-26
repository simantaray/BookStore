import React from "react";
import RecCard from "./RecCard";
export default function FriendsRecommendations() {
  const datas = [
    {
      id: 1,
      title: "FIVE FEET APART",
      img:"/b1.png",
      author: "Rachael Lippincott",
      dec: "In this moving story two teens fall in love with just one minor complica...",
    },
    {
      id: 2,
      title: "ME BEFORE YOU",
      img:"/b2.png",
      author: "Jojo Moyes",
      dec: "They had nothing in common until love gave them everything to lose...",
    },
    {
      id: 3,
      title: "THE HUMAN BRAIN",
      img:"/b3.png",
      author: "Erik Eagleman",
      dec: "A cognitive approach inside the human brain by a Harvard profess...",
    },
  ];
  return (
    <div className="bg-blue-100  h-[calc(100vh-100px)] w-[480px] rounded-tl-xl">
      <div className="p-10">
        <h1 className="text-xl">
          Friends’ Recommendations{" "}
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
  );
}
