"use client";
import Image from "next/image";
import {useState} from "react";
import styles from "./page.module.css";
import Nav from '@/app/components/Nav'
import Landing from "./components/Landing";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Numbers from "./components/Numbers";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";

export default function Home() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      <Nav onLoginClick={() => setIsAuthOpen(true)}/>
      
<Landing onLoginClick={() => setIsAuthOpen(true)}/>
  {isAuthOpen && (<AuthModal onClose={() => setIsAuthOpen(false)} />)}
<Features/>
<Reviews/>
<Numbers/>
<Footer/>
    </div>
  );
}
