
"use client"
import React from 'react'
import { useState } from "react";
import Sidebar from "./Sidebar";
import { CiMenuBurger } from "react-icons/ci";

export default function MobileMenu() {
    const [menuOpen,setMenuOpen]=useState(false);
  return (
    <div>
        <button className="burger" onClick={()=>setMenuOpen(true)}><CiMenuBurger  size={24}/></button>
        {menuOpen && (
                <div className="mobileMenu">
                    <button onClick={()=>setMenuOpen(false)}> X </button>
                    <Sidebar/>
                    </div>
            )
        }
    </div>
  )
}
