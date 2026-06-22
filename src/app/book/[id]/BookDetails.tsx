"use client"
import { CiBookmark, CiStar } from "react-icons/ci";
import { HiOutlineLightBulb } from "react-redux"; // Wait, make sure this comes from 'react-icons/hi'
import { HiOutlineLightBulb as HiLight } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import Styles from "./BookDetails.module.css";
import React, { useState } from 'react';
import { openAuth } from "@/app/redux/authSlice";
import { useRouter } from "next/navigation";
import { addSavedBook } from "../../redux/librarySlice";

export default function BookDetails({ id }: { id: string }) {
    const dispatch = useDispatch();
    const router = useRouter();

    // 1. Grab state from Redux
    const books = useSelector((state: any) => state.books.allBooks || []);
    const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
    const isSubscribed = useSelector((state: any) => state.auth.isSubscribed);

    // 2. Find the target book safely
    const book = books.find((item: any) => item.id.toString() === id.toString());

    // 3. Prevent crashes if Redux state isn't populated yet
    if (!book) {
        return <div className={Styles.loading}>Loading book details...</div>;
    }

    const handleListen = () => {
        // Auth check first
        if (!isLoggedIn) {
            dispatch(openAuth());
            return;
        }
        
        // Subscription check second
        if (book.subscriptionRequired && !isSubscribed) {
            router.push("/chooseplan");
            return;
        }
        
        // Safe navigation since we verified 'book' exists above
        router.push(`/player/${book.id}`);
    };

    const handleAddToLibrary = () => {
        if (!isLoggedIn) {
            dispatch(openAuth());
            return;
        }
        dispatch(addSavedBook(book));
    };

    return (
        <div>
            <div className={Styles.book}>
                <div>
                    <div className={Styles.booktitle}>{book.title}</div>
                    <div className={Styles.bookauthor}>{book.author}</div>
                    <div className={Styles.bookSubtitle}>{book.subTitle}</div>
                    
                    <div className={Styles.ratingswrap}>
                        <div className={Styles.rating}>
                            <div> 
                                <span className={Styles.ratingicon}><CiStar /></span>
                                <span>{book.averageRating} </span>
                                <span>({book.totalRating} ratings)</span> 
                            </div>
                            <div><span className={Styles.ratingicon}><IoMdTime /></span> {book.duration || '0m'}</div>
                        </div>
                        <div className={Styles.audiowrap}>
                            <div className="audio">
                                <FaMicrophone /> {book.type}
                            </div>
                            <div className="ideas">
                                <span className={Styles.ratingicon}><HiLight /></span> 
                                key ideas: {book.keyIdeas}
                            </div>     
                        </div>
                    </div>
                    
                    <div className={Styles.buttons}>
                        <button className={Styles.readbutton} onClick={handleListen}>
                            Read
                        </button>
                        <button className={Styles.readbutton} onClick={handleListen}>
                            <FaMicrophone /> Listen
                        </button>
                    </div>

                    <div className={Styles.libraryadd} onClick={handleAddToLibrary}> 
                        <div><CiBookmark /></div> 
                        <div>Add title</div>
                    </div>

                    <div className="bookdescription">
                        <div>
                            <h2>What is it about?</h2>
                            <div className={Styles.bookwrapper}>
                                <div className={Styles.elementwrap}>Productivity</div> 
                                <div className={Styles.elementwrap}>Personal Development</div>
                            </div>
                            <div className={Styles.bookdescription}>{book.bookDescription}</div>
                        </div>
                        
                        <div className="authordescription">
                            <h2>About author</h2>
                            <div className={Styles.bookdescription}>{book.authorDescription}</div>
                        </div>
                    </div>
                </div>

                <div className={Styles.wrapper}>
                    <img src={book.imageLink} alt={book.title} className={Styles.bookimage}/>
                </div>
            </div>
        </div>
    );
}