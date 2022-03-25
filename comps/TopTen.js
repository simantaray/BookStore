import React from 'react'
import BookCard from './BookCard'
export default function TopTen() {
    let array=[1,2,3,4,5,6,7,8,9];
    return (
      
    <section className='z-0'>
    <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 ">
      {array?.map((card) => (
        <BookCard key={card} img={`/book${card}.png`} />
      ))}
    </div>
  </section>
  )
}
