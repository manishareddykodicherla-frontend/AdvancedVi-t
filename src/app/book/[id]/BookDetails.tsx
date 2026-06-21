"use client"
import { CiBookmark } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { useSelector } from "react-redux"
import Styles from "./BookDetails.module.css"
import React from 'react'
import { useDispatch } from "react-redux";
import { openAuth } from "@/app/redux/authSlice";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addSavedBook } from "../../redux/librarySlice";
import Link from "next/link";
export default function BookDetails({id}:{id:string}) {
    const books=useSelector((state:any)=> state.books.allBooks||[])
    const book= books.find((item:any)=>item.id.toString()===id);
    const [isPlaying,setIsPlaying]=useState(false)
    console.log("redux books:",books);
    console.log("route id:", id);
    console.log("found book:",book)
    const dispatch= useDispatch();
    const router= useRouter();
    const isLoggedIn =useSelector((state:any)=>state.auth.isLoggedIn);
    const isSubscribed=useSelector((state:any)=>state.auth.isSubscribed);
    const handleListen=()=>{
      if(!isLoggedIn){
        dispatch(openAuth());
        return;
      }
      if (book?. subscriptionRequired && !isSubscribed){
        router.push("/chooseplan");
        return;
      }
      router.push (`/player/${book.id}`)
    }
    const handleAddToLibrary=()=>{
      console.log("Add title clicked")
      alert("clicked")
      if (!isLoggedIn){
        dispatch(openAuth());
        return;
      }
      dispatch(addSavedBook(book))
    }
  return (
    <div>
         <div className={Styles.book}>
          <div>
      <div className={Styles.booktitle}> {book?.title}
   </div>
      <div className={Styles.bookauthor}>{book?.author}</div>
      <div className={Styles.bookSubtitle}>{book?.subTitle}</div>
      <div className={Styles.ratingswrap}>
      <div className={Styles.rating}>
        <div> <span className={Styles.ratingicon }><CiStar /> </span><span>{book?.averageRating} </span>
      <span>( {book?.totalRating} rating)</span> 
      </div>
      <div> <span className={Styles.ratingicon}> <IoMdTime /></span> time</div>
      </div>
      <div className={Styles.audiowrap}>
      <div className="audo">
       
         <FaMicrophone />{book?.type}
         </div>
         <div className="ideas">
          <span className={Styles.ratingicon}> <HiOutlineLightBulb /> </span>keyideas{book?.keyIdeas}</div>     
           </div>
           </div>
           
           <Link href="/chooseplan">

      <div className={Styles.buttons}>
           

        <button className={Styles.readbutton} onClick={handleListen}>
          Read
        </button>
       
          <button className={Styles.readbutton} onClick={handleListen}>
            <FaMicrophone />  Listen
            </button>
       
        
      </div>
      </Link>
      <div className={Styles.libraryadd} onClick={handleAddToLibrary}> 
        <div ><CiBookmark /> </div> 
        <div>Add title</div>
        </div>
      <div className="bookdescription">
        <div>
        <h2> What is it about?</h2>
        <div className={Styles.bookwrapper}>
        <div className={Styles.elementwrap}> productivity</div> 
        <div className={Styles.elementwrap}> Personal Developmwnt</div>
        </div>
        <div className={Styles.bookdescription}>{book?.bookDescription}</div>
        </div>
        
        <div className="authordescription">
          <h2> About author</h2>
          <div className={Styles.bookdescription}>{book?.authorDescription}

          </div>
        </div>
      </div>
    </div>
      <div className={Styles.wrapper}>
  <img  src={book?.imageLink}  alt="book"  className={Styles.bookimage}/>
      </div>
</div>
    </div>
    
  )
}
