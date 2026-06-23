"use client"
import React from 'react'
import { useRef, useState} from "react";
import {useSelector} from "react-redux";
import { IoPlay, IoPause, IoPlayBack,IoPlayForward} from "react-icons/io5";
import Styles from "./Player.module.css";
export default function Player({id}:{id:string}) {
    const audioRef= useRef<HTMLAudioElement>(null);
    const [isPlaying,setIsPlaying]= useState(false);
    const books= useSelector((state:any)=>state.books.allBooks||[]);
    const book =books.find((item:any)=>item.id?.toString()===id);
    if(!book){
        return<div>Loading Player.......</div>
    }
    const handlePlayPause=()=>{
        if(!audioRef.current) return;
        if(isPlaying){
            audioRef.current.pause();
        }
        else{
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    const handleBackward=()=>{
        if(!audioRef.current) return;
        audioRef.current.currentTime-=10;
    }
    const handleForward=()=>{
        if(!audioRef.current) return;
        audioRef.current.currentTime +=10;
    }
  return (
    
        <main className={Styles.player}>
            <h1>{book.title}</h1>
            <p>{book.summary}</p>
            <audio ref={audioRef}>
                <source src={book.audioLink} type="audio/mpeg"/>
            </audio>
<div className={Styles.controls}>
    <button onClick={handleBackward}><IoPlayBack/></button>
    <button onClick={handlePlayPause}>{isPlaying?<IoPause/>:<IoPlay/>}</button>
    <button onClick={handleForward}> <IoPlayForward/></button>
</div>
        </main>
    
  )
}
