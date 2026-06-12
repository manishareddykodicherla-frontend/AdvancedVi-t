"use client";
import React from 'react'
import {useState, useEffect} from "react";
import axios from "axios"
import styles from "./Selectedbooks.module.css"
export default function SelectedBooks({data}:any) {
   
  return (
    <>
    
    <div>
<h2> Selected just for you</h2>
<div className={styles.selectedbook}>
  <div className="bookpara">
   {data.subTitle}
  </div>
  <div className="imagedesccription">
    <div className={styles.imagedescription}>
     
              <img src={data.imageLink} alt={data.title} className={styles.image}></img>
      
<div className ="img-description">
  <h4 className={styles.subtitle}>
    {data.title}
  </h4>
  <h5 className={styles.author}>{data.author}</h5>
  <div>3mins <span> 23secs</span></div>
</div>
    </div>
  </div>
</div>
    
    </div>

 

</>
)}
  
