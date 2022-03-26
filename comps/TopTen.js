import React from 'react'
import BookCard from './BookCard'
export default function TopTen() {
    let array=[1,2,3,4,5,6,7,8,9];
    return (
      
    <div className='z-0'>
      <h1 className='relative mt-10 ml-[150px] text-1xl font-bold mb-[-32px]'>Top 10 in India today</h1>
    <div className=" ml-[50px] flex space-x-4 overflow-y-hidden scrollbar-hide p-3 ">
      {array?.map((card) => (
        <BookCard key={card} img={`/book${card}.png`} index={card}/>
      ))}
    </div>
  </div>
  )
}
