"use client";
import styles from "./AuthModal.module.css"
import { useDispatch ,useSelector } from "react-redux";
import { closeauth,login } from "../redux/authSlice";
import { useState} from "react";
import { useRouter } from "next/navigation";
import type { Rootstate } from "../redux/store";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase";
export default function AuthModal() {
    const[email,setEmail]= useState("");
    const [password,setPassword]=useState("");
    const router = useRouter();
    const handleSubmit =()=> {
        router.push("/ForYou")   
     }

     const dispatch=useDispatch();
     const isAuthopen= useSelector((state:Rootstate)=>state.auth.isAuthOpen);
     if(!isAuthopen) return null
     const userData={email}
     const handleLogin= async()=>{
        try{
            const response= await signInWithEmailAndPassword( auth, email, password);
            dispatch(login ({
                email:response.user.email,
                uid:response.user.uid,
            }))
            dispatch(closeauth());
            router.push("/ForYou");
        }
        catch(error){
            console.log(error)
        }
     }

  return (
    <div className={styles.authOverlay}>
    <div className={styles.authModal}>
        <button className={styles['btn-close']} onClick={()=>dispatch(closeauth())}>X </button>
        <h2 className={styles.title}> Login to Summarist</h2>
        <div>
            <div>
            <button className={styles.button} onClick={handleLogin}>
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
