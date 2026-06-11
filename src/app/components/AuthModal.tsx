"use client";
import styles from "./AuthModal.module.css"

import { useState} from "react";
import { useRouter } from "next/navigation";
type AuthModalProps={
    onClose: ()=> void;
  }
export default function AuthModal({onClose}:AuthModalProps) {
    const[email,setEmail]= useState("");
    const [password,setPassword]=useState("");
    const router = useRouter();
    const handleSubmit =()=> {
        router.push("/ForYou")   
     }
  return (
    <div className={styles.authOverlay}>
    <div className={styles.authModal}>
        <button className={styles['btn-close']} onClick={onClose}>X </button>
        <h2 className={styles.title}> Login to Summarist</h2>
        <div>
            <div>
            <button className={styles.button} onClick={() => {handleSubmit()}}>
                Login
            </button>
            </div>
            <div>
            <input type= "text" placeholder="Enter your Email" className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div>
            <input type= "password" placeholder="Enter your password" className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            
            <div>
            <button className={styles.button} onClick={()=>{handleSubmit()}}> Login as Guest</button>
            </div>
        </div>
    </div>
    </div>
  )
}
