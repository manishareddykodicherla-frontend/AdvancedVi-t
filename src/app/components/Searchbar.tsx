"use client"
import React from 'react'
import Styles from "./Searchbar.module.css"
import { useState } from 'react'
import { useSelector } from 'react-redux';
import Link from 'next/link';
export default function Searchbar() {
  const [search,setSearch]= useState("");
  const books= useSelector((state:any)=>state.books.allBooks);
  const filteredBooks= books.filter((books:any)=>books.title.toLowerCase().includes(search.toLowerCase()));
  console.log("search text:", search);
  console.log("all books:" ,books)
  console.log("filtered:", filteredBooks)
  return (
    <div>
      <div className={Styles.searchWrapper}>
      <input type="text" placeholder="search" className={Styles.searching}
      onChange={(e)=>setSearch(e.target.value)}></input>
      {search &&(
        <div className={Styles.searchResults}>
          {
            filteredBooks.map((book:any)=>(
              <Link href={`/book/${book.id}`}>
              <div className={Styles.searchItem} key={book.id}>
                <img src={book.imageLink}
                alt={book.title}
                className={Styles.bookImage} />
                <div>
<h2>{book.title}</h2>

<p>{book.author}</p>
<div className={Styles.time}>
  <span>{book.duration}</span>
  </div>
  
                </div>
              </div>
                                </Link>

            ))
          }

        </div>
      )}
      </div>
    </div>
  )
}
