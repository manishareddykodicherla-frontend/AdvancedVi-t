"use client"
import { useDispatch } from "react-redux"
import { openAuth } from "../redux/authSlice";
import Styles from "./Library.module.css"
export default function Library() {
    const dispatch=useDispatch();
  return (
    <div>
        <main className={Styles.content}>
            <div>
                <figure className="landing__image--mask">
              <img src="/assets/landing.png" alt="landing" className={Styles.imagewrap}/>
            </figure>
                <h2 className={Styles.text}>
                    login in to your account to see your Library
                </h2>
                <button className={Styles.button} onClick={()=>dispatch(openAuth())}>Login</button>
            </div>

        </main>
    </div>
  )
}
