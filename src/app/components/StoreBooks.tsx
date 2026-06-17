"use client"
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBooks } from "../redux/booksSlice";
export default function StoreBooks({allBooks}:{allBooks:any[]}) {
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(setBooks(allBooks));
    },[allBooks,dispatch])
  return null;
}
